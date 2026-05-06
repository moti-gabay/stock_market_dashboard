export const RangeSelevtor = () => {

    return <div className="flex gap-2 p-4">
        {["1D", "1W", "1M", "1Y"].map((r) => (
            <button
                key={r}
                className="px-3 py-1 border rounded-lg hover:bg-gray-100"
            >
                {r}
            </button>
        ))}
    </div>

}

export default RangeSelevtor;