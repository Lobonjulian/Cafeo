import BeneficiosSection from "./components/section/BeneficiosSection";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeroSection from "./components/HeroSection";
import PasosSection from "./components/section/PasosSection";
import ProductoSection from "./components/section/ProductoSection";
import RecompensaSection from "./components/section/RecompensaSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <PasosSection />
        <ProductoSection />
        <BeneficiosSection />
        <RecompensaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
