import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo/SEO";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
import SliderComponent from "./components/homepage/SliderComponent";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
function App() {
  const location = useLocation();
  
    useEffect(() => {
      const allowedPaths = ['/dashboard/developer', '/dashboard/business', '/dashboard/marketing', '/dashboard/photography'];
      
      if (!allowedPaths.includes(location.pathname)) {
        clearEditingState();
      }
    }, [location]);
  
    const clearEditingState = () => {
      localStorage.removeItem('isEditing');
    };
  return (
    <HelmetProvider>
      <SEO
        title="Showcase - Portfolio Builder for Creatives"
        description="Showcase is the ultimate portfolio builder that allows you to create, customize, and share your professional portfolio with ease. Perfect for developers, designers, and creatives, Showcase offers a variety of customizable templates and features to highlight your skills, achievements, and work experiences."
        keywords="portfolio builder, creative portfolio, developer portfolio, designer portfolio, portfolio templates, showcase, portfolio customization, online portfolio, portfolio tools"
        url="https://your-website-url.com"
        image="/Showcase.png"
      />
      <header>
        <NavBarComponent />
      </header>
      <main className="3xl:w-[2026px] 3xl:mx-auto">
        <HeroSection />
        <SliderComponent/>
        <TemplatesSection />
        <FeatureSection />
        <OurTeamSection />
        <ContactSection />
      </main>
      <footer className="3xl:w-[2026px] 3xl:mx-auto">
      <FooterSection />
      </footer>
      <ScrollToTopButton />
      <ToastContainer />
    </HelmetProvider>
    
  );
}

export default App;
