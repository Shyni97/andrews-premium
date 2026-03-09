import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import DividerSection from "@/components/DividerSection";
import QualitySection from "@/components/QualitySection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AndrewsDifference from "@/components/AndrewsDifference";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DividerSection />
      <QualitySection />
      <StatsSection />
      <WhyChooseUs />
      <AndrewsDifference />
      <Footer />
    </main>
  );
}
