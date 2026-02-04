import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Governance: React.FC = () => {
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

    document.querySelectorAll('.animate-on-scroll, .fade-in, .scale-in, .slide-left, .slide-right, .line-animate').forEach((el) => {
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
            src={`${import.meta.env.BASE_URL}bigfoot.png`}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Services</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-white mb-6">Governance</h1>
            <p className="animate-on-scroll delay-2 text-xl text-gray-300 leading-relaxed">
              Strong governance is the foundation of a thriving Nation. We walk alongside leadership to build confidence and capacity.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 id="approach-heading" className="slide-left text-2xl font-bold text-brand-black mb-6">Our Approach</h2>
              <div className="slide-left delay-1 prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  From the moment Chief and Council are elected, they assume significant responsibilities – often with limited transition time, constrained resources, and immediate expectations from membership, community partners, and government agencies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our role is to walk alongside leadership, providing tools, training, and support that build confidence and capacity while respecting the authority and role of Chief and Council and the governance direction provided by the membership.
                </p>
              </div>
              <blockquote className="slide-left delay-2 mt-8 p-6 bg-brand-gray border-l-4 border-brand-gold">
                <p className="text-gray-600 italic">
                  "Thank you to Donny Smoke, Chief of Dakota Plains Wahpeton Nation and the community for sharing your vision of what could be with us."
                </p>
              </blockquote>
            </div>

            {/* Right */}
            <aside>
              <h2 className="slide-right text-2xl font-bold text-brand-black mb-6">Our Services</h2>
              <ul className="space-y-4" role="list">
                {[
                  "Comprehensive governance training and orientation for Chief and Council",
                  "Designing new governance structures and updates to existing governance structures",
                  "Financial literacy education and training",
                  "Organizational reviews and operational capacity assessments",
                  "Policy and procedure development and reviews"
                ].map((item, i) => (
                  <li key={i} className={`scale-in delay-${i + 1} flex gap-3`}>
                    <Check className="text-brand-gold shrink-0 mt-1" size={20} aria-hidden="true" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact-us" className="scale-in delay-4 inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-red text-white font-medium hover:bg-red-800 transition-colors btn-animate" aria-label="Get started with governance services">
                Get Started <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Governance;
