import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, Filter, Building2, TrendingUp, Users, CheckCircle, X, ArrowUpDown, Lock, Target, Calendar, AlertTriangle, Eye } from "lucide-react";
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
import Navbar from "@/components/Navbar";
import PublishBusinessCard from "@/components/PublishBusinessCard";
import { Link } from "react-router-dom";

import { carouselSlides, businessesData } from '@/data/businesses';
import restaurantCentroGridImg from '@/assets/restaurant-centro/grid-card.png';
import restaurantCentroFachada from '@/assets/restaurant-centro/fachada.png';

// Sector keys for translation
const sectorKeys = [
  { key: 'sectors.hospitality', value: 'Hostelería' },
  { key: 'sectors.realEstate', value: 'Real Estate' },
  { key: 'sectors.commerce', value: 'Comercio' },
  { key: 'sectors.services', value: 'Servicios' },
  { key: 'sectors.industry', value: 'Industria' },
  { key: 'sectors.technology', value: 'Tecnología' },
  { key: 'sectors.fintech', value: 'Fintech' },
  { key: 'publish.other', value: 'Otros' },
];

// Create business data from carousel slides with additional fields for filtering
// Operation type definitions
export type OperationType = 'comprar' | 'vender' | 'traspasar' | 'participar';

const operationBadgeConfig: Record<OperationType, { labelKey: string; className: string }> = {
  comprar: { labelKey: 'buy.badgeBuy', className: 'bg-emerald-600 text-white' },
  vender: { labelKey: 'buy.badgeSell', className: 'bg-blue-600 text-white' },
  traspasar: { labelKey: 'buy.badgeTransfer', className: 'bg-purple-600 text-white' },
  participar: { labelKey: 'buy.badgeInvest', className: 'bg-amber-600 text-white' },
};

const createBusinessData = () => [
  {
    id: 'la-borda',
    titleKey: 'businesses.laborda.title',
    descriptionKey: 'businesses.laborda.carouselDesc',
    sectorKey: 'sectors.hospitality',
    price: 75000,
    priceDisplay: "75.000 €",
    profitability: 33,
    financialDisplayKey: "buy.labordaFinancial",
    publishedDate: new Date('2024-12-01'),
    isConfidential: false,
    operationType: 'traspasar' as OperationType,
    image: carouselSlides.find(s => s.id === 'la-borda')?.image || '',
    miniDescKey: 'buy.labordaMiniDesc',
    miniHighlightsKey: 'buy.labordaMiniHighlights',
    refCode: '260200001',
    visits: 444,
    lastVisitDate: new Date('2026-02-18'),
  },
  {
    id: 'alpine-security',
    titleKey: 'businesses.alpine.title',
    gridTitleKey: 'businesses.alpine.gridTitle',
    descriptionKey: 'businesses.alpine.carouselDesc',
    sectorKey: 'sectors.technology',
    price: 2400000,
    priceDisplay: "2,3 Mio €",
    profitability: 18,
    publishedDate: new Date('2025-01-10'),
    isConfidential: true,
    operationType: 'participar' as OperationType,
    image: carouselSlides.find(s => s.id === 'alpine-security')?.image || '',
    miniDescKey: 'buy.alpineMiniDesc',
    miniHighlightsKey: 'buy.alpineMiniHighlights',
    refCode: '260100002',
    visits: 312,
    lastVisitDate: new Date('2026-02-15'),
  },
  {
    id: 'infinitypay',
    titleKey: 'businesses.infinitypay.title',
    gridTitleKey: 'businesses.infinitypay.gridTitle',
    descriptionKey: 'businesses.infinitypay.carouselDesc',
    sectorKey: 'sectors.fintech',
    price: 1084964,
    priceDisplay: "1,1 Mio €",
    profitability: 52,
    financialDisplayKey: "buy.infinitypayFinancial",
    publishedDate: new Date('2025-01-15'),
    isConfidential: true,
    operationType: 'vender' as OperationType,
    image: carouselSlides.find(s => s.id === 'infinitypay')?.image || '',
    miniDescKey: 'buy.infinitypayMiniDesc',
    miniHighlightsKey: 'buy.infinitypayMiniHighlights',
    refCode: '260100003',
    visits: 287,
    lastVisitDate: new Date('2026-02-20'),
  },
  {
    id: 'confidencial-hosteleria',
    titleKey: 'businesses.confHosteleria.title',
    descriptionKey: 'businesses.confHosteleria.carouselDesc',
    sectorKey: 'sectors.hospitality',
    price: 180000,
    priceDisplay: "180.000 €",
    profitability: 24,
    publishedDate: new Date('2025-01-20'),
    isConfidential: true,
    operationType: 'traspasar' as OperationType,
    image: carouselSlides.find(s => s.id === 'confidencial-hosteleria')?.image || '',
    miniDescKey: 'buy.confHostMiniDesc',
    miniHighlightsKey: 'buy.confHostMiniHighlights',
    refCode: '260100004',
    visits: 198,
    lastVisitDate: new Date('2026-02-11'),
  },
  {
    id: 'confidencial-comercio',
    titleKey: 'businesses.confCommerce.title',
    descriptionKey: 'businesses.confCommerce.carouselDesc',
    sectorKey: 'sectors.realEstate',
    price: 475000,
    priceDisplay: "475.000 €",
    profitability: 6,
    financialDisplayKey: "buy.confComFinancial",
    publishedDate: new Date('2025-01-22'),
    isConfidential: true,
    operationType: 'vender' as OperationType,
    image: carouselSlides.find(s => s.id === 'confidencial-comercio')?.image || '',
    miniDescKey: 'buy.confComMiniDesc',
    miniHighlightsKey: 'buy.confComMiniHighlights',
    refCode: '260100005',
    visits: 156,
    lastVisitDate: new Date('2026-02-08'),
  },
  {
    id: 'confidencial-servicios',
    titleKey: 'businesses.confServices.title',
    descriptionKey: 'businesses.confServices.carouselDesc',
    sectorKey: 'sectors.services',
    price: 500000,
    priceDisplay: "0,5 Mio €",
    profitability: 20,
    financialDisplayKey: "buy.confServFinancial",
    publishedDate: new Date('2025-01-23'),
    isConfidential: true,
    operationType: 'vender' as OperationType,
    image: carouselSlides.find(s => s.id === 'confidencial-servicios')?.image || '',
    miniDescKey: 'buy.confServMiniDesc',
    miniHighlightsKey: 'buy.confServMiniHighlights',
    refCode: '260100006',
    visits: 231,
    lastVisitDate: new Date('2026-02-19'),
  },
  {
    id: 'confidencial-industria',
    titleKey: 'businesses.confIndustry.title',
    descriptionKey: 'businesses.confIndustry.carouselDesc',
    sectorKey: 'sectors.industry',
    price: 750000,
    priceDisplay: "750.000 €",
    profitability: 23,
    publishedDate: new Date('2025-01-24'),
    isConfidential: true,
    operationType: 'participar' as OperationType,
    image: carouselSlides.find(s => s.id === 'confidencial-industria')?.image || '',
    miniDescKey: 'buy.confIndMiniDesc',
    miniHighlightsKey: 'buy.confIndMiniHighlights',
    refCode: '260100007',
    visits: 175,
    lastVisitDate: new Date('2026-02-14'),
  },
  {
    id: 'confidencial-tecnologia',
    titleKey: 'businesses.confTechnology.title',
    descriptionKey: 'businesses.confTechnology.carouselDesc',
    sectorKey: 'sectors.technology',
    price: 514788,
    priceDisplay: "514.788 €",
    profitability: 27,
    publishedDate: new Date('2025-01-26'),
    isConfidential: true,
    operationType: 'participar' as OperationType,
    image: carouselSlides.find(s => s.id === 'confidencial-tecnologia')?.image || '',
    miniDescKey: 'buy.confTechMiniDesc',
    miniHighlightsKey: 'buy.confTechMiniHighlights',
    refCode: '260100008',
    visits: 389,
    lastVisitDate: new Date('2026-02-21'),
  },
  {
    id: 'confidencial-restaurant-centro',
    titleKey: 'businesses.confRestaurantCentro.title',
    descriptionKey: 'businesses.confRestaurantCentro.carouselDesc',
    sectorKey: 'sectors.hospitality',
    price: 180000,
    priceDisplay: "180.000 €",
    profitability: 50,
    financialDisplay: "Facturación 600k € · Obj. Fact. >900k € · EBITDA 121k € · Obj. EBITDA >260k € · Rentabilidad 50% · Obj. Valor Empresa 908k €",
    publishedDate: new Date('2025-02-09'),
    isConfidential: false,
    operationType: 'vender' as OperationType,
    image: restaurantCentroFachada,
    miniDescKey: 'buy.restCentroMiniDesc',
    miniHighlightsKey: 'buy.restCentroMiniHighlights',
    refCode: '260200009',
    visits: 521,
    lastVisitDate: new Date('2026-02-22'),
  }
];

const ComprarNegocio = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedOperationType, setSelectedOperationType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [minProfitability, setMinProfitability] = useState<string>("all");

  const operationTypes = [
    { value: "all", labelKey: 'buy.allOperations' },
    { value: "comprar", labelKey: 'buy.operationBuy' },
    { value: "vender", labelKey: 'buy.operationSell' },
    { value: "traspasar", labelKey: 'buy.operationTransfer' },
    { value: "participar", labelKey: 'buy.operationInvest' },
    { value: "otros", labelKey: 'publish.other' },
  ];

  const allBusinesses = useMemo(() => createBusinessData(), []);

  const priceRanges = [
    { value: "all", label: t('buy.allPrices') },
    { value: "0-200000", label: `${t('buy.lessThan')} 200.000 €` },
    { value: "200000-500000", label: "200.000 € - 500.000 €" },
    { value: "500000-1000000", label: "500.000 € - 1.000.000 €" },
    { value: "1000000-999999999", label: `${t('buy.moreThan')} 1.000.000 €` },
  ];

  const locationOptions = [
    { value: "all", label: t('buy.allLocations') },
    { value: "spain", label: t('buy.locationSpain') },
    { value: "andorra", label: t('buy.locationAndorra') },
    { value: "intl-andorra", label: t('buy.locationIntlAndorra') },
    { value: "intl-spain", label: t('buy.locationIntlSpain') },
    { value: "otros", label: t('publish.other') },
  ];

  const profitabilityOptions = [
    { value: "all", label: t('buy.anyProfitability') },
    { value: "10", label: `+10% ${t('buy.minRequired')}` },
    { value: "15", label: `+15% ${t('buy.minRequired')}` },
    { value: "20", label: `+20% ${t('buy.minRequired')}` },
    { value: "25", label: `+25% ${t('buy.minRequired')}` },
    { value: "30", label: `+30% ${t('buy.minRequired')}` },
  ];

  const sortOptions = [
    { value: "recent", label: t('buy.mostRecent') },
    { value: "price-asc", label: t('buy.priceAsc') },
    { value: "price-desc", label: t('buy.priceDesc') },
    { value: "profit-desc", label: t('buy.profitDesc') },
    { value: "profit-asc", label: t('buy.profitAsc') },
  ];

  const filteredAndSortedBusinesses = useMemo(() => {
    const filtered = allBusinesses.filter((business) => {
      const translatedTitle = t(business.titleKey).toLowerCase();
      const translatedDesc = t(business.descriptionKey).toLowerCase();
      const translatedSector = t(business.sectorKey).toLowerCase();
      
      const matchesSearch = searchQuery === "" || 
        translatedTitle.includes(searchQuery.toLowerCase()) ||
        translatedDesc.includes(searchQuery.toLowerCase()) ||
        translatedSector.includes(searchQuery.toLowerCase());

      const matchesSector = selectedSector === "all" || business.sectorKey === selectedSector;

      let matchesPrice = true;
      if (selectedPriceRange !== "all") {
        const [min, max] = selectedPriceRange.split("-").map(Number);
        matchesPrice = business.price >= min && business.price <= max;
      }

      let matchesProfitability = true;
      if (minProfitability !== "all") {
        matchesProfitability = business.profitability >= Number(minProfitability);
      }

      const matchesOperationType = selectedOperationType === "all" || business.operationType === selectedOperationType;

      return matchesSearch && matchesSector && matchesPrice && matchesProfitability && matchesOperationType;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "profit-desc":
          return b.profitability - a.profitability;
        case "profit-asc":
          return a.profitability - b.profitability;
        case "recent":
        default:
          return b.publishedDate.getTime() - a.publishedDate.getTime();
      }
    });
  }, [searchQuery, selectedSector, selectedPriceRange, selectedOperationType, sortBy, minProfitability, allBusinesses, t]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSector("all");
    setSelectedLocation("all");
    setSelectedPriceRange("all");
    setSelectedOperationType("all");
    setMinProfitability("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedSector !== "all" || selectedLocation !== "all" || selectedPriceRange !== "all" || selectedOperationType !== "all" || minProfitability !== "all";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar variant="dark" />
      
      {/* Compact Hero Bar */}
      <section className="py-4 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <h1 className="text-lg md:text-xl font-bold font-serif">
              {t('buy.title')}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-stone-300">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-500" />
                {t('buy.operatingBusinesses')}
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-amber-500" />
                {t('buy.clearFinancial')}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-500" />
                {t('buy.smeFocus')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-4 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder={t('buy.searchPlaceholder')}
                  className="pl-10 h-12 bg-background"
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
                  {t('buy.clearFilters')}
                </Button>
              )}
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <Select value={selectedOperationType} onValueChange={setSelectedOperationType}>
                <SelectTrigger className="bg-background h-10">
                  <SelectValue placeholder={t('buy.allOperations')} />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {operationTypes.map((op) => (
                    <SelectItem key={op.value} value={op.value}>{t(op.labelKey)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="bg-background h-10">
                  <SelectValue placeholder={t('buy.allSectors')} />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  <SelectItem value="all">{t('buy.allSectors')}</SelectItem>
                  {sectorKeys.map((sector) => (
                    <SelectItem key={sector.key} value={sector.key}>{t(sector.key)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-background h-10">
                  <SelectValue placeholder={t('buy.allLocations')} />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {locationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="bg-background h-10">
                  <SelectValue placeholder={t('buy.allPrices')} />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={minProfitability} onValueChange={setMinProfitability}>
                <SelectTrigger className="bg-background h-10">
                  <SelectValue placeholder={t('buy.anyProfitability')} />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {profitabilityOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active filters badges */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedOperationType !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {t('buy.operationType')}: {t(operationTypes.find(o => o.value === selectedOperationType)?.labelKey || '')}
                    <button onClick={() => setSelectedOperationType("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedSector !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {t('buy.sector')}: {t(selectedSector)}
                    <button onClick={() => setSelectedSector("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedPriceRange !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {t('buy.priceRange')}: {priceRanges.find(r => r.value === selectedPriceRange)?.label}
                    <button onClick={() => setSelectedPriceRange("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedLocation !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {t('buy.location')}: {locationOptions.find(r => r.value === selectedLocation)?.label}
                    <button onClick={() => setSelectedLocation("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {minProfitability !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {t('buy.minProfitability')}: {profitabilityOptions.find(r => r.value === minProfitability)?.label}
                    <button onClick={() => setMinProfitability("all")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="px-3 py-1">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="ml-2 hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Filtered Business Grid */}
      <section className="py-8 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
                {hasActiveFilters ? t('buy.searchResults') : t('home.featuredBusinesses')}
              </h2>
              <p className="text-stone-400">
                {filteredAndSortedBusinesses.length} {filteredAndSortedBusinesses.length === 1 ? t('buy.businessFound') : t('buy.businessesFound')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-stone-400" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px] bg-stone-700 border-stone-600 text-white">
                  <SelectValue placeholder={t('buy.sortBy')} />
                </SelectTrigger>
                <SelectContent className="bg-stone-700 border-stone-600 z-50">
                  {sortOptions.map((option) => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className="text-white hover:bg-stone-600 focus:bg-stone-600 focus:text-white"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredAndSortedBusinesses.length > 0 || !hasActiveFilters ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Interactive Publish Card - Always first position when no filters active */}
              {!hasActiveFilters && (
                <PublishBusinessCard />
              )}
              
              {filteredAndSortedBusinesses.map((business) => (
                <Link to={`/negocio/${business.id}`} key={business.id} className="flex">
                  <div className="rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-[180px] overflow-hidden bg-stone-800">
                      <img
                        src={business.image}
                        alt={t(business.titleKey)}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${business.isConfidential ? 'object-contain object-center p-4 blur-md scale-110' : 'object-cover'}`}
                      />
                      
                      {/* Confidential overlay */}
                      {business.isConfidential && (
                        <div className="absolute inset-0 bg-stone-900/40 flex flex-col items-center justify-center">
                          <Lock className="w-8 h-8 text-amber-500 mb-2" />
                          <span className="text-stone-200 text-sm font-medium">{t('buy.confidentialLocation')}</span>
                        </div>
                      )}
                      
                      {/* Sector Badge + Ref Code */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                        <div className="bg-stone-800/90 text-white px-2 py-1 rounded text-xs font-medium">
                          {t(business.sectorKey)}
                        </div>
                        <div className="bg-stone-800/70 text-stone-300 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider">
                          Ref: {business.refCode}
                        </div>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-lg z-10">
                        {business.priceDisplay}
                      </div>

                      {/* Lock indicator */}
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-stone-900/70 text-stone-300 px-2 py-1 rounded text-[10px] z-10">
                        <Lock className="w-3 h-3" />
                        {t('buy.confidential')}
                      </div>



                    </div>
                    
                    {/* Title Section */}
                    <div className="p-3 bg-card flex-1 flex flex-col">
                      <h3 className="font-serif text-base font-bold text-foreground line-clamp-2 leading-tight">
                        {t(business.gridTitleKey || business.titleKey)}
                      </h3>
                      {/* Mini description & highlights */}
                      <div className="mt-2 space-y-1.5">
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t(business.miniDescKey)}
                        </p>
                        <ul className="text-[10px] text-muted-foreground space-y-0.5">
                          {(t(business.miniHighlightsKey, { returnObjects: true }) as string[]).map((h: string, i: number) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-amber-600 mt-px">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Financial Info - Orange Background */}
                    <div className="bg-amber-600 text-white p-3 mt-auto">
                      <p className="text-xs leading-relaxed">
                        {business.financialDisplay || `Facturación ${business.priceDisplay} · EBITDA ${Math.round(business.price * 0.25).toLocaleString('es-ES')} € · Rentabilidad ${business.profitability}%`}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        {/* Operation Type Badge */}
                        <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium bg-white/20`}>
                          {t(operationBadgeConfig[business.operationType].labelKey)}
                        </div>
                        {/* Last visit date */}
                        <div className="flex items-center gap-1 text-white/80 text-[10px]">
                          <Calendar className="w-3 h-3" />
                          {business.lastVisitDate?.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </div>
                        {/* Visit counter */}
                        <div className="flex items-center gap-1 text-white/80 text-[10px]">
                          <Eye className="w-3 h-3" />
                          {business.visits} VISITES
                        </div>
                      </div>
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
              <h3 className="text-xl font-semibold text-white mb-2">{t('buy.noBusinessesFound')}</h3>
              <p className="text-stone-400 mb-6">{t('buy.adjustFilters')}</p>
              <Button onClick={clearFilters} variant="secondary">
                {t('buy.clearFilters')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('buy.notFindingTitle')}
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            {t('buy.notFindingDesc')}
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-amber-700 hover:bg-amber-50">
            {t('buy.contact')}
          </Button>
        </div>
      </section>

      {/* EBITDA explanation */}
      <section className="py-6 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong>{t('buy.whatIsEbitda')}</strong> {t('buy.ebitdaExplanation')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComprarNegocio;
