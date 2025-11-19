import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, SortAsc, Grid, Plus } from "lucide-react"
import { useRef } from "react";
import { useSearchParams } from "react-router";

export const SearchControl = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const activeAccordion = searchParams.get('active-accordion') ?? '';
    let selectedStrength = Number(searchParams.get('strength') ?? '0');

    const setQueryParams = (name: string, value: string) => {
        setSearchParams( (prev) => {
            prev.set(name, value);
            return prev;
        });
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if ( event.key === 'Enter') {
            const value = inputRef.current?.value ?? '';
            setQueryParams('name', value);
        }
    }

    const handleCleanFilters = () => {
        setSearchParams((prev) => {
            prev.delete('team');
            prev.delete('category');
            prev.delete('universe');
            prev.delete('status');
            return prev
        });
    }

  return (
    <>
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
                ref={inputRef}
                placeholder="Buscar heroes, villanos, poder, equipos..." 
                className="pl-12 h-12 text-lg bg-white"
                onKeyDown={handleKeyDown}
                defaultValue={ searchParams.get('name') ?? ''}
            />
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
            <Button 
                variant={ activeAccordion === 'advance-filters' ? 'default' : 'outline'} 
                className="h-12" 
                onClick={ () => {
                    if (activeAccordion === 'advance-filters') {
                        setSearchParams((prev) => {
                            prev.delete('active-accordion');
                            return prev
                        });

                        return;
                    }

                    setQueryParams('active-accordion', 'advance-filters');
                }}
            >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
            </Button>

            <Button variant="outline" className="h-12">
                <SortAsc className="h-4 w-4 mr-2" />
                Ordenar por nombre
            </Button>

            <Button variant="outline" className="h-12">
                <Grid className="h-4 w-4" />
            </Button>

            <Button className="h-12">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Personaje
            </Button>
            </div>
        </div>

        {/* Advanced Filters */}

        <Accordion type="single" collapsible value={activeAccordion}>
            <AccordionItem value="advance-filters">
                <AccordionContent>
                    <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Filtros Avanzados</h3>
                            <Button variant="ghost" onClick={ () => handleCleanFilters()}>Limpiar Todo</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2">
                            <label className="text-sm font-medium">Equipo</label>
                            <Select value={searchParams.get('team') ?? ''} onValueChange={(value) => setQueryParams('team', value)}>
                                <SelectTrigger className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <SelectValue placeholder="Todos los Equipos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Batfamilia">Batfamilia</SelectItem>
                                    <SelectItem value="Jóvenes Titanes">Jóvenes Titanes</SelectItem>
                                    <SelectItem value="Liga de la Justicia">Liga de la Justicia</SelectItem>
                                    <SelectItem value="Solo">Solo</SelectItem>
                                    <SelectItem value="Suicide Squad">Suicide Squad</SelectItem>
                                    <SelectItem value="Vengadores">Vengadores</SelectItem>
                                    <SelectItem value="X-Men">X-Men</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                            <div className="space-y-2">
                            <label className="text-sm font-medium">Categoría</label>
                            <Select value={searchParams.get('category') ?? ''} onValueChange={(value) => setQueryParams('category', value)}>
                                <SelectTrigger className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <SelectValue placeholder="Todas las Categorías" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Hero">Héroes</SelectItem>
                                    <SelectItem value="Villain">Villanos</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                            <div className="space-y-2">
                            <label className="text-sm font-medium">Universo</label>
                            <Select value={searchParams.get('universe') ?? ''} onValueChange={(value) => setQueryParams('universe', value)}>
                                <SelectTrigger className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <SelectValue placeholder="Todos los Universos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="DC">DC</SelectItem>
                                    <SelectItem value="Marvel">Marvel</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                            <div className="space-y-2">
                            <label className="text-sm font-medium">Estado</label>
                            <Select value={searchParams.get('status') ?? ''} onValueChange={(value) => setQueryParams('status', value)}>
                                <SelectTrigger className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                    <SelectValue placeholder="Todos los Estados" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">Activo</SelectItem>
                                    <SelectItem value="Inactive">Inactivo</SelectItem>
                                </SelectContent>
                            </Select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-sm font-medium">Fuerza mínima: {selectedStrength}/10</label>
                            <Slider 
                                defaultValue={[selectedStrength]}
                                onValueChange={value => setQueryParams('strength', value[0].toString())}
                                max={10} 
                                step={1} 
                            /> 
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
  )
}
