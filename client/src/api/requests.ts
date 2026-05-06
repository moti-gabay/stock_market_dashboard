
import axios from "axios"

export const API_URL = `http://localhost:3000/stocks/`;


export const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})


export const getData = async (symbol: string) => {

    try {
        const cached = localStorage.getItem(symbol);
        if (cached) {
            console.log("FROM LOCAL STORAGE");
            return JSON.parse(cached);
        }
        const res = await axios.get(API_URL + symbol);
        localStorage.setItem(symbol, JSON.stringify(res.data));
        return  res
    } catch (error) {
        console.error(error)
    }
}
