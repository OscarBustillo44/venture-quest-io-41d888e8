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
  { year: 'n0', revenue: 242 },
  { year: 'n+1', revenue: 248 },
  { year: 'n+2', revenue: 254 },
  { year: 'n+3', revenue: 261 },
  { year: 'n+4', revenue: 267 },
];

export const labordaEbitdaData = [
  { year: 'n0', ebitda: 100 },
  { year: 'n+1', ebitda: 101 },
  { year: 'n+2', ebitda: 102 },
  { year: 'n+3', ebitda: 102 },
  { year: 'n+4', ebitda: 104 },
];

export const labordaProjectionData = [
  { year: 'n+1', revenue: 248, ebitda: 101 },
  { year: 'n+2', revenue: 254, ebitda: 102 },
  { year: 'n+3', revenue: 261, ebitda: 102 },
  { year: 'n+4', revenue: 267, ebitda: 104 },
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
    revenue: '241.956 €',
    ebitda: '100.386 €',
    profitability: '41%',
    employees: '2',
    yearsOperating: '45+',
    descriptionKey: 'businesses.laborda.description',
    highlightsKey: 'businesses.laborda.highlights',
    images: [labordaFachada, labordaInterior, labordaProducte, labordaTerrassa, labordaCollage, labordaFacturacio],
    financialData: [
      { year: 'n0', revenue: 242, ebitda: 100 },
      { year: 'n+1', revenue: 248, ebitda: 101 },
      { year: 'n+2', revenue: 254, ebitda: 102 },
      { year: 'n+3', revenue: 261, ebitda: 102 },
      { year: 'n+4', revenue: 267, ebitda: 104 },
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
    targetRevenue: '>500k €',
    targetEbitda: '150k €',
    percentForSale: '100%',
    isConfidential: true,
    descriptionKey: 'businesses.confHosteleria.description',
    highlightsKey: 'businesses.confHosteleria.highlights',
    images: [sectorHosteleria],
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
    images: [sectorComercio],
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
    images: [sectorServicios],
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
    images: [sectorIndustria],
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
    images: [sectorTecnologia],
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
    image: sectorHosteleria,
    titleKey: 'businesses.confHosteleria.title',
    descriptionKey: 'businesses.confHosteleria.carouselDesc',
    price: '180.000 €',
    sectorKey: 'sectors.hospitality',
    isConfidential: true
  },
  {
    id: 'confidencial-comercio',
    image: sectorComercio,
    titleKey: 'businesses.confCommerce.title',
    descriptionKey: 'businesses.confCommerce.carouselDesc',
    price: '320.000 €',
    sectorKey: 'sectors.commerce',
    isConfidential: true
  },
  {
    id: 'confidencial-servicios',
    image: sectorServicios,
    titleKey: 'businesses.confServices.title',
    descriptionKey: 'businesses.confServices.carouselDesc',
    price: '450.000 €',
    sectorKey: 'sectors.services',
    isConfidential: true
  },
  {
    id: 'confidencial-industria',
    image: sectorIndustria,
    titleKey: 'businesses.confIndustry.title',
    descriptionKey: 'businesses.confIndustry.carouselDesc',
    price: '750.000 €',
    sectorKey: 'sectors.industry',
    isConfidential: true
  },
  {
    id: 'confidencial-tecnologia',
    image: sectorTecnologia,
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
