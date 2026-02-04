import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Governance from './pages/Governance';
import Management from './pages/Management';
import Advisory from './pages/Advisory';
import Reconciliation from './pages/Reconciliation';
import Treaty from './pages/Treaty';
import Staff from './pages/Staff';
import Contact from './pages/Contact';

// SEO page titles and meta descriptions
const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Big Foot and Eagle Consulting | Indigenous Governance & Management Services',
    description: 'Expert consulting services for First Nation governments and Indigenous organizations. Specializing in governance, management, and advisory services to build capacity and strengthen sovereign nations.'
  },
  '/governance': {
    title: 'Governance Services | Big Foot and Eagle Consulting',
    description: 'Comprehensive governance training, policy development, and organizational reviews for First Nation governments. Build strong foundations for self-determination.'
  },
  '/management': {
    title: 'Management Services | Big Foot and Eagle Consulting',
    description: 'Expert accounting and management services for Indigenous organizations. Month-end checklists, funding agreements, capacity development, and more.'
  },
  '/advisory': {
    title: 'Advisory Services | Big Foot and Eagle Consulting',
    description: 'Strategic advisory services including fractional CFO, budget development, audit preparation, and strategic planning for First Nation communities.'
  },
  '/reconciliation-statement': {
    title: 'Reconciliation Statement | Big Foot and Eagle Consulting',
    description: 'Our commitment to Truth and Reconciliation. Learn about our approach to mandatory reconciliation education and bridging Indigenous and western governance.'
  },
  '/treaty-relationships': {
    title: 'Treaty Relationships | Big Foot and Eagle Consulting',
    description: 'Understanding Canada\'s 96 Treaties and their importance. Education on historic and modern treaties and Nation to Nation agreements.'
  },
  '/our-staff': {
    title: 'About Us | Big Foot and Eagle Consulting',
    description: 'Meet the team dedicated to serving First Nation governments and Indigenous organizations with expertise in governance and financial management.'
  },
  '/contact-us': {
    title: 'Contact Us | Big Foot and Eagle Consulting',
    description: 'Get in touch with Big Foot and Eagle Consulting. Located in Winnipeg, Manitoba. Let\'s discuss how we can support your governance and management goals.'
  }
};

// Scroll to top and update page title on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update page title and meta description
    const meta = pageMeta[pathname] || pageMeta['/'];
    document.title = meta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (ogDescription) ogDescription.setAttribute('content', meta.description);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
    if (twitterDescription) twitterDescription.setAttribute('content', meta.description);

  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/management" element={<Management />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/reconciliation-statement" element={<Reconciliation />} />
            <Route path="/treaty-relationships" element={<Treaty />} />
            <Route path="/our-staff" element={<Staff />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
