import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControl } from "./ui/SearchControl"

export const SearchPage = () => {
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
    </>
  )
}
