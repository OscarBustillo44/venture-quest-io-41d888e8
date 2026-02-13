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

// InfinityPay images
import infinitypayLogo from '@/assets/infinitypay/logo.png';
import infinitypayPassarella1 from '@/assets/infinitypay/passarella-1.png';
import infinitypayPassarella2 from '@/assets/infinitypay/passarella-2.png';
import infinitypaySeguretat from '@/assets/infinitypay/seguretat.png';

// Generic sector images for anonymous businesses
import sectorHosteleria from '@/assets/generic/sector-hosteleria.jpg';
import sectorComercio from '@/assets/generic/sector-comercio.jpg';
import sectorServicios from '@/assets/generic/sector-servicios.jpg';
import sectorIndustria from '@/assets/generic/sector-industria.jpg';
import sectorTecnologia from '@/assets/generic/sector-tecnologia.jpg';
import restaurantCentroPlaceholder from '@/assets/generic/restaurant-centro-placeholder.png';
import confHosteleriaCard from '@/assets/generic/conf-hosteleria-card.png';

// Confidencial Hostelería photos (gated)
import confHostPhoto1 from '@/assets/conf-hosteleria/photo-1.jpeg';
import confHostPhoto2 from '@/assets/conf-hosteleria/photo-2.jpeg';
import confHostPhoto3 from '@/assets/conf-hosteleria/photo-3.jpeg';
import confHostPhoto4 from '@/assets/conf-hosteleria/photo-4.jpeg';
import confHostPhoto5 from '@/assets/conf-hosteleria/photo-5.jpeg';
import confHostPhoto6 from '@/assets/conf-hosteleria/photo-6.jpeg';
import confHostPhoto7 from '@/assets/conf-hosteleria/photo-7.jpeg';
import confComercioCard from '@/assets/generic/conf-comercio-card.jpg';
import confServiciosCard from '@/assets/generic/conf-servicios-card.jpg';
import confIndustriaCard from '@/assets/generic/conf-industria-card.jpg';
import confTecnologiaCard from '@/assets/generic/conf-tecnologia-card.jpg';

export interface Business {
  id: string;
  titleKey: string;
  sectorKey: string;
  location: string;
  coordinates?: { lat: number; lng: number };
  price: string;
  revenue: string;
  ebitda: string;
  profitability: string;
  employees: string;
  yearsOperating: string;
  descriptionKey: string;
  isConfidential?: boolean;
  highlightsKey: string;
  images: string[];
  financialData: { year: string; revenue: number; ebitda: number }[];
  targetRevenue?: string;
  targetEbitda?: string;
  percentForSale?: string;
}

// La Borda specific data
export const labordaKPIs = [
  { valueKey: 'businesses.laborda.kpis.history.value', labelKey: 'businesses.laborda.kpis.history.label' },
  { valueKey: 'businesses.laborda.kpis.revenue.value', labelKey: 'businesses.laborda.kpis.revenue.label' },
  { valueKey: 'businesses.laborda.kpis.profitability.value', labelKey: 'businesses.laborda.kpis.profitability.label' },
  { valueKey: 'businesses.laborda.kpis.employees.value', labelKey: 'businesses.laborda.kpis.employees.label' },
];

export const labordaRevenueData = [
  { year: 'n0', revenue: 218 },
  { year: 'n+1', revenue: 223 },
  { year: 'n+2', revenue: 229 },
  { year: 'n+3', revenue: 235 },
  { year: 'n+4', revenue: 240 },
];

export const labordaEbitdaData = [
  { year: 'n0', ebitda: 83 },
  { year: 'n+1', ebitda: 84 },
  { year: 'n+2', ebitda: 84 },
  { year: 'n+3', ebitda: 85 },
  { year: 'n+4', ebitda: 86 },
];

export const labordaProjectionData = [
  { year: 'n0', revenue: 218, ebitda: 83 },
  { year: 'n+1', revenue: 223, ebitda: 84 },
  { year: 'n+2', revenue: 229, ebitda: 84 },
  { year: 'n+3', revenue: 235, ebitda: 85 },
  { year: 'n+4', revenue: 240, ebitda: 86 },
];

export const labordaPnLData = [
  { concept: 'ventaNeta', n0: 217760, n1: 223204, n2: 228785, n3: 234504, n4: 240367 },
  { concept: 'cogs', n0: -65328, n1: -66961, n2: -68635, n3: -70351, n4: -72110 },
  { concept: 'margeBrut', n0: 152432, n1: 156243, n2: 160149, n3: 164153, n4: 168257, pct: '70,0%' },
  { concept: 'personal', n0: -58800, n1: -60270, n2: -61777, n3: -63321, n4: -63321 },
  { concept: 'opex', n0: -238, n1: -467, n2: -708, n3: -960, n4: -1224 },
  { concept: 'lloguer', n0: -9600, n1: -10956, n2: -12374, n3: -13856, n4: -15404 },
  { concept: 'ebitda', n0: 83449, n1: 84196, n2: 84471, n3: 84706, n4: 86484, pct: '38,3%' },
  { concept: 'amortitzacions', n0: -17000, n1: -17000, n2: -18521, n3: -19863, n4: -21116 },
  { concept: 'ebit', n0: 66449, n1: 67196, n2: 65950, n3: 64843, n4: 65368, pct: '30,5%' },
  { concept: 'netProfit', n0: 71778, n1: 73102, n2: 72254, n3: 71328, n4: 71905, pct: '33,0%' },
];

export const labordaBalanceData = [
  { concept: 'actiuFixe', n0: 78000, n1: 69500, n2: 58479, n3: 45616, n4: 31000 },
  { concept: 'existencies', n0: 3056, n1: 3132, n2: 3210, n3: 3291, n4: 3373 },
  { concept: 'deutors', n0: 1320, n1: 1353, n2: 1387, n3: 1421, n4: 1457 },
  { concept: 'proveidors', n0: -8313, n1: -8520, n2: -8733, n3: -8952, n4: -9176 },
  { concept: 'creditors', n0: -4109, n1: -4211, n2: -4317, n3: -4424, n4: -4535 },
  { concept: 'nof', n0: -12732, n1: -13051, n2: -13377, n3: -13711, n4: -14054 },
  { concept: 'actiuTotal', n0: 65268, n1: 56449, n2: 45102, n3: 31904, n4: 16946 },
  { concept: 'patrimoniNet', n0: -3000, n1: -3000, n2: -3000, n3: -3000, n4: -3000 },
  { concept: 'tesoreria', n0: -68379, n1: -53449, n2: -42102, n3: -28904, n4: -13946 },
  { concept: 'pnPassiuTotal', n0: -71379, n1: -56449, n2: -45102, n3: -31904, n4: -16946 },
];

export const labordaValuationData = [
  { concept: 'valorFluxos', value: 243357 },
  { concept: 'valorResidual', value: 314894 },
  { concept: 'totalValoracio', value: 558251, isHighlight: true },
  { concept: 'deutaExterna', value: -68379, isNegative: true },
  { concept: 'recursosNoAfectes', value: 0 },
  { concept: 'totalFondsPropis', value: 489872, isHighlight: true },
  { concept: 'evEbitdaMultiple', value: 6.45, isRatio: true },
];


export const labordaPortfolioData = [
  { nameKey: 'businesses.laborda.portfolio.menu', value: 45, amount: '37€/pp', color: '#8B4513' },
  { nameKey: 'businesses.laborda.portfolio.carta', value: 35, amount: '48€/pp', color: '#D2691E' },
  { nameKey: 'businesses.laborda.portfolio.events', value: 15, amount: '45k', color: '#CD853F' },
  { nameKey: 'businesses.laborda.portfolio.takeaway', value: 5, amount: '15k', color: '#DEB887' },
];

// Alpine Security specific data
export const alpineKPIs = [
  { valueKey: 'businesses.alpine.kpis.endpoints.value', labelKey: 'businesses.alpine.kpis.endpoints.label' },
  { valueKey: 'businesses.alpine.kpis.incidents.value', labelKey: 'businesses.alpine.kpis.incidents.label' },
  { valueKey: 'businesses.alpine.kpis.malware.value', labelKey: 'businesses.alpine.kpis.malware.label' },
  { valueKey: 'businesses.alpine.kpis.experience.value', labelKey: 'businesses.alpine.kpis.experience.label' },
];

export const alpineRevenueData = [
  { year: '2025', revenue: 1148 },
  { year: '2026', revenue: 2150 },
  { year: '2027', revenue: 2674 },
  { year: '2028', revenue: 3196 },
  { year: '2029', revenue: 3840 },
];

export const alpineEbitdaData = [
  { year: '2025', ebitda: 226 },
  { year: '2026', ebitda: 529 },
  { year: '2027', ebitda: 685 },
  { year: '2028', ebitda: 943 },
  { year: '2029', ebitda: 1243 },
];

export const alpineClientsData = [
  { year: '2025', th: 0, cycon: 0, offensive: 0, total: 0 },
  { year: '2026', th: 854, cycon: 100, offensive: 50, total: 854 },
  { year: '2027', th: 1332, cycon: 150, offensive: 75, total: 1332 },
  { year: '2028', th: 1847, cycon: 200, offensive: 100, total: 1847 },
  { year: '2029', th: 2401, cycon: 250, offensive: 125, total: 2401 },
];

export const alpinePortfolioData = [
  { nameKey: 'businesses.alpine.portfolio.threatHunting', value: 86, amount: '1.104k', color: '#2d6a2d' },
  { nameKey: 'businesses.alpine.portfolio.cycon', value: 9, amount: '113k', color: '#4a90d9' },
  { nameKey: 'businesses.alpine.portfolio.offensive', value: 5, amount: '60k', color: '#90b4ce' },
];

// InfinityPay specific data
export const infinitypayKPIs = [
  { valueKey: 'businesses.infinitypay.kpis.recurrence.value', labelKey: 'businesses.infinitypay.kpis.recurrence.label' },
  { valueKey: 'businesses.infinitypay.kpis.tpvs.value', labelKey: 'businesses.infinitypay.kpis.tpvs.label' },
  { valueKey: 'businesses.infinitypay.kpis.profitability.value', labelKey: 'businesses.infinitypay.kpis.profitability.label' },
  { valueKey: 'businesses.infinitypay.kpis.growth.value', labelKey: 'businesses.infinitypay.kpis.growth.label' },
];

export const infinitypayRevenueEbitdaData = [
  { year: '2023', ventas: 230, ebitda: 78 },
  { year: '2024', ventas: 300, ebitda: 154 },
  { year: '2025e', ventas: 310, ebitda: 169 },
  { year: '2026e', ventas: 350, ebitda: 183 },
  { year: '2027e', ventas: 400, ebitda: 210 },
  { year: '2028e', ventas: 440, ebitda: 231 },
  { year: '2029e', ventas: 470, ebitda: 243 },
];

export const infinitypayPortfolioData = [
  { nameKey: 'businesses.infinitypay.portfolio.gateway', value: 40, amount: '200k', color: '#1e4d7b' },
  { nameKey: 'businesses.infinitypay.portfolio.terminals', value: 35, amount: '175k', color: '#4a90d9' },
  { nameKey: 'businesses.infinitypay.portfolio.security', value: 15, amount: '75k', color: '#6ba3d9' },
  { nameKey: 'businesses.infinitypay.portfolio.other', value: 10, amount: '50k', color: '#90b4ce' },
];

// Confidencial Hostelería projection data
export const confHosteleriaRevenueData = [
  { year: 'n+1', revenue: 595.897 },
  { year: 'n+2', revenue: 610.794 },
  { year: 'n+3', revenue: 626.064 },
  { year: 'n+4', revenue: 641.716 },
  { year: 'n+5', revenue: 657.759 },
];

export const confHosteleriaEbitdaData = [
  { year: 'n+1', ebitda: 149.290 },
  { year: 'n+2', ebitda: 149.357 },
  { year: 'n+3', ebitda: 148.082 },
  { year: 'n+4', ebitda: 146.651 },
  { year: 'n+5', ebitda: 150.967 },
];

export const confHosteleriaProjectionData = [
  { year: 'n+1', revenue: 595.897, ebitda: 149.290 },
  { year: 'n+2', revenue: 610.794, ebitda: 149.357 },
  { year: 'n+3', revenue: 626.064, ebitda: 148.082 },
  { year: 'n+4', revenue: 641.716, ebitda: 146.651 },
  { year: 'n+5', revenue: 657.759, ebitda: 150.967 },
];

export const confHosteleriaPortfolioData = [
  { nameKey: 'businesses.confHosteleria.portfolio.menu', value: 45, amount: '37€/pp', color: '#8B4513' },
  { nameKey: 'businesses.confHosteleria.portfolio.carta', value: 35, amount: '48€/pp', color: '#D2691E' },
  { nameKey: 'businesses.confHosteleria.portfolio.eventos', value: 15, amount: '45k', color: '#CD853F' },
  { nameKey: 'businesses.confHosteleria.portfolio.llevar', value: 5, amount: '15k', color: '#DEB887' },
];

// Restaurant Centro del País specific data
export const restaurantCentroRevenueData = [
  { year: 'n0', revenue: 580 },
  { year: 'n+1', revenue: 596 },
  { year: 'n+2', revenue: 611 },
  { year: 'n+3', revenue: 626 },
  { year: 'n+4', revenue: 642 },
  { year: 'n+5', revenue: 658 },
];

export const restaurantCentroEbitdaData = [
  { year: 'n0', ebitda: 148 },
  { year: 'n+1', ebitda: 149 },
  { year: 'n+2', ebitda: 149 },
  { year: 'n+3', ebitda: 148 },
  { year: 'n+4', ebitda: 147 },
  { year: 'n+5', ebitda: 151 },
];

export const restaurantCentroProjectionData = [
  { year: 'n+1', revenue: 596, ebitda: 149 },
  { year: 'n+2', revenue: 611, ebitda: 149 },
  { year: 'n+3', revenue: 626, ebitda: 148 },
  { year: 'n+4', revenue: 642, ebitda: 147 },
  { year: 'n+5', revenue: 658, ebitda: 151 },
];

export const restaurantCentroPortfolioData = [
  { nameKey: 'businesses.confRestaurantCentro.portfolio.dia', value: 55, amount: '35€/pp', color: '#8B4513' },
  { nameKey: 'businesses.confRestaurantCentro.portfolio.noche', value: 30, amount: '48€/pp', color: '#D2691E' },
  { nameKey: 'businesses.confRestaurantCentro.portfolio.events', value: 10, amount: '50k', color: '#CD853F' },
  { nameKey: 'businesses.confRestaurantCentro.portfolio.takeaway', value: 5, amount: '15k', color: '#DEB887' },
];

// Mock data for businesses
export const businessesData: Record<string, Business> = {
  'la-borda': {
    id: 'la-borda',
    titleKey: 'businesses.laborda.title',
    sectorKey: 'sectors.hospitality',
    location: 'La Massana, Andorra',
    coordinates: { lat: 42.545013, lng: 1.515326 },
    price: '75.000 €',
    revenue: '217.760 €',
    ebitda: '83.449 €',
    profitability: '38,3%',
    employees: '2',
    yearsOperating: '45+',
    targetRevenue: '>260k €',
    targetEbitda: '>120k €',
    percentForSale: '100%',
    descriptionKey: 'businesses.laborda.description',
    highlightsKey: 'businesses.laborda.highlights',
    images: [labordaFachada, labordaInterior, labordaProducte, labordaTerrassa, labordaCollage, labordaFacturacio],
    financialData: [
      { year: 'n0', revenue: 218, ebitda: 83 },
      { year: 'n+1', revenue: 223, ebitda: 84 },
      { year: 'n+2', revenue: 229, ebitda: 84 },
      { year: 'n+3', revenue: 235, ebitda: 85 },
      { year: 'n+4', revenue: 240, ebitda: 86 },
    ]
  },
  'alpine-security': {
    id: 'alpine-security',
    titleKey: 'businesses.alpine.title',
    sectorKey: 'sectors.technology',
    location: 'Andorra i Espanya',
    price: '1.300.000 €',
    revenue: '1.300.000 €',
    ebitda: '300.000 €',
    profitability: '18%',
    employees: '15',
    yearsOperating: '2',
    targetRevenue: '>3 Mio €',
    targetEbitda: '700k - 1.3 Mio €',
    percentForSale: '23,4%',
    descriptionKey: 'businesses.alpine.description',
    highlightsKey: 'businesses.alpine.highlights',
    images: [alpineLogo, alpineOverview, alpineRevenue, alpineEbitda, alpineClients, alpinePortfolio, alpineKpiExperience, alpineKpiMalware, alpineKpiIncidents],
    financialData: [
      { year: '2020', revenue: 800, ebitda: 120 },
      { year: '2021', revenue: 950, ebitda: 180 },
      { year: '2022', revenue: 1100, ebitda: 220 },
      { year: '2023', revenue: 1200, ebitda: 260 },
      { year: '2024', revenue: 1300, ebitda: 300 },
    ]
  },
  'infinitypay': {
    id: 'infinitypay',
    titleKey: 'businesses.infinitypay.title',
    sectorKey: 'sectors.fintech',
    location: 'Andorra',
    price: '1.084.964 €',
    revenue: '500.000 €',
    ebitda: '200.000 €',
    profitability: '19%',
    employees: '12',
    yearsOperating: '5',
    targetRevenue: '>3 Mio €',
    targetEbitda: '1 Mio €',
    percentForSale: '100%',
    descriptionKey: 'businesses.infinitypay.description',
    highlightsKey: 'businesses.infinitypay.highlights',
    images: [infinitypayLogo, infinitypayPassarella1, infinitypayPassarella2, infinitypaySeguretat],
    financialData: [
      { year: '2023', revenue: 230, ebitda: 78 },
      { year: '2024', revenue: 300, ebitda: 154 },
      { year: '2025', revenue: 310, ebitda: 169 },
    ]
  },
  'confidencial-hosteleria': {
    id: 'confidencial-hosteleria',
    titleKey: 'businesses.confHosteleria.title',
    sectorKey: 'sectors.hospitality',
    location: 'Andorra',
    price: '180.000 €',
    revenue: '350.000 €',
    ebitda: '85.000 €',
    profitability: '24%',
    employees: '6',
    yearsOperating: '15',
    targetRevenue: '750.000 €',
    targetEbitda: '>200k €',
    percentForSale: '100%',
    isConfidential: true,
    descriptionKey: 'businesses.confHosteleria.description',
    highlightsKey: 'businesses.confHosteleria.highlights',
    images: [confHosteleriaCard, confHostPhoto1, confHostPhoto2, confHostPhoto3, confHostPhoto4, confHostPhoto5, confHostPhoto6, confHostPhoto7],
    financialData: [
      { year: '2020', revenue: 280, ebitda: 55 },
      { year: '2021', revenue: 300, ebitda: 65 },
      { year: '2022', revenue: 320, ebitda: 72 },
      { year: '2023', revenue: 340, ebitda: 80 },
      { year: '2024', revenue: 350, ebitda: 85 },
    ]
  },
  'confidencial-comercio': {
    id: 'confidencial-comercio',
    titleKey: 'businesses.confCommerce.title',
    sectorKey: 'sectors.commerce',
    location: 'Andorra',
    price: '320.000 €',
    revenue: '800.000 €',
    ebitda: '120.000 €',
    profitability: '15%',
    employees: '8',
    yearsOperating: '20',
    targetRevenue: '>1.2 Mio €',
    targetEbitda: '200k €',
    percentForSale: '100%',
    isConfidential: true,
    descriptionKey: 'businesses.confCommerce.description',
    highlightsKey: 'businesses.confCommerce.highlights',
    images: [confComercioCard],
    financialData: [
      { year: '2020', revenue: 650, ebitda: 85 },
      { year: '2021', revenue: 700, ebitda: 95 },
      { year: '2022', revenue: 740, ebitda: 105 },
      { year: '2023', revenue: 770, ebitda: 112 },
      { year: '2024', revenue: 800, ebitda: 120 },
    ]
  },
  'confidencial-servicios': {
    id: 'confidencial-servicios',
    titleKey: 'businesses.confServices.title',
    sectorKey: 'sectors.services',
    location: 'Andorra',
    price: '450.000 €',
    revenue: '600.000 €',
    ebitda: '150.000 €',
    profitability: '25%',
    employees: '10',
    yearsOperating: '12',
    targetRevenue: '>1 Mio €',
    targetEbitda: '300k €',
    percentForSale: '100%',
    isConfidential: true,
    descriptionKey: 'businesses.confServices.description',
    highlightsKey: 'businesses.confServices.highlights',
    images: [confServiciosCard],
    financialData: [
      { year: '2020', revenue: 400, ebitda: 80 },
      { year: '2021', revenue: 450, ebitda: 100 },
      { year: '2022', revenue: 520, ebitda: 120 },
      { year: '2023', revenue: 560, ebitda: 135 },
      { year: '2024', revenue: 600, ebitda: 150 },
    ]
  },
  'confidencial-industria': {
    id: 'confidencial-industria',
    titleKey: 'businesses.confIndustry.title',
    sectorKey: 'sectors.industry',
    location: 'Andorra',
    price: '750.000 €',
    revenue: '1.200.000 €',
    ebitda: '280.000 €',
    profitability: '23%',
    employees: '18',
    yearsOperating: '25',
    targetRevenue: '>2 Mio €',
    targetEbitda: '500k €',
    percentForSale: '100%',
    isConfidential: true,
    descriptionKey: 'businesses.confIndustry.description',
    highlightsKey: 'businesses.confIndustry.highlights',
    images: [confIndustriaCard],
    financialData: [
      { year: '2020', revenue: 950, ebitda: 200 },
      { year: '2021', revenue: 1000, ebitda: 220 },
      { year: '2022', revenue: 1080, ebitda: 245 },
      { year: '2023', revenue: 1150, ebitda: 265 },
      { year: '2024', revenue: 1200, ebitda: 280 },
    ]
  },
  'confidencial-tecnologia': {
    id: 'confidencial-tecnologia',
    titleKey: 'businesses.confTechnology.title',
    sectorKey: 'sectors.technology',
    location: 'Andorra',
    price: '514.788 €',
    revenue: '600.000 €',
    ebitda: '100.000 €',
    profitability: '27%',
    employees: '4',
    yearsOperating: '9',
    targetRevenue: '>1,5 Mio €',
    targetEbitda: '500k €',
    percentForSale: '75%',
    isConfidential: true,
    descriptionKey: 'businesses.confTechnology.description',
    highlightsKey: 'businesses.confTechnology.highlights',
    images: [confTecnologiaCard],
    financialData: [
      { year: '2020', revenue: 350, ebitda: 55 },
      { year: '2021', revenue: 420, ebitda: 70 },
      { year: '2022', revenue: 480, ebitda: 80 },
      { year: '2023', revenue: 550, ebitda: 90 },
      { year: '2024', revenue: 600, ebitda: 100 },
    ]
  },
  'confidencial-restaurant-centro': {
    id: 'confidencial-restaurant-centro',
    titleKey: 'businesses.confRestaurantCentro.title',
    sectorKey: 'sectors.hospitality',
    location: 'Andorra',
    price: '150.000 €',
    revenue: '>500.000 €',
    ebitda: '150.000 €',
    profitability: '>50%',
    employees: '6',
    yearsOperating: '14',
    isConfidential: false,
    descriptionKey: 'businesses.confRestaurantCentro.description',
    highlightsKey: 'businesses.confRestaurantCentro.highlights',
    images: [restaurantCentroPlaceholder],
    financialData: [
      { year: 'n0', revenue: 580, ebitda: 148 },
      { year: 'n+1', revenue: 596, ebitda: 149 },
      { year: 'n+2', revenue: 611, ebitda: 149 },
      { year: 'n+3', revenue: 626, ebitda: 148 },
      { year: 'n+4', revenue: 642, ebitda: 147 },
      { year: 'n+5', revenue: 658, ebitda: 151 },
    ]
  }
};

// Carousel slides data
export const carouselSlides = [
  {
    id: 'la-borda',
    image: labordaFachada,
    titleKey: 'businesses.laborda.title',
    descriptionKey: 'businesses.laborda.carouselDesc',
    price: '75.000 €',
    sectorKey: 'sectors.hospitality',
    isConfidential: false
  },
  {
    id: 'alpine-security',
    image: alpineLogo,
    titleKey: 'businesses.alpine.title',
    descriptionKey: 'businesses.alpine.carouselDesc',
    price: '1.300.000 €',
    sectorKey: 'sectors.technology',
    isConfidential: false
  },
  {
    id: 'infinitypay',
    image: infinitypayLogo,
    titleKey: 'businesses.infinitypay.title',
    descriptionKey: 'businesses.infinitypay.carouselDesc',
    price: '1.084.964 €',
    sectorKey: 'sectors.fintech',
    isConfidential: false
  },
  {
    id: 'confidencial-hosteleria',
    image: confHosteleriaCard,
    titleKey: 'businesses.confHosteleria.title',
    descriptionKey: 'businesses.confHosteleria.carouselDesc',
    price: '180.000 €',
    sectorKey: 'sectors.hospitality',
    isConfidential: true
  },
  {
    id: 'confidencial-comercio',
    image: confComercioCard,
    titleKey: 'businesses.confCommerce.title',
    descriptionKey: 'businesses.confCommerce.carouselDesc',
    price: '320.000 €',
    sectorKey: 'sectors.commerce',
    isConfidential: true
  },
  {
    id: 'confidencial-servicios',
    image: confServiciosCard,
    titleKey: 'businesses.confServices.title',
    descriptionKey: 'businesses.confServices.carouselDesc',
    price: '450.000 €',
    sectorKey: 'sectors.services',
    isConfidential: true
  },
  {
    id: 'confidencial-industria',
    image: confIndustriaCard,
    titleKey: 'businesses.confIndustry.title',
    descriptionKey: 'businesses.confIndustry.carouselDesc',
    price: '750.000 €',
    sectorKey: 'sectors.industry',
    isConfidential: true
  },
  {
    id: 'confidencial-tecnologia',
    image: confTecnologiaCard,
    titleKey: 'businesses.confTechnology.title',
    descriptionKey: 'businesses.confTechnology.carouselDesc',
    price: '514.788 €',
    sectorKey: 'sectors.technology',
    isConfidential: true
  },
  {
    id: 'confidencial-restaurant-centro',
    image: restaurantCentroPlaceholder,
    titleKey: 'businesses.confRestaurantCentro.title',
    descriptionKey: 'businesses.confRestaurantCentro.carouselDesc',
    price: '150.000 €',
    sectorKey: 'sectors.hospitality',
    isConfidential: false
  }
];
