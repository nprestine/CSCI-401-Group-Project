import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: {
        ...this.props.chartOptions,
        chart: {
          ...this.props.chartOptions.chart,
          width: "1000%",
          height: "100%",
          type: "donut",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "40%", // Adjust the size of the donut
            },
          },
        },
      },
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type='donut'
        width='100%'
        height='100%'
      />
    );
  }
}

export default PieChart;
