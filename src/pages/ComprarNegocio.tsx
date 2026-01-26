import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, Filter, Building2, TrendingUp, Users, CheckCircle, X, ArrowUpDown } from "lucide-react";
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
import { Link } from "react-router-dom";

import { carouselSlides } from '@/data/businesses';

// Sector keys for translation
const sectorKeys = [
  { key: 'sectors.hospitality', value: 'Hostelería' },
  { key: 'sectors.commerce', value: 'Comercio' },
  { key: 'sectors.services', value: 'Servicios' },
  { key: 'sectors.industry', value: 'Industria' },
  { key: 'sectors.technology', value: 'Tecnología' },
  { key: 'sectors.fintech', value: 'Fintech' },
];

// Create business data from carousel slides with additional fields for filtering
const createBusinessData = () => [
  {
    id: 'la-borda',
    titleKey: 'businesses.laborda.title',
    descriptionKey: 'businesses.laborda.carouselDesc',
    sectorKey: 'sectors.hospitality',
    price: 75000,
    priceDisplay: "75.000 €",
    profitability: 43,
    publishedDate: new Date('2024-12-01'),
    isConfidential: false,
    image: carouselSlides.find(s => s.id === 'la-borda')?.image || ''
  },
  {
    id: 'alpine-security',
    titleKey: 'businesses.alpine.title',
    descriptionKey: 'businesses.alpine.carouselDesc',
    sectorKey: 'sectors.technology',
    price: 2400000,
    priceDisplay: "2.400.000 €",
    profitability: 18,
    publishedDate: new Date('2025-01-10'),
    isConfidential: false,
    image: carouselSlides.find(s => s.id === 'alpine-security')?.image || ''
  },
  {
    id: 'infinitypay',
    titleKey: 'businesses.infinitypay.title',
    descriptionKey: 'businesses.infinitypay.carouselDesc',
    sectorKey: 'sectors.fintech',
    price: 1084964,
    priceDisplay: "1.084.964 €",
    profitability: 19,
    publishedDate: new Date('2025-01-15'),
    isConfidential: false,
    image: carouselSlides.find(s => s.id === 'infinitypay')?.image || ''
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
    image: carouselSlides.find(s => s.id === 'confidencial-hosteleria')?.image || ''
  },
  {
    id: 'confidencial-comercio',
    titleKey: 'businesses.confCommerce.title',
    descriptionKey: 'businesses.confCommerce.carouselDesc',
    sectorKey: 'sectors.commerce',
    price: 320000,
    priceDisplay: "320.000 €",
    profitability: 15,
    publishedDate: new Date('2025-01-22'),
    isConfidential: true,
    image: carouselSlides.find(s => s.id === 'confidencial-comercio')?.image || ''
  },
  {
    id: 'confidencial-servicios',
    titleKey: 'businesses.confServices.title',
    descriptionKey: 'businesses.confServices.carouselDesc',
    sectorKey: 'sectors.services',
    price: 450000,
    priceDisplay: "450.000 €",
    profitability: 25,
    publishedDate: new Date('2025-01-23'),
    isConfidential: true,
    image: carouselSlides.find(s => s.id === 'confidencial-servicios')?.image || ''
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
    image: carouselSlides.find(s => s.id === 'confidencial-industria')?.image || ''
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
    image: carouselSlides.find(s => s.id === 'confidencial-tecnologia')?.image || ''
  }
];

const ComprarNegocio = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [minProfitability, setMinProfitability] = useState<string>("all");

  const allBusinesses = useMemo(() => createBusinessData(), []);

  const priceRanges = [
    { value: "all", label: t('buy.allPrices') },
    { value: "0-200000", label: `${t('buy.lessThan')} 200.000 €` },
    { value: "200000-500000", label: "200.000 € - 500.000 €" },
    { value: "500000-1000000", label: "500.000 € - 1.000.000 €" },
    { value: "1000000-999999999", label: `${t('buy.moreThan')} 1.000.000 €` },
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

      return matchesSearch && matchesSector && matchesPrice && matchesProfitability;
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
  }, [searchQuery, selectedSector, selectedPriceRange, sortBy, minProfitability, allBusinesses, t]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSector("all");
    setSelectedPriceRange("all");
    setMinProfitability("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedSector !== "all" || selectedPriceRange !== "all" || minProfitability !== "all";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar variant="dark" />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              {t('buy.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t('buy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Building2 className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{t('buy.operatingBusinesses')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('buy.operatingDesc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{t('buy.clearFinancial')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('buy.clearFinancialDesc')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{t('buy.smeFocus')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('buy.smeFocusDesc')}
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
              {t('buy.searchBusinesses')}
            </h2>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-background rounded-xl shadow-sm">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  {t('buy.sector')}
                </label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder={t('buy.allSectors')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="all">{t('buy.allSectors')}</SelectItem>
                    {sectorKeys.map((sector) => (
                      <SelectItem key={sector.key} value={sector.key}>{t(sector.key)}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  {t('buy.priceRange')}
                </label>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder={t('buy.allPrices')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  {t('buy.minProfitability')}
                </label>
                <Select value={minProfitability} onValueChange={setMinProfitability}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder={t('buy.anyProfitability')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    {profitabilityOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
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

            {/* Simple explanations */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-stone-700">
                    <strong>{t('buy.whatIsEbitda')}</strong> {t('buy.ebitdaExplanation')}
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

          {filteredAndSortedBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedBusinesses.map((business) => (
                <Link to={`/negocio/${business.id}`} key={business.id}>
                  <div className="relative h-[320px] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Background Image */}
                    <img
                      src={business.image}
                      alt={t(business.titleKey)}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent" />
                    
                    {/* Confidential Watermark */}
                    {business.isConfidential && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-white/20 text-4xl md:text-5xl font-bold uppercase tracking-widest transform -rotate-12 select-none">
                          {t('buy.confidential').toUpperCase()}
                        </div>
                      </div>
                    )}
                    
                    {/* Sector Badge */}
                    <div className="absolute top-3 left-3 bg-stone-800/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {t(business.sectorKey)}
                    </div>
                    
                    {/* Confidential Badge */}
                    {business.isConfidential && (
                      <div className="absolute top-3 left-24 bg-stone-600/90 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        🔒 {t('buy.confidential')}
                      </div>
                    )}
                    
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
                      {business.priceDisplay}
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-serif text-lg md:text-xl font-bold mb-1.5 drop-shadow-lg line-clamp-2">
                        {t(business.titleKey)}
                      </h3>
                      <p className="text-xs md:text-sm text-stone-200 leading-snug line-clamp-3 drop-shadow-md">
                        {t(business.descriptionKey)}
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

      <Footer />
    </div>
  );
};

export default ComprarNegocio;
