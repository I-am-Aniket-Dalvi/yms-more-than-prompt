import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    { src: "assets/img/test/Samsonite1.jpg", alt: "Samsonite" },
    { src: "assets/img/test/SLS 1.jpg", alt: "S.L.S. Memorial Residential School" },
    { src: "assets/img/test/HFL1.jpg", alt: "HFL Consumer Product Pvt. Ltd." },
    { src: "assets/img/test/HFL2.jpg", alt: "HFL Consumer Product Pvt. Ltd." },
    { src: "assets/img/test/Orbital1.jpg", alt: "Orbittal" },
    { src: "assets/img/test/Orbital2.jpg", alt: "Orbittal" },
    { src: "assets/img/test/PWD Nanded1.jpg", alt: "PWD Nanded" },
    { src: "assets/img/test/PWD Nanded2.jpg", alt: "PWD Nanded" },
    { src: "assets/img/test/Pragati Aster1.jpg", alt: "Pragati Corporation" },
    { src: "assets/img/test/Sanghvi1.jpg", alt: "Sanghvi" },
    { src: "assets/img/test/Vestas1.jpg", alt: "Prax Aircon Pvt. Ltd." },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-secondary via-secondary/95 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued clients have to say about our engineering excellence
          </p>
        </div>

        <div className="animate-on-scroll max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      loading="lazy"
                      className="w-full h-[400px] object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 bg-card border-t border-border">
                    <p className="font-poppins text-center text-sm font-semibold text-foreground">
                      {testimonial.alt}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
