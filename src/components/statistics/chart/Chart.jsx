// import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    number:60
  },
  {
      name: "Assignment-2",
      number:59
  },
  {
      name: "Assignment-3",
      number:58
  },
  {
      name: "Assignment-4",
      number:58
  },
  {
      name: "Assignment-5",
      number:60
  },
  {
      name: "Assignment-6",
      number:58
  },
  {
      name: "Assignment-7",
      number:60
  },
  {
      name: "Assignment-8",
      number:60
  }
];

const Chart = () => {
    return (
    <AreaChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}

export default Chart;
