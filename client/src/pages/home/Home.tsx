import Header from "../../components/header/Header";
import MainChart from "../../components/mainChart/MainChart";
import Metrics from "../../components/Metrics/Metrics";
import News from "../../components/news/News";
import { useStock } from "../../hooks/useStock";
import { normalizeStock, toStockUI } from "../../utils/utils"

export const Home = ({ data }: { data: any }) => {


    const { header, stats, chart, volumeChart } = toStockUI(data.data || [])

    return <div>

        <Header stats={stats} header={header} />
        <MainChart chart={chart} />
        <Metrics {...volumeChart[0]} />
        <News {...volumeChart[0]} />
    </div>

}

export default Home;