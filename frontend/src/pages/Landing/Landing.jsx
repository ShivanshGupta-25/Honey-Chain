import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/landing/Hero";
import HowItWorks from "../../components/landing/HowItWorks";
import Features from "../../components/landing/Features";
import Statistics from "../../components/landing/Statistics";
import CTA from "../../components/landing/CTA";

const Landing = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-20">

        {/* Hero Section */}
        <Hero />

        {/* How It Works */}
        <HowItWorks />

        {/* Features */}
        <Features />

        {/* Platform Statistics */}
        <Statistics />

        {/* Call To Action */}
        <CTA />

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default Landing;