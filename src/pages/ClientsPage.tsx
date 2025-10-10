import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ImageLightbox from "@/components/ImageLightbox";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClientsPage = () => {
  useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setLightboxTitle(`Client ${index + 1}`);
    setLightboxOpen(true);
  };

  const filters = [
    { id: "all", label: "All" },
    { id: "pharma", label: "Pharma" },
    { id: "food", label: "Foods" },
    { id: "fmcg", label: "FMCG" },
    { id: "engineering", label: "Engineering" },
    { id: "infra", label: "Infra" },
    { id: "chemical", label: "Chemical" },
    { id: "oil-gas", label: "Oil & Gas" },
    { id: "warehouse", label: "Warehousing" },
    { id: "institutional", label: "Institutional" },
  ];

  const clients = [
    // Pharma
    { src: "prj/pharma/9.jpg", categories: ["pharma"] },
    { src: "prj/pharma/10.jpg", categories: ["pharma"] },
    { src: "prj/pharma/11.jpg", categories: ["pharma"] },
    { src: "prj/pharma/12.jpg", categories: ["pharma"] },
    { src: "prj/pharma/1.jpg", categories: ["pharma", "warehouse"] },
    { src: "prj/pharma/2.jpg", categories: ["pharma", "institutional"] },
    { src: "prj/pharma/3.jpg", categories: ["pharma"] },
    { src: "prj/pharma/4.jpg", categories: ["pharma"] },
    { src: "prj/pharma/5.jpg", categories: ["pharma"] },
    { src: "prj/pharma/6.jpg", categories: ["pharma"] },
    { src: "prj/pharma/7.jpg", categories: ["pharma"] },
    { src: "prj/pharma/8.jpg", categories: ["pharma"] },
    // Foods
    { src: "prj/food/1.jpg", categories: ["food", "fmcg", "chemical", "warehouse"] },
    { src: "prj/food/2.jpg", categories: ["food", "warehouse"] },
    { src: "prj/food/10.jpg", categories: ["food", "warehouse"] },
    { src: "prj/food/4.jpg", categories: ["food"] },
    { src: "prj/food/6.jpg", categories: ["food"] },
    { src: "prj/food/7.jpg", categories: ["food"] },
    { src: "prj/food/8.jpg", categories: ["food"] },
    // FMCG
    { src: "prj/fmcg/1.jpg", categories: ["fmcg"] },
    // Engineering
    { src: "prj/eng/7.jpg", categories: ["engineering"] },
    { src: "prj/eng/8.jpg", categories: ["engineering", "warehouse"] },
    { src: "prj/eng/9.jpg", categories: ["engineering", "warehouse"] },
    { src: "prj/eng/2.jpg", categories: ["engineering"] },
    { src: "prj/eng/3.jpg", categories: ["engineering"] },
    { src: "prj/eng/4.jpg", categories: ["engineering"] },
    { src: "prj/eng/5.jpg", categories: ["engineering"] },
    { src: "prj/eng/6.jpg", categories: ["engineering"] },
    // Infra
    { src: "prj/infra/1.jpg", categories: ["infra"] },
    { src: "prj/infra/2.jpg", categories: ["infra"] },
    { src: "prj/infra/3.jpg", categories: ["infra"] },
    { src: "prj/infra/5.jpg", categories: ["infra", "chemical"] },
    { src: "prj/infra/6.jpg", categories: ["infra"] },
    { src: "prj/infra/7.jpg", categories: ["infra"] },
    { src: "prj/infra/8.jpg", categories: ["infra"] },
    // Chemical
    { src: "prj/chem/6.jpg", categories: ["chemical"] },
    { src: "prj/chem/7.jpg", categories: ["chemical"] },
    { src: "prj/chem/1.jpg", categories: ["chemical"] },
    { src: "prj/chem/8.jpg", categories: ["chemical"] },
    { src: "prj/chem/2.jpg", categories: ["chemical"] },
    { src: "prj/chem/3.jpg", categories: ["chemical"] },
    { src: "prj/chem/4.jpg", categories: ["chemical"] },
    { src: "prj/chem/5.jpg", categories: ["chemical"] },
    // Oil & Gas
    { src: "prj/ong/1.jpg", categories: ["oil-gas"] },
    { src: "prj/ong/2.jpg", categories: ["oil-gas"] },
    { src: "prj/ong/3.jpg", categories: ["oil-gas"] },
    { src: "prj/ong/4.jpg", categories: ["oil-gas"] },
    // Warehousing
    { src: "prj/ware/1.jpg", categories: ["warehouse"] },
    { src: "prj/ware/3.jpg", categories: ["warehouse"] },
    // Institutional
    { src: "prj/dc/1.jpg", categories: ["institutional"] },
    { src: "prj/dc/2.jpg", categories: ["institutional"] },
    { src: "prj/edu/10.jpg", categories: ["institutional"] },
    { src: "prj/edu/9.jpg", categories: ["institutional"] },
    { src: "prj/edu/7.jpg", categories: ["institutional"] },
    { src: "prj/edu/15.jpg", categories: ["institutional"] },
    { src: "prj/edu/12.jpg", categories: ["institutional"] },
    { src: "prj/edu/11.jpg", categories: ["institutional"] },
    { src: "prj/edu/1.jpg", categories: ["institutional"] },
    { src: "prj/edu/2.jpg", categories: ["institutional"] },
    { src: "prj/edu/3.jpg", categories: ["institutional"] },
    { src: "prj/edu/4.jpg", categories: ["institutional"] },
    { src: "prj/edu/5.jpg", categories: ["institutional"] },
    { src: "prj/edu/6.jpg", categories: ["institutional"] },
    { src: "prj/t1.png", categories: ["institutional"] },
    { src: "prj/m1.jpg", categories: ["institutional"] },
  ];

  const filteredClients = clients.filter(
    (client) =>
      activeFilter === "all" || client.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 animate-on-scroll">
              Our Clients
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredClients.map((client, index) => (
                <div
                  key={index}
                  className="animate-on-scroll hover-lift group cursor-pointer"
                  style={{ animationDelay: `${(index % 20) * 50}ms` }}
                  onClick={() => openLightbox(client.src, index)}
                >
                  <div className="block relative overflow-hidden rounded-xl shadow-md">
                    <img
                      src={client.src}
                      alt={`Client ${index + 1}`}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <span className="font-poppins text-white font-bold text-lg px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/40 hover:bg-white/30 transition-all">View</span>
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
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxImage}
        title={lightboxTitle}
      />
    </div>
  );
};

export default ClientsPage;
