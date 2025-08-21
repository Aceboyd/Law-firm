import React from 'react';
import { Mail, Phone, Award, Calendar } from 'lucide-react';

import coleman from '../assets/images/randy.jpg';
import mic from '../assets/images/mic.jpg';
import Emily from '../assets/images/emily.jpg';


const Attorneys = () => {
  const attorneys = [
    {
      name: 'Randy Coleman',
      title: 'Senior Partner & Founder',
      image: coleman,
      specialties: ['Corporate Law', 'Real Estate', 'Business Litigation'],
      experience: '25 Years',
      education: 'Harvard Law School, J.D.',
      email: 'info@colemanconsultlaw.com',
      phone: '+1 (659) 237-0466',
    },
    {
      name: 'Michael R. Thompson',
      title: 'Criminal Defense Attorney',
      image: mic,
      specialties: ['Criminal Defense', 'DUI Defense', 'White-Collar Crime'],
      experience: '18 Years',
      education: 'Stanford Law School, J.D.',
      email: 'michael.thompson@lexguardpro.com',
      phone: '+1 (636) 287-0662',
    },
    {
      name: 'Emily J. Rodriguez',
      title: 'Family Law Attorney',
      image: Emily,
      specialties: ['Family Law', 'Divorce', 'Child Custody'],
      experience: '12 Years',
      education: 'Yale Law School, J.D.',
      email: 'emily.rodriguez@lexguardpro.com',
      phone: '(547) 673-4599',
    },
  ];

  return (
    <section id="attorneys" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#2E3A59] mb-4">
            Meet Our Attorneys
          </h2>
          <p className="text-xl text-[#2E3A59]/60 max-w-3xl mx-auto">
            Our experienced legal team combines decades of expertise with a personal commitment 
            to achieving the best possible outcomes for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A59]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span className="text-[#D4AF37] font-semibold text-sm">{attorney.experience} Experience</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#2E3A59] mb-2">
                  {attorney.name}
                </h3>
                <p className="text-[#D4AF37] font-semibold mb-4">{attorney.title}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-[#F5F5F5]/80 mb-2">Education</p>
                  <p className="font-medium text-[#2E3A59]">{attorney.education}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-[#F5F5F5]/80 mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F5F5F5] text-[#2E3A59] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-[#2E3A59]/80">
                    <Mail className="h-4 w-4 mr-3 text-[#D4AF37]" />
                    <span className="text-sm">{attorney.email}</span>
                  </div>
                  <div className="flex items-center text-[#2E3A59]/80">
                    <Phone className="h-4 w-4 mr-3 text-[#D4AF37]" />
                    <span className="text-sm">{attorney.phone}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#2E3A59] hover:bg-[#2E3A59]/80 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </button>
                  <button className="flex-1 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#2E3A59] hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-sm flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;