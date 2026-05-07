
export const InputEl = ({ onChange, value }: any) => {
    return (
        <div className="relative w-full max-w-sm">
            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
            <input
                // onChange={onChange}
                // value={value}
                type="text"
                placeholder="Enter symbol (e.g. AAPL)"
                className="w-full pl-10 pr-4 h-10 rounded-xl border border-gray-200
                   bg-white text-sm text-gray-900 placeholder:text-gray-400
                   focus:outline-none focus:ring-2 focus:ring-gray-300
                   transition"
            />
            <button onClick={onChange} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search</button>
        </div>
    );
};