import React from "react";
import "./chart.css"; // Fix import statement

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3> {/* Fix className */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && (
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          )}{" "}
          {/* Render CartesianGrid conditionally */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
