import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import FinanceWidget from "./widgets/FinanceWidget";
import HealthWidget from "./widgets/HealthWidget";
import NewsWidget from "./widgets/NewsWidget";
import WeatherWidget from "./widgets/WeatherWidget";
import ChatWidget from "./widgets/ChatWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [
    { i: "finance", x: 0, y: 0, w: 4, h: 3 },
    { i: "health", x: 4, y: 0, w: 4, h: 3 },
    { i: "news", x: 0, y: 3, w: 4, h: 3 },
    { i: "weather", x: 4, y: 3, w: 4, h: 3 },
    { i: "chat", x: 8, y: 0, w: 4, h: 6 },
  ],
  md: [
    { i: "finance", x: 0, y: 0, w: 6, h: 3 },
    { i: "health", x: 6, y: 0, w: 6, h: 3 },
    { i: "news", x: 0, y: 3, w: 6, h: 3 },
    { i: "weather", x: 6, y: 3, w: 6, h: 3 },
    { i: "chat", x: 0, y: 6, w: 12, h: 5 },
  ],
  sm: [
    { i: "finance", x: 0, y: 0, w: 12, h: 3 },
    { i: "health", x: 0, y: 3, w: 12, h: 3 },
    { i: "news", x: 0, y: 6, w: 12, h: 3 },
    { i: "weather", x: 0, y: 9, w: 12, h: 3 },
    { i: "chat", x: 0, y: 12, w: 12, h: 5 },
  ]
};

export default function Dashboard() {
  const [layouts, setLayouts] = useState(
    JSON.parse(localStorage.getItem("layouts")) || defaultLayouts
  );

  useEffect(() => {
    localStorage.setItem("layouts", JSON.stringify(layouts));
  }, [layouts]);

  return (
    <div style={{ padding: "10px" }}>
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 12, md: 12, sm: 12 }}
        rowHeight={90}
        onLayoutChange={(layout, allLayouts) => setLayouts(allLayouts)}
        draggableHandle=".drag-handle"
      >
        <div key="finance"><FinanceWidget /></div>
        <div key="health"><HealthWidget /></div>
        <div key="news"><NewsWidget /></div>
        <div key="weather"><WeatherWidget /></div>
        <div key="chat"><ChatWidget /></div>
      </ResponsiveGridLayout>
    </div>
  );
}