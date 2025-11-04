import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

export const usePaginatedHero = (page: number, limit: number) => {
    return useQuery({
        queryKey: ['heroes', {page: page, limit: limit}],
        queryFn: () => getHeroesByPageAction(Number(page), Number(limit)),
        staleTime: 1000 * 60 * 5 // 5 minutos es considerada fresca
    });
}
