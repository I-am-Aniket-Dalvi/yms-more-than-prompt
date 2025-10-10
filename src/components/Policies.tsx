import { useState } from "react";
import { X } from "lucide-react";

const Policies = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const policies = [
    { src: "prj/project/R1.jpg", alt: "Policy 1", caption: "Policy Document 1 - Safety Guidelines" },
    { src: "prj/project/R2.jpg", alt: "Policy 2", caption: "Policy Document 2 - Client Satisfaction" },
    { src: "prj/project/R3.jpg", alt: "Policy 3", caption: "Policy Document 3 - Client Satisfaction" },
  ];

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Policies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of our important policies, outlining our commitment to quality, safety, and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="animate-on-scroll hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(policy.src)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={policy.src}
                      alt={policy.alt}
                      loading="lazy"
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                      <p className="text-primary-foreground font-poppins font-semibold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Click to view full document
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border">
                    <p className="font-poppins text-center text-sm font-medium text-foreground">
                      {policy.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={40} />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] animate-scale-in">
            <img
              src={modalImage}
              alt="Policy Document"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Policies;
