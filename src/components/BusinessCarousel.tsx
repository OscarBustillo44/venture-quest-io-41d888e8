import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '@/assets/carousel/slide-1-producto.png';
import slide2 from '@/assets/carousel/slide-2-interior.png';
import slide3 from '@/assets/carousel/slide-3-facturacion.png';
import slide4 from '@/assets/carousel/slide-4-fachada.png';
import slide5 from '@/assets/carousel/slide-5-collage.png';
import slide6 from '@/assets/carousel/slide-6-alpine-security.png';

const slides = [
  {
    image: slide1,
    title: "Producte de qualitat",
    description: "Producte, servei i clientela creat i fidelitzat",
    price: "75.000 €",
    sector: "Hostelería"
  },
  {
    image: slide2,
    title: "Tradició Andorrana",
    description: "Restaurant Borda amb menjar tradicional d'Andorra",
    price: "75.000 €",
    sector: "Hostelería"
  },
  {
    image: slide3,
    title: "Creixement Sostingut",
    description: "Restaurant en funcionament, amb clientela fidel i un Equip que es desitja continuar al negoci i amb possibilitat de creixement addicional important nomes habilitant terrassa exterior",
    price: "75.000 €",
    sector: "Hostelería"
  },
  {
    image: slide4,
    title: "La Borda – Restaurant més antic d'Andorra",
    description: "Facturación 300.000 € · EBITDA 75.000 € · Rentabilidad 43%",
    price: "75.000 €",
    sector: "Hostelería"
  },
  {
    image: slide5,
    title: "La Borda",
    description: "Restaurant més antiga d'Andorra",
    price: "75.000 €",
    sector: "Hostelería"
  },
  {
    image: slide6,
    title: "Alpine Security – Ciberseguretat",
    description: "Empresa de Ciberseguretat (Andorra i Espanya) · Facturación 1,3M € · EBITDA 300k € · Rentabilidad 18%",
    price: "2.400.000 €",
    sector: "Tecnología"
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
            <div className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent" />
              
              {/* Sector Badge */}
              <div className="absolute top-3 left-3 bg-stone-800/80 text-white px-2 py-1 rounded text-xs font-medium">
                {slide.sector}
              </div>
              
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BusinessCarousel;
