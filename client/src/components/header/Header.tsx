
export const Header = (props: any) => {

    const { symbol, name, price, exchange, } = props.header;
    const { changePercent } = props.stats;
    console.log(changePercent);
    const isPositive = changePercent >= 0;
    return <div className="flex justify-between items-center p-4 border-b">
        <div>
            <h1 className="text-2xl font-bold">{symbol}</h1>
            <p className="text-gray-500">{name}</p>
        </div>

        <div className="text-right">
            <div className="text-3xl font-bold">${price}</div>
            <div className={isPositive ? "text-green-500" : "text-red-500"}>{isPositive ? "-" : "+"} {changePercent.toFixed(2)}% {isPositive ? "↑" : "↓"}</div>
        </div>
    </div>

}

export default Header;