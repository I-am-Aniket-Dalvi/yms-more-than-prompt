import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutPage = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="prj/About/about-img.jpg"
                  alt="About YMS Consulting Engineers"
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-on-scroll space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                YMS Consulting Engineers is a Young, Flexible Group with a
                Value-Driven Culture. We are a team of competent architects,
                registered with the Council of Architecture, and experienced
                design engineers in the industrial, residential, commercial, and
                infrastructural sectors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in LEED Green Building Certification design and
                have worked on many LEED-rated buildings. Our full-service
                capabilities include handling EPCM Projects, ensuring we deliver
                cost-effective and time-sensitive solutions across industries
                like Engineering, Pharma, FMCG, F&B, and more.
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Our mission is to provide cutting-edge business solutions in
                Technology, Costs, Schedule, and Sustainable Design, offering a
                seamless experience for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
