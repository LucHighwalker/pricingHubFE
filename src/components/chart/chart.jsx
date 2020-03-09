import React, { Component } from "react";
import { connect } from "react-redux";
import "./chart.scss";

import { Line } from "react-chartjs-2";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap";
import { SingleDatePicker } from "react-dates";
import "chartjs-plugin-zoom";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "",
      date: null,
      price: 0.0,
      data: {},
      competitors: []
    };
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 4) - hash);
    }
    return hash;
  }

  intToColor(int) {
    var c = (int & 0x00ffffff).toString(16).toUpperCase();

    const color = "00000".substring(0, 6 - c.length) + c;
    return `#${color}`;
  }

  addPrice() {
    console.log("date: ", this.state.date);
    console.log("price: ", this.state.price);
  }

  getCompetitorList() {
    fetch("http://127.0.0.1:4200/prices/competitor_list/")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ competitors: res.competitor });
      });
  }

  updateData(comp) {
    const data = {
      title: {
        text: "Prices over time"
      },
      datasets: []
    };
    fetch(`http://127.0.0.1:4200/prices/competitor/${comp}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        data.datasets = res.competitor.map(c => {
          const color = this.intToColor(this.hashCode(c.label));
          c.fill = false;
          c.backgroundColor = color;
          c.borderColor = color;
          return c;
        });
        this.setState({ data, current: comp });
      });
  }

  componentDidMount() {
    this.updateData(this.state.current);
    this.getCompetitorList();
    // ChartJS.pluginService.register(Zoom);
  }

  render() {
    return (
      <div className="chart">
        <DropdownButton
          className="competitor_selector"
          id="dropdown-item-button"
          title={this.state.current || "select competitor"}
        >
          <Dropdown.Item as="button" onClick={() => this.updateData("")}>
            Show all
          </Dropdown.Item>
          <Dropdown.Divider />
          {this.state.competitors.map((c, i) => {
            return (
              <Dropdown.Item
                key={i}
                as="button"
                onClick={() => this.updateData(c)}
                style={{ color: this.intToColor(this.hashCode(c)) }}
              >
                {c}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <Line
          data={this.state.data}
          options={{
            title: { text: "This is a test" },
            pan: {
              enabled: true,
              mode: "x"
            },
            zoom: {
              enabled: true,
              mode: "x"
            },
            legend: {
              display: false,
              position: "left"
            },
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  title: "time",
                  type: "time",
                  gridLines: {
                    lineWidth: 2
                  },
                  time: {
                    parser: "MM/DD/YYYY",
                    tooltipFormat: "ll HH:mm",
                    unit: "day",
                    unitStepSize: 1,
                    displayFormats: {
                      day: "MM/DD/YYYY"
                    }
                  }
                }
              ]
            }
          }}
        />
        {this.state.current !== "" ? (
          <Form className="price_form">
            <h1>Add Price</h1>
            <SingleDatePicker
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              id="date"
            />
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Price"
                onChange={e => this.setState({ price: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" disabled={this.state.date === null || this.state.price <= 0} onClick={() => this.addPrice()}>
              Submit
            </Button>
          </Form>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  // action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
