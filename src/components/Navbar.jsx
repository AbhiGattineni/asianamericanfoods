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
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all ${isScrolled ? "bg-white shadow-sm" : "bg-white/95"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Image */}
          <a 
            href="#home" 
            onClick={(e) => smoothScroll(e, "#home")}
            className="flex items-center space-x-3"
          >
            <img
              src="/asianamericanfoods/aaf-logo.png"
              alt="AAF Logo"
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <h2 className="font-bold text-lg text-gray-800">Asian American Foods</h2>
              <p className="text-xs text-teal-600 font-medium">HALAL Certified</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+17327818102"
              className="flex items-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-lg hover:bg-teal-600 transition-all font-medium"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">(732) 781-8102</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="block px-4 py-3 text-gray-600 hover:bg-teal-50 rounded-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+17327818102"
                className="flex items-center justify-center gap-2 bg-teal-500 text-white px-4 py-3 rounded-lg font-medium mt-4"
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
