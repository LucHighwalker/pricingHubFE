import React, { Component } from "react";
import { connect } from "react-redux";
import "./chart.scss";

import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "",
      data: {}
    };
  }

  componentDidMount() {
    const data = {
      title: {
        text: "Prices over time"
      },
      datasets: []
    };
    fetch("http://127.0.0.1:4200/prices/competitor")
      .then(res => {
        return res.json();
      })
      .then(res => {
        data.datasets = res.competitor;
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.data}
          options={{
            title: { text: "This is a test" },
            legend: {
              display: false,
              position: "left"
            },
            maintainAspectRatio: false,
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
