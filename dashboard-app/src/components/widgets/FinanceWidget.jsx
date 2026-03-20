import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export default function FinanceWidget() {
  const [data, setData] = useState([
    { name: "Mon", value: 100 },
    { name: "Tue", value: 120 },
    { name: "Wed", value: 90 },
  ]);

  // simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev.slice(1),
        { name: "New", value: Math.random() * 150 }
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Finance</h3>
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}