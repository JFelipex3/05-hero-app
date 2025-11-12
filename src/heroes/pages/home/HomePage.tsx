import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControl } from "../search/ui/SearchControl"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { useSearchParams } from "react-router"
import { use, useMemo } from "react"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

export const HomePage = () => {

  const { data: summary } = useHeroSummary();
  const { favorites, favoriteCount } = use(FavoriteHeroContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const { data: heroesResponse } = usePaginatedHero(Number(page), Number(limit), category);

  const handleParams = (tab: string, category: string) => {
    setSearchParams((prev) => {
      prev.set('tab', tab);
      prev.set('category', category);
      prev.set('page', '1');
      return prev;
    });
  }

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
            <TabsTrigger value="all" onClick={() => handleParams('all', 'all')}>Todos ({summary?.totalHeroes})</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => handleParams('favorites', 'favorites')}>Favoritos ({favoriteCount})</TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => handleParams('heroes', 'hero')}>Héroes ({summary?.heroCount})</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => handleParams('villains', 'villain')}>Villanos ({summary?.villainCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los favoritos */}
            <HeroGrid heroes={favorites ?? []} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {selectedTab != 'favorites' && (
          <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        )}
      </>
    </>
  )
}