import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-secondary/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-b border-white/5"
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 text-primary-foreground hover:opacity-90 transition-all duration-500",
              "group"
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500"></div>
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-12 w-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10"
              />
            </div>
            <span className="font-poppins font-bold text-xl lg:text-2xl hidden sm:block tracking-tight">
              YMS Consulting Engineers
            </span>
            <span className="font-poppins font-bold text-xl sm:hidden">YMS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "font-poppins text-primary-foreground hover:text-primary-foreground hover:bg-white/15 transition-all duration-500 rounded-full px-6 py-6 font-medium text-base",
                    "relative overflow-hidden group",
                    location.pathname === link.href && "bg-white/20 shadow-lg"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden text-primary-foreground hover:bg-white/10 transition-all duration-300 rounded-full",
              isMobileMenuOpen && "bg-white/15"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2 bg-secondary/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/10">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-poppins text-primary-foreground hover:bg-white/10 rounded-full transition-all duration-300",
                      location.pathname === link.href && "bg-white/15"
                    )}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
