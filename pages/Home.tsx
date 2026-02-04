import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, FileText } from 'lucide-react';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll, .fade-in, .scale-in, .slide-left, .slide-right, .line-animate, .counter, .img-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[600px] flex items-center" aria-labelledby="hero-heading">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Sovereign Nations
            </h1>
            <p className="animate-on-scroll delay-1 text-xl text-gray-300 leading-relaxed mb-8">
              We partner with Indigenous communities to strengthen governance, build capacity, and create sustainable futures rooted in traditional values and modern strategy.
            </p>
            <div className="animate-on-scroll delay-2 flex flex-wrap gap-4">
              <Link to="/contact-us" className="btn-animate inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-medium hover:bg-red-800 transition-colors rounded-lg" aria-label="Get in touch with Big Foot Eagle Consulting">
                Get in Touch
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/governance" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-brand-black transition-colors rounded-lg" aria-label="View our consulting services">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-12">
            <h2 id="services-heading" className="animate-on-scroll text-3xl font-bold text-brand-black mb-4">What We Do</h2>
            <div className="line-animate h-1 bg-brand-gold mb-4" aria-hidden="true"></div>
            <p className="animate-on-scroll delay-1 text-gray-600 max-w-2xl">
              We provide expert consulting services designed to support First Nation governments and Indigenous organizations.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/governance" className="scale-in delay-1 group p-8 border border-gray-200 hover:border-brand-gold hover-lift relative overflow-hidden bg-white rounded-2xl" aria-label="Learn more about our Governance services">
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <img src={`${import.meta.env.BASE_URL}bigfoot.png`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <Shield className="text-brand-gold mb-4" size={32} aria-hidden="true" />
                <h3 className="text-xl font-semibold text-brand-black mb-3">Governance</h3>
                <p className="text-gray-600 mb-4">
                  Structuring constitutions, policies, and laws that support true self-determination and effective leadership.
                </p>
                <span className="inline-flex items-center gap-1 text-brand-red font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link to="/management" className="scale-in delay-2 group p-8 border border-gray-200 hover:border-brand-gold hover-lift relative overflow-hidden bg-white rounded-2xl" aria-label="Learn more about our Management services">
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <img src={`${import.meta.env.BASE_URL}forest.png`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <Users className="text-brand-gold mb-4" size={32} aria-hidden="true" />
                <h3 className="text-xl font-semibold text-brand-black mb-3">Management</h3>
                <p className="text-gray-600 mb-4">
                  Expert advisory for administration, finance, and human resource development to build internal capacity.
                </p>
                <span className="inline-flex items-center gap-1 text-brand-red font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link to="/advisory" className="scale-in delay-3 group p-8 border border-gray-200 hover:border-brand-gold hover-lift relative overflow-hidden bg-white rounded-2xl" aria-label="Learn more about our Advisory services">
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <img src={`${import.meta.env.BASE_URL}eagle.png`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <FileText className="text-brand-gold mb-4" size={32} aria-hidden="true" />
                <h3 className="text-xl font-semibold text-brand-black mb-3">Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Strategic planning, financial management, and operational support tailored to your community's needs.
                </p>
                <span className="inline-flex items-center gap-1 text-brand-red font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-brand-gray" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="img-reveal overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=1200"
                alt="Team members collaborating on Indigenous governance strategy"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <article>
              <h2 id="about-heading" className="slide-right text-3xl font-bold text-brand-black mb-6">Walking the Path Together</h2>
              <p className="slide-right delay-1 text-gray-600 leading-relaxed mb-6">
                We believe that true prosperity comes from a balance of economic development, cultural integrity, and sovereign governance. Our team is dedicated to building capacity within nations, not just consulting for them.
              </p>
              <p className="slide-right delay-2 text-gray-600 leading-relaxed mb-8">
                With over 14 years of experience serving First Nation governments and Indigenous organizations, we bring deep expertise and a commitment to partnership, humility, and respect.
              </p>
              <Link to="/our-staff" className="slide-right delay-3 inline-flex items-center gap-2 text-brand-red font-medium hover:gap-3 transition-all" aria-label="Meet our leadership team">
                Meet our team <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-200" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-6">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '14+', label: 'Years Experience' },
              { value: '100%', label: 'Indigenous Focus' },
              { value: '96', label: 'Treaties in Canada' },
              { value: 'CPA', label: 'Certified Team' }
            ].map((stat, i) => (
              <div key={i} className={`counter delay-${i + 1}`}>
                <dt className="text-4xl font-bold text-brand-gold mb-2">{stat.value}</dt>
                <dd className="text-gray-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="animate-on-scroll text-3xl md:text-4xl font-bold mb-6">Ready to strengthen your nation?</h2>
          <p className="animate-on-scroll delay-1 text-gray-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can support your governance and management goals.
          </p>
          <Link to="/contact-us" className="animate-on-scroll delay-2 btn-animate inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-semibold hover:bg-yellow-600 transition-colors rounded-lg" aria-label="Start a conversation about your nation's needs">
            Start a Conversation
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
