import React, { useState, useEffect } from "react";

export default function HealthWidget() {
  const [steps, setSteps] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((s) => s + Math.floor(Math.random() * 200));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Health</h3>
      <p>Steps: {steps}</p>
    </div>
  );
}