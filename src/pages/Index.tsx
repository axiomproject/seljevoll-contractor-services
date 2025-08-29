import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
