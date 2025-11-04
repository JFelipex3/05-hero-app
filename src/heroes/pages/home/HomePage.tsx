import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControl } from "../search/ui/SearchControl"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { useMemo } from "react"

export const HomePage = () => {

  const [ searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = useMemo( () => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const handleParams = (param: string, value: string) => {
    setSearchParams( (prev) => {
      prev.set(param, value);
      return prev;
    });
  }
  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes', {page: page, limit: limit}],
    queryFn: () => getHeroesByPageAction(Number(page), Number(limit)),
    staleTime: 1000 * 60 * 5 // 5 minutos es considerada fresca
  });

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra super héroes y villanos"
        />

        <CustomBreadcrumbs currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls and Filters*/}
        <SearchControl />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => handleParams('tab', 'all')}>Todos {heroesResponse?.total}</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => handleParams('tab', 'favorites')}>Favoritos (3)</TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => handleParams('tab', 'heroes')}>Héroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => handleParams('tab', 'villains')}>Villanos (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los favoritos */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
      </>
    </>
  )
}