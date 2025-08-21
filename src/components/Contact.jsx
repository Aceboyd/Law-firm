import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#2E3A59] mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-xl text-[#2E3A59]/80 max-w-3xl mx-auto">
            Ready to discuss your legal matter? Contact us today for a confidential consultation. 
            We're here to help you understand your options and protect your rights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#2E3A59] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E3A59] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E3A59] mb-1">Office Address</h4>
                    <p className="text-[#2E3A59]/80">
                      777 S Figueroa St, Los Angeles, <br />CA 90017, USA
                      <br />
                      
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E3A59] mb-1">Phone Numbers</h4>
                    <p className="text-[#2E3A59]/80">
                      Main: +1 (659) 237-0466<br />
                      Emergency: +1 (457) 242 7717
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E3A59] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E3A59] mb-1">Email</h4>
                    <p className="text-[#2E3A59]/80">
                      info@colemanconsultlaw.com<br />
                      info@colemanconsultlaw.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E3A59] mb-1">Office Hours</h4>
                    <p className="text-[#2E3A59]/80">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Emergency consultations available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Notice */}
            <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-[#2E3A59]">Emergency Legal Matters</h4>
                  <p className="text-sm text-[#2E3A59]/80 mt-1">
                    If you have an urgent legal matter that requires immediate attention, 
                    please call our emergency line at +1(457) 242 7717.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-[#2E3A59] mb-6">
              Request Your Free Consultation
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;