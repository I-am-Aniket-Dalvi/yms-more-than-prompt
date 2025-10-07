import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "View -8.jpg",
    "View-1.jpg",
    "View-3.jpg",
    "View-01.jpg",
    "View-5.jpg",
    "assets/img/projects/index/ci1.jpg",
    "assets/img/projects/index/eng5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-[ken-burns_20s_ease-in-out_infinite]"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Your Trusted Engineering Partner
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Delivering innovative solutions for your engineering needs.
        </p>
        <Button
          size="lg"
          onClick={scrollToServices}
          className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-6 text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
        >
          Explore Our Services
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary-foreground" size={32} />
      </div>

      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
