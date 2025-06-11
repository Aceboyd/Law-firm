import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreeToTerms: false,
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="bg-[#F5F5F5] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-[#2E3A59]" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#2E3A59] mb-4">
          Thank You!
        </h3>
        <p className="text-[#2E3A59]/80 mb-4">
          Your consultation request has been received. Our team will contact you within 24 hours.
        </p>
        <p className="text-sm text-[#2E3A59]/60">
          For urgent matters, please call us at (555) 123-4567
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#2E3A59] mb-2">
            <User className="inline h-4 w-4 mr-2 text-[#D4AF37]" />
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-[#2E3A59] focus:border-transparent transition-all duration-200"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#2E3A59] mb-2">
            <Mail className="inline h-4 w-4 mr-2 text-[#D4AF37]" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-[#2E3A59] focus:border-transparent transition-all duration-200"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#2E3A59] mb-2">
          <Phone className="inline h-4 w-4 mr-2 text-[#D4AF37]" />
          Phone (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-[#2E3A59] focus:border-transparent transition-all duration-200"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#2E3A59] mb-2">
          <MessageSquare className="inline h-4 w-4 mr-2 text-[#D4AF37]" />
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-[#2E3A59] focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Describe your legal issue in detail. The more information you provide, the better we can assist you."
        />
      </div>
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          required
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="mt-1 h-4 w-4 text-[#2E3A59] focus:ring-[#2E3A59] border-[#F5F5F5] rounded"
        />
        <label htmlFor="agreeToTerms" className="text-sm text-[#2E3A59]/80 leading-relaxed">
          I agree to the confidentiality terms and understand that this consultation request does not 
          create an attorney-client relationship. All communications are protected under attorney-client privilege.
        </label>
      </div>
      <button
        type="submit"
        disabled={!formData.agreeToTerms}
        className="w-full bg-[#D4AF37] !bg-[#D4AF37] hover:bg-[#2E3A59] disabled:bg-[#D4AF37]/50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
      >
        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        SEND REQUEST
      </button>
      <div className="bg-[#F5F5F5] p-4 rounded-lg">
        <p className="text-xs text-[#2E3A59]/60 leading-relaxed">
          <strong>Privacy Notice:</strong> Your information is protected under attorney-client privilege 
          and will never be shared with third parties. We comply with all state and federal privacy regulations. 
          By submitting this form, you consent to us contacting you about your legal matter.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;