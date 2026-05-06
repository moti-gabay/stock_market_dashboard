import Header from "../../components/header/Header";
import MainChart from "../../components/mainChart/MainChart";
import Metrics from "../../components/Metrics/Metrics";
import News from "../../components/news/News";
import { useStock } from "../../hooks/useStock";
import { normalizeStock, toStockUI } from "../../utils/utils"
export const Home = () => {
    const { data, isLoading, isError, error } = useStock('AAPL');

    const {header,stats,chart} = toStockUI(normalizeStock(data.data))
    console.log((stats));

    return <div>
        Home
        <Header stats={stats} header={header} />
        <MainChart  chart={chart}/>
        <Metrics />
        <News />
    </div>

}

export default Home;