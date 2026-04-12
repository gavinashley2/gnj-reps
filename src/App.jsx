import React from 'react';
import gnjLogo from '/gnj-logo.png';

function Header() {
  return (
    <header className="bg-navy text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img src={gnjLogo} alt="GnJ Reps Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold">GnJ Reps</span>
        </div>
        <span className="italic text-sm mt-2 md:mt-0">
          Support for self-represented individuals in Ontario courts
        </span>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-navy text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Empowering Your Voice in Ontario Courts
      </h1>
      <p className="mb-8 max-w-2xl mx-auto">
        GnJ Reps provides guidance, organization and support so you can confidently represent yourself.
      </p>
      <a
        href="#contact"
        className="bg-gold text-navy font-semibold py-3 px-6 rounded-md hover:opacity-90 transition"
      >
        Get Support Now
      </a>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: 'Organization',
      description: 'We help you organize your documents and evidence efficiently.',
    },
    {
      title: 'Document Support',
      description: 'Assistance with drafting and reviewing your court documents.',
    },
    {
      title: 'Preparation',
      description: 'Coaching to help you prepare for your court appearances.',
    },
  ];
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((srv, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-navy">{srv.title}</h3>
            <p className="text-gray-700">{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PainPointsSection() {
  const points = [
    'Feeling overwhelmed by court procedures',
    'Confused about necessary documents',
    'Unsure how to organize your evidence',
  ];
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Common Challenges</h2>
      <ul className="max-w-3xl mx-auto space-y-4">
        {points.map((pt, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-3 h-3 bg-gold rounded-full mt-2 mr-3"></span>
            <p className="text-gray-800">{pt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="text-center space-y-2">
        <p className="text-gray-700">
          Email:
          <a href="mailto:info@gnjreps.ca" className="text-navy underline ml-2">
            info@gnjreps.ca
          </a>
        </p>
        <p className="text-gray-700">
          Website:
          <a href="https://gnjreps.ca" className="text-navy underline ml-2">
            www.gnjreps.ca
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white py-8 px-4">
      <div className="max-w-5xl mx-auto text-center text-sm">
        <p className="mb-2">
          GnJ Reps provides support for self-represented individuals. It is not a law firm and does not provide legal representation.
        </p>
        <p>&copy; {new Date().getFullYear()} GnJ Reps. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PainPointsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
