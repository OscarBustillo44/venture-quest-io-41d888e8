import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { carouselSlides } from '@/data/businesses';

const BusinessCarousel = () => {
  const { t } = useTranslation();

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
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`/negocio/${slide.id}`}>
              <div className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Background Image */}
                <div className="absolute inset-0 bg-stone-800" />
                <img
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  className="absolute inset-0 w-full h-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent" />
                
                {/* Sector Badge */}
                <div className="absolute top-3 left-3 bg-stone-800/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {t(slide.sectorKey)}
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
                  {slide.price}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-lg md:text-xl font-bold mb-1.5 drop-shadow-lg line-clamp-2">
                    {t(slide.titleKey)}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-200 leading-snug line-clamp-3 drop-shadow-md">
                    {t(slide.descriptionKey)}
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
