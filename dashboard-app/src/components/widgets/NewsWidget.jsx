import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewsWidget() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => setNews(res.data));
  }, []);

  return (
    <div>
      <h3>News</h3>
      {news.map(n => (
        <p key={n.id}>{n.title}</p>
      ))}
    </div>
  );
}