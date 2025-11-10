import { Button } from "@/components/ui/button"
import { Search, Home } from "lucide-react"
import { Link } from "react-router"

export default function HeroNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Large 404 styled number */}
        <div className="relative">
          <h1 className="text-[clamp(6rem,20vw,12rem)] font-black leading-none text-primary opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-hero rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl">
              <Search className="w-16 h-16 md:w-20 md:h-20 text-hero-foreground" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">Héroe No Encontrado</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto text-pretty">
            El héroe que buscas no existe en nuestra base de datos. Puede que haya sido derrotado o simplemente nunca
            existió.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="min-w-[180px]">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-w-[180px] bg-transparent">
            <Link to="/search">
              <Search className="w-5 h-5 mr-2" />
              Buscar Héroes
            </Link>
          </Button>
        </div>

        {/* Additional info */}
        <div className="pt-8 border-t border-border max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            ¿Necesitas ayuda? Intenta buscar por nombre, poder o equipo del héroe.
          </p>
        </div>
      </div>
    </main>
  )
}
