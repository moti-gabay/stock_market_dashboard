import type { VolumeChartType } from "../../types/types";
import { timeAgo } from "../../utils/utils";

export const News = ( volumeChart : VolumeChartType) => {

    return <div className="p-4 space-y-3">
        <div className="p-3 border rounded-lg hover:shadow">
            <p className="font-semibold">Apple releases new earnings report</p>
            <p className="text-sm text-gray-500">{timeAgo(volumeChart.time)}</p>
        </div>
    </div>

}

export default News;