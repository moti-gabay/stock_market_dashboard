import axios from "axios";
import { API_URL } from "../utils/url.js";
import { redisClient } from "./redis.js";


export const getStockData = async (symbol) => {

    const TTL = symbol === "BTC" ? 10 : 300;
    
    const cacheKey = `stock:${symbol}`;

    const cached = await redisClient.get(cacheKey);

    if (cached) {
        console.log("✅ FROM REDIS");
        return JSON.parse(cached);
    }

    console.log("🌐 FROM API");

    const response = await axios.get(
        API_URL + symbol
    );

    const data = response.data;

    await redisClient.setEx(cacheKey, TTL, JSON.stringify(data));

    return data;
};