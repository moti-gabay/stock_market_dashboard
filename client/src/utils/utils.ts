import type { NormalizedStockType, StockApiItemType, StockUIType } from "../types/types";


export function toStockUI(raw: StockApiItemType[]): StockUIType {
  const data = raw.map((item) => ({
    // normalized fields
    time: item.date,
    open: item.open,
    high: item.high,
    low: item.low,
    close: item.close,
    volume: item.volume,
    adjClose: item.adj_close,
    adjOpen: item.adj_open,
    adjHigh: item.adj_high,
    adjLow: item.adj_low,
    adjVolume: item.adj_volume,
    splitFactor: item.split_factor,
    dividend: item.dividend,
    // meta
    name: item.name,
    symbol: item.symbol,
    exchange: item.exchange,
    exchangeCode: item.exchange_code,
    assetType: item.asset_type,
    priceCurrency: item.price_currency,
    date: item.date,
  }));

  const latest = data[data.length - 1];
  const prev = data[data.length - 2];
  const change = latest.close - prev.close;

  return {
    header: {
      name: latest.name,
      symbol: latest.symbol,
      price: latest.close,
      currency: latest.priceCurrency,
      exchange: latest.exchangeCode,
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

export function timeAgo(date: string) {
  const now = new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}