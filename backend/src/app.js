import express from "express";
import cors from "cors";
import { getStockData } from "./redis/redisCache.js";

const app = express();
app.use(cors());

app.get('/',(req,res) => {
    res.json({"msg":"hello from stock server"})
})

app.get("/stocks/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;

    const data = await getStockData(symbol.toUpperCase());

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});