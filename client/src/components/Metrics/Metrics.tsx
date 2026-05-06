export const Metrics = () => {

    return <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-sm">Market Cap</p>
            <p className="font-bold">$2.8T</p>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-sm">Volume</p>
            <p className="font-bold">45M</p>
        </div>
    </div>

}

export default Metrics;