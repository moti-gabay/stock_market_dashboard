import { useMemo } from "react";
import type { ChartType } from "../../types/types";
import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

type Props = {
    chart: ChartType[];
};

export const MainChart = ({ chart }: Props) => {
    
 
    const formattedData = useMemo(() => {
        if (!chart) return [];
        
        return chart.map(item => ({
            ...item,
            displayTime: new Date(item.time).toLocaleDateString('he-IL', { 
                day: '2-digit', 
                month: '2-digit' 
            }),
        }));
    }, [chart]);
    return (
        <div className="h-[400px] p-4">
            <div className="w-full h-full bg-white rounded-xl shadow">
                <div style={{ width: '100%', height: 400, backgroundColor: '#1a1a1a', padding: '20px' }}>
                    {/* הפעלת כלי הפיתוח */}
                    {/* <RechartsDevTools /> */}

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={formattedData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="displayTime" stroke="#888" />
                            <YAxis domain={['auto', 'auto']} stroke="#888" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#333', border: 'none', color: '#fff' }}
                                itemStyle={{ color: '#82ca9d' }}
                            />

                            {/* מחיר הסגירה */}
                            <Line
                                type="monotone"
                                dataKey="close"
                                stroke="#82ca9d"
                                dot={false}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default MainChart;