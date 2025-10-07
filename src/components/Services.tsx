import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "assets/Ser/1.png",
      title: "TECHNICAL CONSULTING",
      description:
        "Site Selection, Vendor Assessments, Program Management, Strategic Planning, Sustainability Design.",
    },
    {
      icon: "assets/Ser/2.png",
      title: "CONSTRUCTION ADMINISTRATION",
      description:
        "Pre-Construction, Logistics Planning, Prequalification of Contractor, Construction, Agreements, Cost Estimation.",
    },
    {
      icon: "assets/Ser/3.png",
      title: "DETAILED ENGINEERING",
      description:
        "Final Design Calculations, Equipment sizing, Detailed Technical Specifications, Good For.",
    },
    {
      icon: "assets/Ser/4.png",
      title: "PROCUREMENT ASSISTANCE",
      description:
        "Procurement Strategy, Total number of Procurement Packages, Vendor / Sub contractor surveys.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border hover:border-primary transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 h-16 w-16 mx-auto">
                    <img
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-center text-lg font-bold text-primary group-hover:text-primary-light transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="flex items-center justify-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
