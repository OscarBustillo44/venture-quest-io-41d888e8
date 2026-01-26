import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Users, Calendar, TrendingUp, Phone, Mail, Building2, ChevronLeft, ChevronRight, Shield, Target, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import Footer from '@/components/Footer';

// La Borda images
import labordaTerrassa from '@/assets/laborda/terrassa.png';
import labordaFacturacio from '@/assets/laborda/facturacio.png';
import labordaProducte from '@/assets/laborda/producte.png';
import labordaCollage from '@/assets/laborda/collage.png';
import labordaInterior from '@/assets/laborda/interior.png';
import labordaFachada from '@/assets/laborda/fachada.png';

// Alpine Security images
import alpineLogo from '@/assets/alpine/logo-main.png';
import alpineEbitda from '@/assets/alpine/chart-ebitda.png';
import alpineRevenue from '@/assets/alpine/chart-revenue.png';
import alpineClients from '@/assets/alpine/chart-clients.png';
import alpinePortfolio from '@/assets/alpine/chart-portfolio.png';
import alpineKpiExperience from '@/assets/alpine/kpi-experience.png';
import alpineKpiMalware from '@/assets/alpine/kpi-malware.png';
import alpineKpiIncidents from '@/assets/alpine/kpi-incidents.png';
import alpineOverview from '@/assets/alpine/slide-overview.png';

// Alpine Security specific data
const alpineKPIs = [
  { value: '50K+', label: 'endpoints protegidos 24x7x365 por nuestros Servicios de Threat Hunting' },
  { value: '500+', label: 'incidentes de ciberseguridad satisfactoriamente resueltos' },
  { value: '100+', label: 'análisis exhaustivos de malware' },
  { value: '20', label: 'años de experiencia combinada en ciberseguridad' },
];

const alpineRevenueData = [
  { year: '2025', revenue: 1148 },
  { year: '2026', revenue: 2150 },
  { year: '2027', revenue: 2674 },
  { year: '2028', revenue: 3196 },
  { year: '2029', revenue: 3840 },
];

const alpineEbitdaData = [
  { year: '2025', ebitda: 226 },
  { year: '2026', ebitda: 529 },
  { year: '2027', ebitda: 685 },
  { year: '2028', ebitda: 943 },
  { year: '2029', ebitda: 1243 },
];

const alpineClientsData = [
  { year: '2025', th: 0, cycon: 0, offensive: 0, total: 0 },
  { year: '2026', th: 854, cycon: 100, offensive: 50, total: 854 },
  { year: '2027', th: 1332, cycon: 150, offensive: 75, total: 1332 },
  { year: '2028', th: 1847, cycon: 200, offensive: 100, total: 1847 },
  { year: '2029', th: 2401, cycon: 250, offensive: 125, total: 2401 },
];

const alpinePortfolioData = [
  { name: 'Threat Hunting', value: 86, amount: '1.104k', color: '#2d6a2d' },
  { name: 'CYCON/DFIR', value: 9, amount: '113k', color: '#4a90d9' },
  { name: 'Offensive', value: 5, amount: '60k', color: '#90b4ce' },
];

// Mock data for businesses
const businessesData: Record<string, {
  id: string;
  title: string;
  sector: string;
  location: string;
  price: string;
  revenue: string;
  ebitda: string;
  profitability: string;
  employees: string;
  yearsOperating: string;
  description: string;
  highlights: string[];
  images: string[];
  financialData: { year: string; revenue: number; ebitda: number }[];
  targetRevenue?: string;
  targetEbitda?: string;
  percentForSale?: string;
}> = {
  'la-borda': {
    id: 'la-borda',
    title: 'La Borda – Restaurant més antic d\'Andorra',
    sector: 'Hostelería',
    location: 'Andorra la Vella, Andorra',
    price: '75.000 €',
    revenue: '300.000 €',
    ebitda: '75.000 €',
    profitability: '43%',
    employees: '8',
    yearsOperating: '45+',
    description: 'Restaurant emblemàtic amb més de 45 anys d\'història. Cuina tradicional andorrana en un ambient rústic i acollidor amb xemeneia. Clientela fidel i consolidada. Possibilitat de creixement amb terrassa exterior.',
    highlights: [
      'Restaurant més antic d\'Andorra',
      'Clientela fidel i consolidada',
      'Equip que desitja continuar',
      'Possibilitat terrassa exterior',
      'Ubicació privilegiada',
      'Cuina tradicional reconeguda'
    ],
    images: [labordaFachada, labordaInterior, labordaProducte, labordaTerrassa, labordaCollage, labordaFacturacio],
    financialData: [
      { year: '2020', revenue: 220, ebitda: 45 },
      { year: '2021', revenue: 250, ebitda: 55 },
      { year: '2022', revenue: 280, ebitda: 65 },
      { year: '2023', revenue: 290, ebitda: 70 },
      { year: '2024', revenue: 300, ebitda: 75 },
    ]
  },
  'alpine-security': {
    id: 'alpine-security',
    title: 'Alpine Security – Empresa de Ciberseguretat',
    sector: 'Tecnología',
    location: 'Andorra i Espanya',
    price: '2.400.000 €',
    revenue: '1.300.000 €',
    ebitda: '300.000 €',
    profitability: '18%',
    employees: '15',
    yearsOperating: '8',
    targetRevenue: '>3 Mio €',
    targetEbitda: '700k - 1.3 Mio €',
    percentForSale: '23,4%',
    description: 'Empresa líder en ciberseguretat amb operacions a Andorra i Espanya. Portfolio de productes/serveis: 1.3Mio en Contractes (86% Threat Hunting, 9% Consultoria i 5% Offensive ciberseguretat). Alpine ha superat les previsions de facturació i cartera de clients.',
    highlights: [
      'Líder en ciberseguretat a Andorra i Espanya',
      '50K+ endpoints protegits 24x7x365',
      '500+ incidents resolts satisfactòriament',
      'Creixement superior a previsions',
      'Contractes recurrents consolidats',
      'Equip tècnic amb 20 anys experiència'
    ],
    images: [alpineLogo, alpineOverview, alpineRevenue, alpineEbitda, alpineClients, alpinePortfolio, alpineKpiExperience, alpineKpiMalware, alpineKpiIncidents],
    financialData: [
      { year: '2020', revenue: 800, ebitda: 120 },
      { year: '2021', revenue: 950, ebitda: 180 },
      { year: '2022', revenue: 1100, ebitda: 220 },
      { year: '2023', revenue: 1200, ebitda: 260 },
      { year: '2024', revenue: 1300, ebitda: 300 },
    ]
  }
};

const NegocioDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const business = id ? businessesData[id] : null;

  if (!business) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Negoci no trobat</h1>
          <Link to="/comprar">
            <Button>Tornar a la llista</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % business.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + business.images.length) % business.images.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-stone-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold">
            busco<span className="text-amber-500">business</span>.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/comprar" className="hover:text-amber-400 transition-colors">Comprar</Link>
            <Link to="/" className="hover:text-amber-400 transition-colors">Vendre</Link>
            <Link to="/" className="hover:text-amber-400 transition-colors">Sobre nosaltres</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/comprar" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Tornar a la llista de negocis
        </Link>

        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <Badge className="bg-amber-600 text-white mb-2">{business.sector}</Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-2">
              {business.title}
            </h1>
            <div className="flex items-center gap-2 text-stone-600">
              <MapPin className="w-4 h-4" />
              {business.location}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-stone-500">Preu de venda</p>
            <p className="text-3xl md:text-4xl font-bold text-amber-600">{business.price}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={business.images[currentImageIndex]}
                  alt={`${business.title} - Imatge ${currentImageIndex + 1}`}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {business.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-stone-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-stone-800" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {business.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {business.images.length > 1 && (
                <div className="flex gap-2 p-4 bg-stone-100">
                  {business.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-16 rounded overflow-hidden border-2 transition-colors ${
                        idx === currentImageIndex ? 'border-amber-500' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Descripció del negoci</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 leading-relaxed">{business.description}</p>
                
                <h3 className="font-semibold text-stone-800 mt-6 mb-4">Punts destacats</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {business.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alpine Security KPIs */}
            {business.id === 'alpine-security' && (
              <Card className="bg-gradient-to-r from-stone-100 to-stone-50">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-700" />
                    Indicadors Clau de Rendiment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {alpineKPIs.map((kpi, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-stone-200 text-center">
                        <div className="text-4xl font-bold text-stone-500 mb-3">{kpi.value}</div>
                        <p className="text-sm text-stone-600 leading-tight">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Financial Charts - Alpine Security specific */}
            {business.id === 'alpine-security' ? (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    Projeccions Financeres (2025-2029)
                  </CardTitle>
                  <p className="text-sm text-stone-500 mt-1">
                    Alpine ha superat les previsions de facturació i cartera de clients
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revenue Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">Facturació Prevista (milers €)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <AreaChart data={alpineRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 4500]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, 'Prestació de serveis']}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#2d6a2d" 
                          fill="#90EE90" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                    <p className="text-center text-sm text-stone-600 mt-2 font-medium">
                      Producte, servei i clientela creats i fidels
                    </p>
                  </div>

                  {/* EBITDA Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">EBITDA Previst (milers €)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={alpineEbitdaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 1400]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, 'EBITDA']}
                        />
                        <Bar dataKey="ebitda" fill="#1e4d5c" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#1e4d5c', fontSize: 12 }} />
                      </BarChart>
                    </ResponsiveContainer>
                    <p className="text-center text-sm text-stone-600 mt-2">
                      EBITDA actual 300k · EBITDA Objectiu 700k-1.3Mio · Actualment a la venda el 23,4%
                    </p>
                  </div>

                  {/* New Clients Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">Increment en facturació de clients nous (milers €)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={alpineClientsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 3000]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="th" name="TH" stackId="a" fill="#1e4d5c" />
                        <Bar dataKey="cycon" name="CYCON/DFIR" stackId="a" fill="#b91c1c" />
                        <Bar dataKey="offensive" name="OFFENSIVE" stackId="a" fill="#84cc16" />
                        <Line type="monotone" dataKey="total" stroke="#1e3a5f" strokeWidth={2} name="Total" />
                      </BarChart>
                    </ResponsiveContainer>
                    <p className="text-center text-sm text-stone-600 mt-2">
                      Previsions d'incorporació de nova cartera de clients amb creixements superiors
                    </p>
                  </div>

                  {/* Portfolio Distribution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">Portfolio de Productes/Serveis Actual</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <ResponsiveContainer width={300} height={250}>
                        <PieChart>
                          <Pie
                            data={alpinePortfolioData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}; ${value}%`}
                          >
                            {alpinePortfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-2 text-sm text-stone-600">
                        <p>• <strong>1.3Mio en Contractes</strong></p>
                        <p>• 86% Threat Hunting (1.104k €)</p>
                        <p>• 9% Consultoria CYCON/DFIR (113k €)</p>
                        <p>• 5% Offensive Ciberseguretat (60k €)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Default charts for other businesses
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    Evolució Financera
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-medium text-stone-600 mb-4">Facturació anual (milers €)</h4>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={business.financialData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                          <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                          <YAxis tick={{ fill: '#78716c' }} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                            formatter={(value: number) => [`${value}k €`, 'Facturació']}
                          />
                          <Line type="monotone" dataKey="revenue" stroke="#d97706" strokeWidth={3} dot={{ fill: '#d97706', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-stone-600 mb-4">EBITDA anual (milers €)</h4>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={business.financialData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                          <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                          <YAxis tick={{ fill: '#78716c' }} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                            formatter={(value: number) => [`${value}k €`, 'EBITDA']}
                          />
                          <Bar dataKey="ebitda" fill="#78716c" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-4 text-center">
                    * Les dades financeres es verifiquen durant el procés de due diligence
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Key Metrics & Contact */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <Card className="bg-stone-800 text-white">
              <CardHeader>
                <CardTitle className="font-serif text-amber-400">Dades clau</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">Facturació actual</span>
                  </div>
                  <span className="font-semibold">{business.revenue}</span>
                </div>
                {business.targetRevenue && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <span className="text-stone-300">Facturació objectiu</span>
                    </div>
                    <span className="font-semibold text-green-400">{business.targetRevenue}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">EBITDA actual</span>
                  </div>
                  <span className="font-semibold">{business.ebitda}</span>
                </div>
                {business.targetEbitda && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <span className="text-stone-300">EBITDA objectiu</span>
                    </div>
                    <span className="font-semibold text-green-400">{business.targetEbitda}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">Rentabilitat</span>
                  </div>
                  <span className="font-semibold text-green-400">{business.profitability}</span>
                </div>
                {business.percentForSale && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span className="text-stone-300">% a la venda</span>
                    </div>
                    <span className="font-semibold text-amber-300">{business.percentForSale}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">Empleats</span>
                  </div>
                  <span className="font-semibold">{business.employees}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">Anys operant</span>
                  </div>
                  <span className="font-semibold">{business.yearsOperating}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Sol·licitar informació</CardTitle>
                <p className="text-sm text-stone-500">
                  Omple el formulari i et contactarem en 24h
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-stone-800 mb-2">Sol·licitud enviada!</h3>
                    <p className="text-stone-600 text-sm">
                      Et contactarem aviat per proporcionar-te més informació sobre aquest negoci.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="El teu nom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Correu electrònic *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="email@exemple.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telèfon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+376 XXX XXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Missatge</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="M'agradaria rebre més informació sobre aquest negoci..."
                        rows={4}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviant...' : 'Sol·licitar informació'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="py-6">
                <h3 className="font-semibold text-stone-800 mb-4">Contacte directe</h3>
                <div className="space-y-3">
                  <a href="tel:+376123456" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors">
                    <Phone className="w-5 h-5" />
                    +376 123 456
                  </a>
                  <a href="mailto:info@buscobusiness.com" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    info@buscobusiness.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NegocioDetalle;
