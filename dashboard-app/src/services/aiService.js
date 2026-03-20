import axios from "axios";

export async function getInsight(data) {
  const res = await axios.post("/api/ai", { data });
  return res.data;
}