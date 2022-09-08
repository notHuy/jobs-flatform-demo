import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const chartOptions: ApexOptions = {
  series: [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  //   stroke: {
  //     width: 1,
  //     colors: ["#000000"],
  //   },
  title: {
    text: "",
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
};

const NotificationReportChart: React.FC = () => {
  const [options, setOptions] = useState(chartOptions);
  return <Chart options={options} series={options.series}></Chart>;
};

export default NotificationReportChart;
