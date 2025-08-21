import React from 'react';
import { Scale, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2E3A59] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#D4AF37] p-2 rounded-lg">
                <Scale className="h-6 w-6 text-[#FFFFFF]" />
              </div>
              <div>
                <h3 className="text-sm font-serif font-bold text-[#FFFFFF]">COLEMAN CONSULTANCY</h3>
                <p className="text-sm text-[#F5F5F5]/80">Legal Excellence Since 1995</p>
              </div>
            </div>
            <p className="text-[#F5F5F5]/80 leading-relaxed">
              Defending your rights and securing your future with over 25 years of legal expertise. 
              Your trusted advocates when it matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#2E3A59]/80 hover:bg-[#2E3A59] p-2 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5 text-[#FFFFFF]" />
              </a>
              <a href="#" className="bg-[#2E3A59]/80 hover:bg-[#2E3A59] p-2 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5 text-[#FFFFFF]" />
              </a>
              <a href="#" className="bg-[#2E3A59]/80 hover:bg-[#2E3A59] p-2 rounded-lg transition-colors duration-200">
                <Linkedin className="h-5 w-5 text-[#FFFFFF]" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-[#FFFFFF] mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {[
                'Family Law',
                'Criminal Defense',
                'Corporate Law',
                'Immigration Law',
                'Real Estate Law',
                'Personal Injury',
              ].map((area) => (
                <li key={area}>
                  <a href="#practice-areas" className="text-[#F5F5F5]/80 hover:text-[#2E3A59] transition-colors duration-200">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-[#FFFFFF] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Attorneys', href: '#attorneys' },
                { name: 'Case Results', href: '#' },
                { name: 'Client Resources', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Privacy Policy', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#F5F5F5]/80 hover:text-[#2E3A59] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-[#FFFFFF] mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] mt-1" />
                <div className="text-[#F5F5F5]/80">
                  <p>777 S Figueroa St, Los Angeles, CA 90017, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-[#F5F5F5]/80">+1 (659) 237-0466</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-[#F5F5F5]/80">info@colemanconsultlaw.com</span>
              </div>
            </div>
            
            
          </div>
        </div>

        <div className="border-t border-[#2E3A59]/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#F5F5F5]/80 text-sm">
              © 2024 LexGuard Pro. All rights reserved. | Attorney Advertising
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#F5F5F5]/80 hover:text-[#2E3A59] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-[#F5F5F5]/80 hover:text-[#2E3A59] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[#F5F5F5]/80 hover:text-[#2E3A59] transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-[#2E3A59]/50">
            <p className="text-xs text-[#F5F5F5]/60 leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. This information 
              is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;