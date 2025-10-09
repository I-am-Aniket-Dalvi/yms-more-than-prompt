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
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              animation: index === currentSlide ? "ken-burns 20s ease-in-out infinite" : "none",
            }}
          />
        ))}
        {/* Smooth Gradient Overlay - Weblounge style */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
      </div>

      {/* Hero Content with Modern Animations */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-on-scroll">
          <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight">
            <span className="block animate-on-scroll">Your Trusted</span>
            <span className="block animate-on-scroll" style={{ animationDelay: "0.2s" }}>Engineering Partner</span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light animate-on-scroll" 
             style={{ animationDelay: "0.4s" }}>
            Delivering innovative solutions for your engineering needs.
          </p>
          
          <div className="animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToServices}
              size="lg"
              className="font-poppins bg-white/10 hover:bg-white/20 text-primary-foreground border-2 border-white/30 hover:border-white/50 backdrop-blur-md px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-105"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-on-scroll-fade">
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-foreground/80 animate-bounce" style={{ animationDelay: "0s" }} />
          <span className="w-2 h-2 rounded-full bg-primary-foreground/80 animate-bounce" style={{ animationDelay: "0.2s" }} />
          <span className="w-2 h-2 rounded-full bg-primary-foreground/80 animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      {/* Ken Burns Animation */}
      <style>{`
        @keyframes ken-burns {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
