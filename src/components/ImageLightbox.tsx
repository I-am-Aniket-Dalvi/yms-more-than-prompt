import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
}

const ImageLightbox = ({ isOpen, onClose, imageSrc, title }: ImageLightboxProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-10"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={title || "Full screen image"}
          className="w-full h-full object-contain rounded-lg"
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white font-poppins font-bold text-xl md:text-2xl text-center">
              {title}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
