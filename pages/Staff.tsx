import React, { useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

const Staff: React.FC = () => {
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
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Leadership</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-brand-black mb-6">About Us</h1>
            <p className="animate-on-scroll delay-2 text-xl text-gray-600 leading-relaxed">
              Meet the team dedicated to serving First Nation governments and Indigenous organizations.
            </p>
          </div>
        </div>
      </header>

      {/* Profile */}
      <section className="py-16 lg:py-24" aria-labelledby="team-member-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="slide-right mb-6">
            <h2 id="team-member-heading" className="text-3xl font-bold text-brand-black">Glenn Fleetwood</h2>
            <p className="text-gray-500 mt-1">CPA, CAFM, CAPA, CIL, FNI.Dir.</p>
            <p className="text-brand-gold font-semibold mt-2">President</p>
          </div>

          <div className="slide-right delay-1 flex flex-wrap gap-4 mb-8">
            <a href="mailto:glenn@bigfooteagle.ca" className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-red transition-colors" aria-label="Email Glenn Fleetwood">
              <Mail size={18} aria-hidden="true" />
              glenn@bigfooteagle.ca
            </a>
            <a href="tel:2044714635" className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-red transition-colors" aria-label="Call Glenn Fleetwood">
              <Phone size={18} aria-hidden="true" />
              204.471.4635
            </a>
          </div>

          <div className="slide-right delay-2 prose max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              For more than 14 years Glenn has dedicated his career to serving First Nation governments and Indigenous organizations. His experience includes senior management roles such as those of Chief Financial Officer and Chief Operating Officer, as well as providing advisory services with two accounting firms, one a national firm, the other with a more regional focus. Through this work, Glenn has gained a deep appreciation for the privilege of supporting First Nation, Inuit, and Métis communities as a non-Indigenous practitioner.
            </p>
            <p>
              Glenn specializes in governance, financial management, and operational leadership within First Nation and Indigenous contexts. He provides client directed support rooted in partnership, relationships, humility and respect. His work focuses on strengthening capacity with Chief and Council, Boards of Directors, and operational teams, ensuring organizations have the professional expertise they need to achieve their goals.
            </p>
          </div>

          {/* Qualifications */}
          <aside className="scale-in delay-3 mt-10 p-6 bg-brand-gray" aria-labelledby="qualifications-heading">
            <h3 id="qualifications-heading" className="font-semibold text-brand-black mb-4">Professional Qualifications</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600" role="list">
              {[
                "Chartered Professional Accountant (CPA)",
                "Certified Aboriginal Financial Manager (CAFM)",
                "Certified Aboriginal Professional Administrator (CAPA)",
                "Certified Indigenous Leadership (CIL)",
                "First Nations and Indigenous Board Governance (FNI.Dir.)",
                "Certified in Public Sector Accounting Standards"
              ].map((qual, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 shrink-0" aria-hidden="true"></span>
                  {qual}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </article>
  );
};

export default Staff;
