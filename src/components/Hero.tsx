import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "View -8.jpg",
    "View-1.jpg",
    "View-3.jpg",
    "View-01.jpg",
    "View-5.jpg",
    "assets/img/projects/index/ci1.jpg",
    "assets/img/projects/index/eng5.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToServices = () => {
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ${
              index === currentSlide ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        ))}
        {/* Premium Gradient Overlay - Weblounge style */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      {/* Hero Content with Modern Animations */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-10 animate-on-scroll">
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-tight tracking-tight">
            <span className="block animate-on-scroll drop-shadow-2xl">Your Trusted</span>
            <span className="block animate-on-scroll drop-shadow-2xl" style={{ animationDelay: "0.2s" }}>Engineering Partner</span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 font-light animate-on-scroll max-w-3xl mx-auto drop-shadow-lg" 
             style={{ animationDelay: "0.4s" }}>
            Delivering innovative solutions for your engineering needs.
          </p>
          
          <div className="animate-on-scroll flex gap-4 justify-center flex-wrap" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToServices}
              size="lg"
              className="font-poppins bg-white text-primary hover:bg-white/90 border-0 px-10 py-7 text-lg rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-105 font-semibold"
            >
              Explore Our Services
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              className="font-poppins bg-white/10 hover:bg-white/20 text-primary-foreground border-2 border-white/40 hover:border-white/60 backdrop-blur-lg px-10 py-7 text-lg rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-105 font-semibold"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-on-scroll-fade">
        <p className="text-primary-foreground/70 text-sm font-poppins tracking-wider uppercase">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary-foreground/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
