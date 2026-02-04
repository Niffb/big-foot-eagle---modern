import React, { useEffect } from 'react';

const Reconciliation: React.FC = () => {
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

    document.querySelectorAll('.animate-on-scroll, .fade-in, .scale-in').forEach((el) => {
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
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-black/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Our Commitment</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-white mb-6">Reconciliation Statement</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="animate-on-scroll text-xl text-brand-black leading-relaxed mb-8">
              As part of our commitment to Truth and Reconciliation Call to Action 92, Bigfoot and the Eagle participates in mandatory reconciliation and historical education.
            </p>

            <p className="animate-on-scroll delay-1 text-gray-600 leading-relaxed mb-8">
              This includes learning about the Residential School System, Day Schools, the Sixties Scoop, Treaties, Treaty rights, and the constitutional protections found in sections 25 and 35 of the Constitution Act, 1982. We recognize that learning is ongoing, and that understanding the impacts of colonial systems requires continual reflection and humility.
            </p>

            <aside className="scale-in delay-2 p-6 bg-brand-gray border-l-4 border-brand-gold my-8">
              <p className="text-brand-black leading-relaxed">
                Blending Indigenous and western governance structures bridges worldviews, adding value through creating opportunities for partnerships. This is how we honour Truth and Reconciliation Call to Action 42.
              </p>
            </aside>
          </div>

          {/* Quote */}
          <figure className="animate-on-scroll my-16 py-12 border-t border-b border-gray-200 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-brand-black mb-6">
              "Treaty envisioned us paddling a river together as equals."
            </blockquote>
            <figcaption className="text-brand-gold font-medium">
              — Cadmus Delorme, Cowessess First Nation
            </figcaption>
          </figure>

          <aside className="fade-in p-6 bg-brand-gray border-l-4 border-brand-gold">
            <p className="text-gray-600 italic">
              "Thank you to Chris Berthelette, Metis from Grand Rapids, MB for your encouragement, sharing your wisdom and your guidance."
            </p>
          </aside>
        </div>
      </section>
    </article>
  );
};

export default Reconciliation;
