// Navbar.jsx - With Logo Image
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        isScrolled
          ? "bg-white shadow-md border-b border-teal-100"
          : "bg-white shadow-sm border-b border-teal-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Image */}
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="flex items-center space-x-3"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/aaf-logo.png`}
              alt="AAF Logo"
              className="h-12 w-12 object-contain hover:scale-110 transition-transform"
            />
            <div className="hidden sm:block">
              <h2 className="font-bold text-base text-gray-900">
                Asian American Foods
              </h2>
              <p className="text-xs text-teal-600 font-semibold tracking-wide">
                HALAL CERTIFIED
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="tel:+17327818102"
              className="flex items-center gap-2 bg-teal-500 text-white px-6 py-2.5 rounded-lg hover:bg-teal-600 transition-all font-semibold shadow-md hover:shadow-lg text-sm"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">(732) 781-8102</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-teal-100">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="block px-4 py-3 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+17327818102"
                className="flex items-center justify-center gap-2 bg-teal-500 text-white px-4 py-3 rounded-lg font-semibold mt-4 hover:bg-teal-600 transition-all shadow-md"
              >
                <Phone size={18} />
                (732) 781-8102
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
