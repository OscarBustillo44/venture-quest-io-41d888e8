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

const slides = [
  {
    image: slide1,
    title: "Producte de qualitat",
    description: "Producte, servei i clientela creat i fidelitzat"
  },
  {
    image: slide2,
    title: "Tradició Andorrana",
    description: "Restaurant Borda amb menjar tradicional d'Andorra"
  },
  {
    image: slide3,
    title: "Creixement Sostingut",
    description: "Restaurant en funcionament, amb clientela fidel i un Equip que es desitja continuar al negoci i amb possibilitat de creixement addicional important nomes habilitant terrassa exterior"
  },
  {
    image: slide4,
    title: "La Borda – Restaurant més antic d'Andorra",
    description: "Facturación 300.000 € · EBITDA 75.000 € · Rentabilidad 43% · Preu 75.000 €"
  },
  {
    image: slide5,
    title: "La Borda",
    description: "Restaurant més antiga d'Andorra"
  }
];

const BusinessCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1
          }
        }}
        className="business-carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden group">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-base md:text-lg text-stone-100 leading-relaxed max-w-2xl drop-shadow-md font-light">
                  {slide.description}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-500/50 rounded-tr-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BusinessCarousel;
