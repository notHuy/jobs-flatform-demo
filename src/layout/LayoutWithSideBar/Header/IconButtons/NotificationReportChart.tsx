import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const chartOptions: ApexOptions = {
  series: [
    {
      name: "Net loss",
      type: "bar",
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67],
    },
    {
      name: "Net profit",
      type: "bar",
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8],
    },
  ],
  colors: ["rgb(88, 93, 127)", "rgb(153, 158, 187)"],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },

    zoom: {
      enabled: true,
    },
  },
  stroke: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 7,
      dataLabels: {
        position: "top",
        maxItems: 100,
        hideOverflowingLabels: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: "middle",
    background: {
      enabled: true,
      borderColor: "transparent",
      foreColor: "#fff",
      dropShadow: {
        enabled: false,
        color: "transparent",
      },
    },
  },
  xaxis: {
    type: undefined,
    categories: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Last week",
      "Last month",
      "Last year",
    ],
    labels: {
      show: false,
    },
  },
  yaxis: {
    floating: true,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  fill: {},
};

const NotificationReportChart: React.FC = () => {
  const [options, setOptions] = useState(chartOptions);
  return <Chart options={options} series={options.series}></Chart>;
};

export default NotificationReportChart;
