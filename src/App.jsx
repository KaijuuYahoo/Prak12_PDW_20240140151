import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoPlayground from './components/DemoPlayground';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background grids and abstract glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-20"></div>
      
      {/* Navbar Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Features />
        <DemoPlayground />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
