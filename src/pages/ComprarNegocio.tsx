import { useState, useMemo } from "react";
import { Search, Filter, Building2, TrendingUp, Users, CheckCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import slide4 from '@/assets/carousel/slide-4-fachada.png';
import slide6 from '@/assets/carousel/slide-6-alpine-security.png';
import infinitypayLogo from '@/assets/infinitypay/logo.png';
import sectorHosteleria from '@/assets/generic/sector-hosteleria.jpg';
import sectorComercio from '@/assets/generic/sector-comercio.jpg';
import sectorServicios from '@/assets/generic/sector-servicios.jpg';
import sectorIndustria from '@/assets/generic/sector-industria.jpg';
import sectorTecnologia from '@/assets/generic/sector-tecnologia.jpg';

const allBusinesses = [
  {
    id: 'la-borda',
    image: slide4,
    title: "La Borda – Restaurant més antic d'Andorra",
    description: "Facturación 300.000 € · EBITDA 75.000 € · Rentabilidad 43%",
    price: 75000,
    priceDisplay: "75.000 €",
    sector: "Hostelería",
    isConfidential: false
  },
  {
    id: 'alpine-security',
    image: slide6,
    title: "Alpine Security – Ciberseguretat",
    description: "Empresa de Ciberseguretat (Andorra i Espanya) · Facturación 1,3M € · EBITDA 300k €",
    price: 2400000,
    priceDisplay: "2.400.000 €",
    sector: "Tecnología",
    isConfidential: false
  },
  {
    id: 'infinitypay',
    image: infinitypayLogo,
    title: "InfinityPay – Mitjans de Pagament",
    description: "Passarel·la de pagaments, TPVs · Facturación 500k € · EBITDA 200k €",
    price: 1084964,
    priceDisplay: "1.084.964 €",
    sector: "Fintech",
    isConfidential: false
  },
  {
    id: 'confidencial-hosteleria',
    image: sectorHosteleria,
    title: "Host260126 Sector Hosteleria - [Negoci Confidencial]",
    description: "Sector Hosteleria · Facturación 350k € · EBITDA 85k € · Rentabilidad 24%",
    price: 180000,
    priceDisplay: "180.000 €",
    sector: "Hostelería",
    isConfidential: true
  },
  {
    id: 'confidencial-comercio',
    image: sectorComercio,
    title: "Com260126 Sector Comerç - [Negoci Confidencial]",
    description: "Sector Comerç · Facturación 800k € · EBITDA 120k € · Rentabilidad 15%",
    price: 320000,
    priceDisplay: "320.000 €",
    sector: "Comercio",
    isConfidential: true
  },
  {
    id: 'confidencial-servicios',
    image: sectorServicios,
    title: "Serv260126 Sector Serveis - [Negoci Confidencial]",
    description: "Sector Serveis · Facturación 600k € · EBITDA 150k € · Rentabilidad 25%",
    price: 450000,
    priceDisplay: "450.000 €",
    sector: "Servicios",
    isConfidential: true
  },
  {
    id: 'confidencial-industria',
    image: sectorIndustria,
    title: "Ind260126 Sector Indústria - [Negoci Confidencial]",
    description: "Sector Indústria · Facturación 1,2M € · EBITDA 280k € · Rentabilidad 23%",
    price: 750000,
    priceDisplay: "750.000 €",
    sector: "Industria",
    isConfidential: true
  },
  {
    id: 'confidencial-tecnologia',
    image: sectorTecnologia,
    title: "Tech260126 Sector Tecnologia - [Negoci Confidencial]",
    description: "Sector Tecnologia · Facturación 600k € · EBITDA 100k € · Rentabilidad 27%",
    price: 514788,
    priceDisplay: "514.788 €",
    sector: "Tecnología",
    isConfidential: true
  }
];

const sectors = ["Hostelería", "Comercio", "Servicios", "Industria", "Tecnología", "Fintech"];

const priceRanges = [
  { value: "all", label: "Todos los precios" },
  { value: "0-200000", label: "Menos de 200.000 €" },
  { value: "200000-500000", label: "200.000 € - 500.000 €" },
  { value: "500000-1000000", label: "500.000 € - 1.000.000 €" },
  { value: "1000000-999999999", label: "Más de 1.000.000 €" },
];

const ComprarNegocio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  const filteredBusinesses = useMemo(() => {
    return allBusinesses.filter((business) => {
      // Search filter
      const matchesSearch = searchQuery === "" || 
        business.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.sector.toLowerCase().includes(searchQuery.toLowerCase());

      // Sector filter
      const matchesSector = selectedSector === "all" || business.sector === selectedSector;

      // Price range filter
      let matchesPrice = true;
      if (selectedPriceRange !== "all") {
        const [min, max] = selectedPriceRange.split("-").map(Number);
        matchesPrice = business.price >= min && business.price <= max;
      }

      return matchesSearch && matchesSector && matchesPrice;
    });
  }, [searchQuery, selectedSector, selectedPriceRange]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSector("all");
    setSelectedPriceRange("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedSector !== "all" || selectedPriceRange !== "all";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Encuentra negocios reales, no oportunidades vacías
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Descubre empresas operativas con información financiera estructurada
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Building2 className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Negocios en funcionamiento</h3>
                <p className="text-sm text-muted-foreground">
                  Todas las empresas listadas están operativas y generando ingresos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Información financiera clara</h3>
                <p className="text-sm text-muted-foreground">
                  Datos estructurados: facturación, EBITDA, rentabilidad explicados de forma sencilla
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Enfoque en PYMES</h3>
                <p className="text-sm text-muted-foreground">
                  Especialización en pequeñas y medianas empresas de la economía real
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Buscar negocios
            </h2>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar por nombre, sector o descripción..." 
                  className="pl-10 h-12 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {hasActiveFilters && (
                <Button 
                  variant="outline" 
                  className="h-12 px-6"
                  onClick={clearFilters}
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpiar filtros
                </Button>
              )}
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Sector
                </label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Todos los sectores" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="all">Todos los sectores</SelectItem>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Rango de precio
                </label>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Todos los precios" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active filters badges */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedSector !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    Sector: {selectedSector}
                    <button onClick={() => setSelectedSector("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedPriceRange !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    Precio: {priceRanges.find(r => r.value === selectedPriceRange)?.label}
                    <button onClick={() => setSelectedPriceRange("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="px-3 py-1">
                    Búsqueda: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}

            {/* Simple explanations */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-stone-700">
                    <strong>¿Qué es EBITDA?</strong> Es el beneficio antes de intereses, impuestos y amortizaciones. 
                    Simplificado: cuánto dinero genera el negocio antes de gastos financieros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Business Grid */}
      <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
                {hasActiveFilters ? "Resultados de búsqueda" : "Negocios destacados"}
              </h2>
              <p className="text-stone-400">
                {filteredBusinesses.length} {filteredBusinesses.length === 1 ? "negocio encontrado" : "negocios encontrados"}
              </p>
            </div>
          </div>

          {filteredBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBusinesses.map((business) => (
                <Link to={`/negocio/${business.id}`} key={business.id}>
                  <div className="relative h-[320px] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Background Image */}
                    <img
                      src={business.image}
                      alt={business.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent" />
                    
                    {/* Confidential Watermark */}
                    {business.isConfidential && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-white/20 text-4xl md:text-5xl font-bold uppercase tracking-widest transform -rotate-12 select-none">
                          CONFIDENCIAL
                        </div>
                      </div>
                    )}
                    
                    {/* Sector Badge */}
                    <div className="absolute top-3 left-3 bg-stone-800/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {business.sector}
                    </div>
                    
                    {/* Confidential Badge */}
                    {business.isConfidential && (
                      <div className="absolute top-3 left-24 bg-stone-600/90 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        🔒 Confidencial
                      </div>
                    )}
                    
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
                      {business.priceDisplay}
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-serif text-lg md:text-xl font-bold mb-1.5 drop-shadow-lg line-clamp-2">
                        {business.title}
                      </h3>
                      <p className="text-xs md:text-sm text-stone-200 leading-snug line-clamp-3 drop-shadow-md">
                        {business.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-stone-400 mb-4">
                <Filter className="w-16 h-16 mx-auto opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No se encontraron negocios</h3>
              <p className="text-stone-400 mb-6">Prueba a ajustar los filtros para ver más resultados</p>
              <Button onClick={clearFilters} variant="secondary">
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a encontrar el negocio perfecto para ti
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-amber-50">
            Contactar
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComprarNegocio;
