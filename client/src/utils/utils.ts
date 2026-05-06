import type { NormalizedStockType, StockApiItemType, StockUIType } from "../types/types";



export function toStockUI(data: NormalizedStockType[]): StockUIType {
  const latest = data[data.length - 1];
  const prev = data[data.length - 2];

  const change = latest.close - prev.close;

  return {
    header: {
      name: "Apple Inc", // אם אין לך ב-normalized אפשר להעביר ממקום אחר
      symbol: "AAPL",
      price: latest.close,
      currency: "USD",
      exchange: "NASDAQ",
    },

    stats: {
      change,
      changePercent: (change / prev.close) * 100,
      high: Math.max(...data.map((d) => d.high)),
      low: Math.min(...data.map((d) => d.low)),
      volume: latest.volume,
    },

    chart: data.map((d) => ({
      time: d.time,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
    })),

    volumeChart: data.map((d) => ({
      time: d.time,
      value: d.volume,
    })),
  };
}

export function normalizeStock(data: StockApiItemType[]): NormalizedStockType[] {
  return data.map((item) => ({
    time: item.date,
    open: item.open,
    high: item.high,
    low: item.low,
    close: item.close,
    volume: item.volume,
    adjClose: item.adj_close,
  }));
}