export type StockApiItemType = {
    open: number;
    high: number;
    low: number;
    close: number;

    adj_open: number;
    adj_high: number;
    adj_low: number;
    adj_close: number;

    volume: number;
    adj_volume: number;

    date: string;

    name: string;
    symbol: string;
    exchange: string;
    exchange_code: string;
    asset_type: string;
    price_currency: string;

    split_factor: number;
    dividend: number;
};

export type NormalizedStockType = {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjClose: number;
};

export type StockUIType = {
    header: HeaderType;
    stats: StatsType;
    chart: ChartType[];
    volumeChart: VolumeChartType[];
};

export type ChartType = {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

export type StatsType = {
    change: number;
    changePercent: number;
    high: number;
    low: number;
    volume: number;
}
export type HeaderType = {
    name: string;
    symbol: string;
    price: number;
    currency: string;
    exchange: string;
    
}

export type VolumeChartType = {
    time: string;
    value: number;
}