import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Management: React.FC = () => {
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
            src={`${import.meta.env.BASE_URL}forest.png`}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Services</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-white mb-6">Management</h1>
            <p className="animate-on-scroll delay-2 text-xl text-gray-300 leading-relaxed">
              Supporting First Nation governments by taking on operational pressures, freeing up time and space for leadership.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Intro */}
          <div className="max-w-3xl mb-16">
            <p className="animate-on-scroll text-gray-600 leading-relaxed text-lg">
              First Nation, Inuit and Métis communities and organizations carry an enormous amount of responsibility. Managing programs, funding agreements, governance expectations, reporting requirements, and the day-to-day realities of serving members.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Accounting */}
            <section aria-labelledby="accounting-heading">
              <div className="scale-in">
                <h2 id="accounting-heading" className="text-2xl font-bold text-brand-black mb-6">Accounting Services</h2>
                <ul className="space-y-4" role="list">
                  {[
                    "Month end and year end checklists",
                    "Accounting for your funding agreement",
                    "Bank reconciliations and other reconciliations",
                    "Chart of Account maintenance",
                    "Accounting for loans and leases",
                    "Year end preparation, accruals, and process documentation"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-brand-gold shrink-0 mt-1" size={20} aria-hidden="true" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Management */}
            <section aria-labelledby="management-heading">
              <div className="scale-in delay-2">
                <h2 id="management-heading" className="text-2xl font-bold text-brand-black mb-6">Management Services</h2>
                <ul className="space-y-4" role="list">
                  {[
                    "Capacity development services",
                    "Proposal writing",
                    "Cash management strategies",
                    "Debt retirement strategies",
                    "Policy services",
                    "Organizational Chart development and implementation"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-brand-gold shrink-0 mt-1" size={20} aria-hidden="true" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Attribution */}
          <blockquote className="animate-on-scroll mt-16 p-6 bg-brand-gray border-l-4 border-brand-gold rounded-r-xl">
            <p className="text-gray-600 italic">
              "Thank you to Lynette Roulette, Executive Director, Sandy Bay Ojibway First Nation for your input, direction and sharing your wisdom with us."
            </p>
          </blockquote>

          <Link to="/contact-us" className="animate-on-scroll delay-1 inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-red text-white font-medium hover:bg-red-800 transition-colors btn-animate rounded-lg" aria-label="Get started with management services">
            Get Started <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Management;
