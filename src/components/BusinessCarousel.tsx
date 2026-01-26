import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide4 from '@/assets/carousel/slide-4-fachada.png';
import slide6 from '@/assets/carousel/slide-6-alpine-security.png';
import infinitypayLogo from '@/assets/infinitypay/logo.png';
import sectorHosteleria from '@/assets/generic/sector-hosteleria.jpg';
import sectorComercio from '@/assets/generic/sector-comercio.jpg';
import sectorServicios from '@/assets/generic/sector-servicios.jpg';
import sectorIndustria from '@/assets/generic/sector-industria.jpg';
import sectorTecnologia from '@/assets/generic/sector-tecnologia.jpg';

const slides = [
  {
    id: 'la-borda',
    image: slide4,
    title: "La Borda – Restaurant més antic d'Andorra",
    description: "Facturación 300.000 € · EBITDA 75.000 € · Rentabilidad 43%",
    price: "75.000 €",
    sector: "Hostelería",
    isConfidential: false
  },
  {
    id: 'alpine-security',
    image: slide6,
    title: "Alpine Security – Ciberseguretat",
    description: "Empresa de Ciberseguretat (Andorra i Espanya) · Facturación 1,3M € · EBITDA 300k € · Rentabilidad 18%",
    price: "2.400.000 €",
    sector: "Tecnología",
    isConfidential: false
  },
  {
    id: 'infinitypay',
    image: infinitypayLogo,
    title: "InfinityPay – Mitjans de Pagament",
    description: "Passarel·la de pagaments, TPVs · Facturación 500k € · EBITDA 200k € · Rentabilidad 19%",
    price: "1.084.964 €",
    sector: "Fintech",
    isConfidential: false
  },
  {
    id: 'confidencial-hosteleria',
    image: sectorHosteleria,
    title: "Negoci Confidencial",
    description: "Sector Hosteleria · Facturación 350k € · EBITDA 85k € · Rentabilidad 24%",
    price: "180.000 €",
    sector: "Hostelería",
    isConfidential: true
  },
  {
    id: 'confidencial-comercio',
    image: sectorComercio,
    title: "Negoci Confidencial",
    description: "Sector Comerç · Facturación 800k € · EBITDA 120k € · Rentabilidad 15%",
    price: "320.000 €",
    sector: "Comercio",
    isConfidential: true
  },
  {
    id: 'confidencial-servicios',
    image: sectorServicios,
    title: "Negoci Confidencial",
    description: "Sector Serveis · Facturación 600k € · EBITDA 150k € · Rentabilidad 25%",
    price: "450.000 €",
    sector: "Servicios",
    isConfidential: true
  },
  {
    id: 'confidencial-industria',
    image: sectorIndustria,
    title: "Negoci Confidencial",
    description: "Sector Indústria · Facturación 1,2M € · EBITDA 280k € · Rentabilidad 23%",
    price: "750.000 €",
    sector: "Industria",
    isConfidential: true
  },
  {
    id: 'confidencial-tecnologia',
    image: sectorTecnologia,
    title: "Tech260126 Sector Tecnologia - [Negoci Confidencial]",
    description: "Sector Tecnologia · Facturación 600k € · EBITDA 100k € · Rentabilidad 27%",
    price: "514.788 €",
    sector: "Tecnología",
    isConfidential: true
  }
];

const BusinessCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 12
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
        className="business-carousel-grid"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`/negocio/${slide.id}`}>
              <div className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent" />
                
                {/* Confidential Watermark */}
                {slide.isConfidential && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white/20 text-4xl md:text-5xl font-bold uppercase tracking-widest transform -rotate-12 select-none">
                      CONFIDENCIAL
                    </div>
                  </div>
                )}
                
                {/* Sector Badge */}
                <div className="absolute top-3 left-3 bg-stone-800/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {slide.sector}
                </div>
                
                {/* Confidential Badge */}
                {slide.isConfidential && (
                  <div className="absolute top-3 left-24 bg-stone-600/90 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    🔒 Confidencial
                  </div>
                )}
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
                  {slide.price}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-lg md:text-xl font-bold mb-1.5 drop-shadow-lg line-clamp-2">
                    {slide.title}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-200 leading-snug line-clamp-3 drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BusinessCarousel;
