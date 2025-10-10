import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsPage = () => {
  useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "engineering-mfg", label: "Engineering MFG" },
    { id: "process-chemical", label: "Process & Chemical" },
    { id: "pharma", label: "Pharma" },
    { id: "foods-beverages", label: "Foods & Beverages" },
    { id: "commercial-institutional", label: "Commercial & Institutional" },
    { id: "warehouse", label: "Warehouse" },
    { id: "residential", label: "Residential" },
  ];

  const projects = [
    // Engineering MFG
    { src: "assets/img/projects/Eng/eng1.jpg", title: "Traction Motor Plant, Nashik", categories: ["engineering-mfg"] },
    { src: "assets/img/projects/Eng/eng2.jpg", title: "AIS & GIS Plant, Aurangabad", categories: ["engineering-mfg"] },
    { src: "assets/img/projects/Eng/eng3.jpg", title: "Fabrication of Heat Exchanger and Pressure Vessels – Dahej, Gujarat", categories: ["engineering-mfg"] },
    { src: "assets/img/projects/Eng/eng4.jpg", title: "Luggage Assembly Facility & Warehouse – Nashik", categories: ["engineering-mfg"] },
    { src: "assets/img/projects/Eng/eng8.jpg", title: "Ball Mill Building Project – Belgavi", categories: ["engineering-mfg", "process-chemical"] },
    { src: "assets/img/projects/Eng/eng6.jpg", title: "Defence Equipment Manufacturing Unit – Coimbatore", categories: ["engineering-mfg"] },
    { src: "assets/img/projects/Eng/eng5.jpg", title: "Office & Research Centre (Defence Manufacturing) – Talegaon, Pune", categories: ["engineering-mfg"] },
    { src: "assets/img/projects/Eng/eng7.jpg", title: "Furniture Manufacturing Unit – Wada, Manor", categories: ["engineering-mfg"] },
    // Process & Chemical
    { src: "assets/img/projects/pc/pc1.jpg", title: "Defoamer MFG. Plant, Silvassa", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc2.jpg", title: "Tank Farm at Manali, Chennai", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc3.jpg", title: "Detergent Slurry Processing - Rajpura, Punjab", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc4.jpg", title: "Brown Field Upgradation Works for FMCG - Chiplun", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc5.jpg", title: "FMCG Packing Hall - Rajpura, Punjab", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc6.jpg", title: "Soap & Detergent Packaging Hall, Sumerpur", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc7.jpg", title: "Paint Manufacturing Facility – Various Locations", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc9.jpg", title: "Ball Mill Building Project – Belgavi", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc10.jpg", title: "Ni-Alloy Milling Plant - Dombivali, Maharashtra", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc11.jpg", title: "LNG Pipe line, Mysore", categories: ["process-chemical"] },
    { src: "assets/img/projects/pc/pc12.jpg", title: "Airlift Installation - Chiplun, Maharashtra", categories: ["process-chemical"] },
    // Pharma
    { src: "assets/img/projects/pha/ph1.jpg", title: "Green-field OSD Facicility - Hyderabad", categories: ["pharma"] },
    { src: "assets/img/projects/pha/ph2.jpg", title: "Green-Field Formulation Facility - Uran", categories: ["pharma"] },
    { src: "assets/img/projects/pha/ph3.jpg", title: "Cipla-Kurkumbh, Pune", categories: ["pharma"] },
    { src: "assets/img/projects/pha/ph4.jpg", title: "Terminally Sterilized Products Warehouse, Vizag", categories: ["pharma", "warehouse"] },
    { src: "assets/img/projects/pha/ph5.jpg", title: "AS Block Deconstruction", categories: ["pharma"] },
    { src: "assets/img/projects/pha/ph7.jpg", title: "Upgradation of Surgical Sutures Manufacturing Unit- Aurangabad", categories: ["pharma"] },
    { src: "assets/img/projects/pha/ph8.jpg", title: "R&D and Pilot Plant for Bio-similar Products – Hubli, Karnataka", categories: ["pharma"] },
    // Foods & Beverages
    { src: "assets/img/projects/fb/fb1.jpg", title: "Ice Cream Manufacturing Facility – Lucknow", categories: ["foods-beverages"] },
    { src: "assets/img/projects/fb/fb2.jpg", title: "Fruit Juice Plant  - Guwahati", categories: ["foods-beverages"] },
    { src: "assets/img/projects/fb/fb3.jpg", title: "Juices & Soft Drinks Plant - Assam", categories: ["foods-beverages"] },
    { src: "assets/img/projects/fb/fb4.jpg", title: "Tomato Ketchup Plant Expansion - Nashik", categories: ["foods-beverages"] },
    { src: "assets/img/projects/fb/fb5.jpg", title: "Tomato Ketchup Plant Modification, Rajpura, Punjab", categories: ["foods-beverages"] },
    { src: "assets/img/projects/fb/fb7.jpg", title: "Expansion – Health Drink Manufacturing Plant, Rajahmundry", categories: ["foods-beverages"] },
    { src: "assets/img/projects/fb/fb8.jpg", title: "Spirits-Diageo-Various Locations", categories: ["foods-beverages"] },
    // Commercial & Institutional
    { src: "assets/img/projects/ci/ci1.jpg", title: "Nanded Civil Hospital", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci3.jpg", title: "Stem Rx Hospital – Rabale, Navi Mumbai", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci4.jpg", title: "Birsa Agriculture University – Kanke, Ranchi", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci5.jpg", title: "S&W – Colt Data Center, Airoli, Navi Mumbai", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci6.jpg", title: "Substation - Airoli", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci7.jpg", title: "Wayside Amenities Design - Vadodara-Delhi NH", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci8.jpg", title: "Bangalore Airport  - ASR Building", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci9.jpg", title: "Bangalore Airport – Apron Lighting", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci10.jpg", title: "Corporate Office Concept Design - Rajkot", categories: ["commercial-institutional"] },
    { src: "assets/img/projects/ci/ci11.jpg", title: "Global Training Centre & Research Unit, Mumbai", categories: ["commercial-institutional"] },
    // Warehouse
    { src: "assets/img/projects/wh/wh1.jpg", title: "Global Training Centre & Research Unit, Mumbai", categories: ["warehouse"] },
    { src: "assets/img/projects/wh/wh2.jpg", title: "RM Warehouse - Nashik", categories: ["warehouse"] },
    { src: "assets/img/projects/wh/wh3.jpg", title: "Mega Warehouse, Nasik", categories: ["warehouse"] },
    { src: "assets/img/projects/wh/wh4.jpg", title: "RM/FG Warehouse for Luggage - Nashik", categories: ["warehouse"] },
    { src: "assets/img/projects/wh/wh5.jpg", title: "Detergent Powder Warehouse - Chiplun", categories: ["warehouse"] },
    { src: "assets/img/projects/wh/wh6.jpg", title: "Warehouse Expansion, Amli", categories: ["warehouse"] },
    { src: "assets/img/projects/wh/wh8.jpg", title: "Ice Cream Manufacturing Facility – Lucknow", categories: ["warehouse"] },
    // Residential
    { src: "assets/img/projects/res/1.jpg", title: "Residential Project", categories: ["residential"] },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 animate-on-scroll">
              Our Projects
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card text-foreground hover:bg-primary/10 border border-border"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-on-scroll hover-lift group"
                  style={{ animationDelay: `${(index % 20) * 50}ms` }}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={project.src}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                      <h3 className="text-primary-foreground font-poppins font-bold text-center mb-4 text-lg">
                        {project.title}
                      </h3>
                      <a 
                        href={project.src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white text-primary rounded-full font-poppins font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
