import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesPage = () => {
  useScrollAnimation();
  const [selectedService, setSelectedService] = useState("basic-concept");

  const services = {
    "basic-concept": {
      title: "BASIC / CONCEPT DESIGN",
      description: (
        <>
          <p>We have successfully completed projects in numerous states across India. YMS Consultancy Services has a proven track record of:</p>
          <ul>
            <li>Scheme Drawings</li>
            <li>Developing Design Criterion for all design disciplines</li>
            <li>Basic / Concept design for Architecture, Plant, and Utilities</li>
            <li>Concept Master Plan</li>
            <li>Requirement of Utilities</li>
            <li>Equipment List</li>
            <li>Room Card for each room</li>
            <li>Electrical Load</li>
            <li>+/- 15% to 20% Budgetary Cost Estimate</li>
          </ul>
        </>
      ),
    },
    "detailed-engineering": {
      title: "DETAILED ENGINEERING",
      description: (
        <>
          <p>We have successfully completed projects in numerous states across India. YMS Consultancy Services has a proven track record of:</p>
          <ul>
            <li>Final Design Calculations</li>
            <li>Equipment sizing</li>
            <li>Detailed Technical Specifications</li>
            <li>Good For Construction Drawings for</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <ul className="list-disc pl-6">
              <li>Architectural</li>
              <li>Civil and Structural</li>
              <li>HVAC</li>
              <li>Electrical</li>
              <li>Process Equipment</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Static and rotating machinery</li>
              <li>Mechanical and Piping</li>
              <li>Effluent Treatment</li>
              <li>Fire Protection</li>
              <li>Plumbing and Sanitary design</li>
            </ul>
          </div>
        </>
      ),
    },
    "procurement-assistance": {
      title: "PROCUREMENT ASSISTANCE",
      description: (
        <>
          <p>We have successfully completed projects in numerous states across India. YMS Consultancy Services has a proven track record of:</p>
          <ul>
            <li>Procurement Strategy</li>
            <li>Total number of Procurement Packages</li>
            <li>Vendor / Sub contractor surveys</li>
            <li>Short listing Contractors</li>
            <li>Inquiry requisitions / Tenders</li>
            <li>Bid evaluation – TBA and, if required, CBA</li>
            <li>Recommendation for final vendor</li>
            <li>Drafting Award of Contract along with order specifications</li>
            <li>Assist in Inspection and Expediting</li>
          </ul>
        </>
      ),
    },
    "construction-administration": {
      title: "CONSTRUCTION ADMINISTRATION",
      description: (
        <>
          <p>We have successfully completed projects in numerous states across India. YMS Consultancy Services has a proven track record of:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <ul className="list-disc pl-6">
              <li>Pre-Construction</li>
              <li>Logistics Planning</li>
              <li>Prequalification of Contractor</li>
              <li>Construction Agreements</li>
              <li>Cost Estimation</li>
              <li>Assist in Budget development</li>
              <li>Review Construction Execution Plan</li>
              <li>Procurement activities</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Reply to Request for Information</li>
              <li>Periodic Site visit for resolution of design issues</li>
              <li>Assist Client PMC team in resolution of site related issues</li>
            </ul>
          </div>
        </>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="lg:w-1/4 animate-on-scroll">
                <div className="bg-card rounded-xl shadow-lg p-6 sticky top-24">
                  <ul className="space-y-2">
                    {Object.keys(services).map((key) => (
                      <li key={key}>
                        <button
                          onClick={() => setSelectedService(key)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                            selectedService === key
                              ? "bg-primary text-primary-foreground font-bold"
                              : "hover:bg-muted-foreground/10 text-foreground"
                          }`}
                        >
                          {services[key as keyof typeof services].title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Content */}
              <div className="lg:w-3/4 animate-on-scroll">
                <div className="bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    {services[selectedService as keyof typeof services].title}
                  </h2>
                  <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                    {services[selectedService as keyof typeof services].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
