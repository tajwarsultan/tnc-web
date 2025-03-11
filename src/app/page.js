import Header from "./components/header";
import HeroSection from "./components/hero-section";
import PartnersBanner from "./components/partners-banner";
import DiscoverSection from "./components/discover-section";
import EmpoweringSection from "./components/empowering-section";
import WhyChooseSection from "./components/why-choose-section";
import ServicesSection from "./components/services-section"
import PricingSection from "./components/pricing-section"
import FaqSection from "./components/faq-section"
import CtaSection from "./components/cta-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2040] text-white overflow-hidden">
      <Header />
      <HeroSection />
      <PartnersBanner />
      <DiscoverSection />
      <EmpoweringSection />
      <WhyChooseSection  />
      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
