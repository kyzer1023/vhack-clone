import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const NavigationBar = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // Menu items for navigation
  const menuItems = [
    { label: "Winners", link: "/#" },
    { label: "Home", link: "/#" },
    { label: "Tentative", link: "/#" },
    { label: "Speakers", link: "/#" },
    { label: "Judges", link: "/#" },
    { label: "Mentors", link: "/#" },
    { label: "Partners", link: "/#" },
    { label: "FAQs", link: "/#" },
    { label: "Rules", link: "/#" },
    { label: "Organising Team", link: "/#" },
  ];

  return (
    <div className="relative">
      {/* Top navigation bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-[24px] py-[12px] flex justify-between items-center transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-[#0E1A1F]/40 backdrop-blur-md border-b border-gray-700' : 'bg-[#0E1A1F]'
      }`}>
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src="/VHack_Logo.png" alt="V HACK" className="h-8 w-8" />
          <span className="text-white text-xl tracking-widest font-['Skranji'] uppercase"> V Hack </span>
        </div>
        {/* Desktop Navigation - visible above 1240px */}
      <div className="hidden xl:flex items-center gap-3">
        <div className="md:justify-end flex">
          <ul className="flex items-center space-x-6 px-6 py-2 rounded-md bg-black bg-opacity-60">
            {menuItems.map((item, index) => (
              <li key={index} className="*:hover:text-blue-1">
                <a
                  href={item.link}
                  className="text-white py-2 transition-colors font-['Inter']"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[#E88D67] px-4 sm:px-6 py-2 border-none text-black text-center hover:bg-white hover:text-[#000000ca] ms-2 font-medium transition-colors rounded-lg">
          Log in
        </button>
      </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center gap-4">
          <button className="bg-[#E88D67] px-4 sm:px-6 py-2 border-none text-black text-center hover:bg-white hover:text-[#000000ca] ms-4 max-sm:ms-2 font-medium transition-colors rounded-lg">
            Log in
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-[#1a2428] rounded-lg"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[64px]"></div>

      {/* Mobile menu - slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-52 bg-[#0a0f12] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-4">
          <li className="font-semibold font-skranji text-xl mb-4">
            <a href="/#" className="text-white">V HACK</a>
          </li>
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-[#60A5FA] text-white">
              <a href={item.link} className="block py-0.2 transition-colors font-['Inter']">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavigationBar;
