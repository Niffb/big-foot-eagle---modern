import React, { useEffect } from 'react';

const Treaty: React.FC = () => {
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

    document.querySelectorAll('.animate-on-scroll, .fade-in, .scale-in, .counter').forEach((el) => {
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
            <p className="animate-on-scroll text-brand-gold font-medium mb-2">Education</p>
            <h1 className="animate-on-scroll delay-1 text-4xl md:text-5xl font-bold text-brand-black mb-6">Treaty Relationships</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24" aria-labelledby="treaty-content">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="treaty-content" className="sr-only">About Treaties in Canada</h2>
          <p className="animate-on-scroll text-xl md:text-2xl text-brand-black leading-relaxed mb-8">
            Canada is covered by 96 Treaties: 69 Historic Treaties signed between 1701 and 1923, and 27 Modern Treaties negotiated since 1975.
          </p>

          <p className="animate-on-scroll delay-1 text-gray-600 leading-relaxed mb-12">
            These Nation to Nation agreements are living commitments that shape the relationships between Indigenous People, the Crown and Canada.
          </p>

          {/* Stats */}
          <dl className="grid grid-cols-3 gap-8 py-12 border-t border-b border-gray-200 mb-12" aria-label="Treaty statistics">
            <div className="counter text-center">
              <dt className="sr-only">Total Treaties</dt>
              <dd className="text-4xl font-bold text-brand-gold mb-2">96</dd>
              <dt className="text-gray-600">Total Treaties</dt>
            </div>
            <div className="counter delay-1 text-center">
              <dt className="sr-only">Historic Treaties</dt>
              <dd className="text-4xl font-bold text-brand-black mb-2">69</dd>
              <dt className="text-gray-600">Historic Treaties</dt>
            </div>
            <div className="counter delay-2 text-center">
              <dt className="sr-only">Modern Treaties</dt>
              <dd className="text-4xl font-bold text-brand-red mb-2">27</dd>
              <dt className="text-gray-600">Modern Treaties</dt>
            </div>
          </dl>

          <p className="fade-in text-gray-600 leading-relaxed">
            We recognize many Treaty obligations remain unfulfilled and this history continues to impact communities today. Bigfoot and the Eagle is committed to engaging with Indigenous partners in ways that are guided by their priorities, expertise, and vision for the future.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Treaty;
