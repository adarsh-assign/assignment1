import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";

import FinanceWidget from "./widgets/FinanceWidget";
import HealthWidget from "./widgets/HealthWidget";
import NewsWidget from "./widgets/NewsWidget";
import WeatherWidget from "./widgets/WeatherWidget";
import ChatWidget from "./widgets/ChatWidget";

const defaultLayout = [
  { i: "finance", x: 0, y: 0, w: 4, h: 3 },
  { i: "health", x: 4, y: 0, w: 4, h: 3 },
  { i: "news", x: 0, y: 3, w: 4, h: 3 },
  { i: "weather", x: 4, y: 3, w: 4, h: 3 },
  { i: "chat", x: 8, y: 0, w: 4, h: 6 },
];

export default function Dashboard() {
  const [layout, setLayout] = useState(
    JSON.parse(localStorage.getItem("layout")) || defaultLayout
  );

  useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={100}
      width={1200}
      onLayoutChange={(l) => setLayout(l)}
    >
      <div key="finance"><FinanceWidget /></div>
      <div key="health"><HealthWidget /></div>
      <div key="news"><NewsWidget /></div>
      <div key="weather"><WeatherWidget /></div>
      <div key="chat"><ChatWidget /></div>
    </GridLayout>
  );
}