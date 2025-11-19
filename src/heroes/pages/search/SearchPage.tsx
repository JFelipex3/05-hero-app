import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControl } from "./ui/SearchControl"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action"

export const SearchPage = () => {

  const [ searchParams ] = useSearchParams();
  const name = searchParams.get('name') ?? undefined;

  const strength = searchParams.get('strength') ?? '';
  const team = searchParams.get('team') ?? '';
  const category = searchParams.get('category') ?? '';
  const universe = searchParams.get('universe') ?? '';
  const status = searchParams.get('status') ?? '';

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength, team, category, universe, status }],
    queryFn: () => searchHeroesAction({ name, strength, team, category, universe, status }),
    staleTime: 1000 * 60 * 5
  });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls and Filters*/}
      <SearchControl />

      {/* Mostrar personajes */}
      <HeroGrid heroes={heroes} />
    </>
  )
}
