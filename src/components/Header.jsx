import React, { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Attorneys', href: '#attorneys' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="bg-primary-500 p-2 rounded-lg">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary-500 -ml-9">COLEMAN CONSULTANCY</h1>
              <p className="text-sm text-gray-600 hidden sm:block -ml-9">Legal Excellence Since 1995</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#2E3A59] font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gold-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#2E3A59] hover:text-white transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#2E3A59] font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gold-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2E3A59] transition-colors duration-200 shadow-md text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;