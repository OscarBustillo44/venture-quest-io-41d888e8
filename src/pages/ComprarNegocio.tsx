import { Search, Filter, Building2, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/Footer";
import BusinessCarousel from "@/components/BusinessCarousel";

const ComprarNegocio = () => {
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
                  placeholder="Buscar por nombre, sector o ubicación..." 
                  className="pl-10 h-12 bg-white"
                />
              </div>
              <Button className="h-12 px-8 bg-amber-600 hover:bg-amber-700">
                Buscar
              </Button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Sector
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos los sectores" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hosteleria">Hostelería</SelectItem>
                    <SelectItem value="retail">Comercio</SelectItem>
                    <SelectItem value="servicios">Servicios</SelectItem>
                    <SelectItem value="industria">Industria</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Ubicación
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Cualquier lugar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="andorra">Andorra</SelectItem>
                    <SelectItem value="barcelona">Barcelona</SelectItem>
                    <SelectItem value="madrid">Madrid</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Precio máximo
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sin límite" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50000">Hasta 50.000 €</SelectItem>
                    <SelectItem value="100000">Hasta 100.000 €</SelectItem>
                    <SelectItem value="250000">Hasta 250.000 €</SelectItem>
                    <SelectItem value="500000">Hasta 500.000 €</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Rentabilidad
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Cualquiera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">+10%</SelectItem>
                    <SelectItem value="20">+20%</SelectItem>
                    <SelectItem value="30">+30%</SelectItem>
                    <SelectItem value="40">+40%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

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

      {/* Featured Businesses Carousel */}
      <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-serif">
            Negocios destacados
          </h2>
          <p className="text-stone-400 text-center mb-8">
            Oportunidades verificadas con información completa
          </p>
          <BusinessCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para encontrar tu próximo negocio?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Explora todas las oportunidades disponibles y encuentra el negocio perfecto para ti
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-amber-50">
            Ver negocios disponibles
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComprarNegocio;
