import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Advisory: React.FC = () => {
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
      <header className="relative pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}eagle.png`}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Services</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-white mb-6">Advisory</h1>
            <p className="animate-on-scroll delay-2 text-xl text-gray-300 leading-relaxed">
              Support grounded in listening, respect, and genuine understanding as you move toward your community-defined goals.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 className="slide-left text-2xl font-bold text-brand-black mb-6">Our Approach</h2>
              <p className="slide-left delay-1 text-gray-600 leading-relaxed mb-6">
                Our advisory approach focuses on walking alongside leadership and administration – offering practical guidance, professional insight, and steady partnership as you move toward your community defined goals.
              </p>
              <blockquote className="slide-left delay-2 mt-8 p-6 bg-brand-gray border-l-4 border-brand-gold">
                <p className="text-gray-600 italic">
                  "Credit to Stacey Longclaws, CPA, CAFM, for your guidance, support and advice in shaping our approach to advisory services."
                </p>
              </blockquote>
            </div>

            {/* Right */}
            <aside>
              <h2 className="slide-right text-2xl font-bold text-brand-black mb-6">What We Offer</h2>
              <ul className="space-y-4" role="list">
                {[
                  "Developing and supporting the implementation of Management Action Plans (MAPs)",
                  "Developing and supporting the implementation of Capacity Development Plans",
                  "Fractional CFO Services",
                  "Developing and executing debt servicing plans",
                  "General Assessment Report analysis and developing risk management strategies",
                  "Budget development, monitoring and variance analysis",
                  "Audit preparation process design, including readiness assessments",
                  "Strategic Planning facilitation services and implementation services"
                ].map((item, i) => (
                  <li key={i} className={`scale-in delay-${Math.min(i + 1, 4)} flex gap-3`}>
                    <Check className="text-brand-gold shrink-0 mt-1" size={20} aria-hidden="true" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact-us" className="scale-in delay-4 inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-red text-white font-medium hover:bg-red-800 transition-colors btn-animate" aria-label="Get started with advisory services">
                Get Started <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Advisory;
