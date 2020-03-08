import React, { Component } from "react";
import { connect } from "react-redux";
import "./chart.scss";

import { Chart as ChartJS, Line } from "react-chartjs-2";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "chartjs-plugin-zoom";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "",
      data: {},
      competitors: []
    };
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
        data.datasets = res.competitor;
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
              mode: "xy"
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
