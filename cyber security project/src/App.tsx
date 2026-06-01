import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThreatsSection from "@/components/ThreatsSection";
import TipsSection from "@/components/TipsSection";
import PasswordChecker from "@/components/PasswordChecker";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <ThreatsSection />
      <TipsSection />
      <PasswordChecker />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
