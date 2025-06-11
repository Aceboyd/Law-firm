import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#2E3A59] via-[#2E3A59]/90 to-[#2E3A59]/80 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23F5F5F5%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Defending Your Rights,
                <span className="text-[#D4AF37] block">Securing Your Future</span>
              </h1>
              <p className="text-xl text-[#F5F5F5] leading-relaxed">
                With over 25 years of legal excellence, LexGuard Pro provides premier legal representation
                across multiple practice areas. Your trusted advocates when it matters most.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-[#F5F5F5]">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-[#F5F5F5]">Confidential</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-[#F5F5F5]">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#D4AF37] hover:bg-[#2E3A59] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Free Case Evaluation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#practice-areas"
                className="border-2 border-white text-white hover:bg-[#F5F5F5] hover:text-[#2E3A59] px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
              >
                Our Practice Areas
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-[#F5F5F5]/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional law office"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;