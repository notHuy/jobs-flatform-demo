import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const chartOptions: ApexOptions = {
  series: [
    {
      name: "Marine Sprite",
      type: "line",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
  ],
  chart: {
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {},
  stroke: {
    curve: "smooth",
    colors: ["#FF0000"],
  },
  grid: {
    show: false,
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
  xaxis: {
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
  tooltip: {
    /* remove header of tooltip */
    x: {
      show: false,
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
  },
};

const InfoChart: React.FC = () => {
  const [options, setOptions] = useState(chartOptions);
  return <Chart options={options} series={options.series} height="100"></Chart>;
};

export default InfoChart;
