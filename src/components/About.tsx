import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
              <img
                src="prj/About/about-img.jpg"
                alt="About Us"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of dedicated professionals committed to delivering
              high-quality engineering services. Our expertise spans multiple
              domains, ensuring that we provide innovative and reliable
              solutions tailored to our clients' needs.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              Our mission is to lead the way in the engineering industry by
              continuously improving and delivering exceptional services.
            </p>
            <Link to="/about">
              <Button
                size="lg"
                className="mt-4 bg-primary hover:bg-primary-light text-primary-foreground"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
