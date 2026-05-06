import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/requests";
import { normalizeStock } from "../utils/utils";

export const useStock = (symbol: string) => {
    return useQuery({
        queryKey: ['stock', symbol],
        queryFn: () => getData(symbol),
        enabled: !!symbol,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 30,
    })
}