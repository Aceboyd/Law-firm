import React from 'react';
import { Users, Gavel, Building, Globe, Home, Car } from 'lucide-react';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Users,
      title: 'Family Law',
      description: 'Divorce, custody, adoption, and domestic relations handled with compassion and expertise.',
      cases: '150+ Cases',
    },
    {
      icon: Gavel,
      title: 'Criminal Defense',
      description: 'Aggressive defense for all criminal charges, from misdemeanors to serious felonies.',
      cases: '200+ Cases',
    },
    {
      icon: Building,
      title: 'Corporate Law',
      description: 'Business formation, contracts, mergers, and corporate compliance solutions.',
      cases: '100+ Cases',
    },
    {
      icon: Globe,
      title: 'Immigration Law',
      description: 'Visa applications, citizenship, deportation defense, and family reunification.',
      cases: '80+ Cases',
    },
    {
      icon: Home,
      title: 'Real Estate Law',
      description: 'Property transactions, disputes, zoning issues, and commercial real estate.',
      cases: '120+ Cases',
    },
    {
      icon: Car,
      title: 'Personal Injury',
      description: 'Auto accidents, medical malpractice, and workplace injury compensation.',
      cases: '250+ Cases',
    },
  ];

  return (
    <section id="practice-areas" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#2E3A59] mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-[#2E3A59]/80 max-w-3xl mx-auto">
            Comprehensive legal services across multiple specialties, delivered by experienced attorneys 
            who understand the complexities of the law and your unique situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1"
              >
                <div className="bg-[#2E3A59] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2E3A59]/80 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-[#FFFFFF]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#2E3A59] mb-4">
                  {area.title}
                </h3>
                <p className="text-[#2E3A59]/80 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#D4AF37] font-semibold text-sm">
                    {area.cases}
                  </span>
                  <a
                    href="#contact"
                    className="text-[#2E3A59] hover:text-[#2E3A59]/80 font-semibold text-sm transition-colors duration-200"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;