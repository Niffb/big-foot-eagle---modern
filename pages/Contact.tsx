import React, { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll, .fade-in, .scale-in, .slide-left, .slide-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <article>
      {/* Hero */}
      <header className="pt-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Get in Touch</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-brand-black mb-6">Contact Us</h1>
            <p className="animate-on-scroll delay-2 text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you and discuss how we can support your nation's goals.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              {/* Company Info Box */}
              <div className="slide-left bg-brand-gray p-8 mb-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-gold flex items-center justify-center rounded-xl" aria-hidden="true">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-brand-black text-lg">Big Foot Eagle Consulting</h2>
                    <p className="text-gray-500 text-sm">Governance | Management | Advisory</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Walking alongside Nations to build capacity, governance strength, and sustainable futures.
                </p>
              </div>

              <h2 className="slide-left delay-1 text-2xl font-bold text-brand-black mb-6">Contact Information</h2>

              <address className="not-italic space-y-6">
                <div className="slide-left delay-2 flex gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center shrink-0 rounded-xl" aria-hidden="true">
                    <MapPin className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Address</h3>
                    <p className="text-gray-600">
                      101-1065 Portage Avenue<br />
                      Winnipeg, Manitoba R3G 0R8<br />
                      <span className="text-gray-400">Peguis First Nation</span>
                    </p>
                  </div>
                </div>

                <div className="slide-left delay-3 flex gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center shrink-0 rounded-xl" aria-hidden="true">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Phone</h3>
                    <a href="tel:2044714635" className="text-gray-600 hover:text-brand-red transition-colors">
                      204.471.4635
                    </a>
                  </div>
                </div>

                <div className="slide-left delay-4 flex gap-4">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center shrink-0 rounded-xl" aria-hidden="true">
                    <Mail className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Email</h3>
                    <a href="mailto:info@bigfooteagle.ca" className="text-gray-600 hover:text-brand-red transition-colors">
                      info@bigfooteagle.ca
                    </a>
                  </div>
                </div>
              </address>
            </div>

            {/* Form */}
            <div className="scale-in">
              <h2 className="text-2xl font-bold text-brand-black mb-8">Send a Message</h2>
              <form className="space-y-6" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 rounded-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 rounded-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 rounded-lg"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 rounded-lg"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 resize-none rounded-lg"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-brand-red text-white font-medium hover:bg-red-800 transition-colors btn-animate rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Contact;
