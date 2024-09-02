import CallToAction from "./_components/CallToAction";
import Hero from "./_components/Hero";
import LogoTicker from "./_components/LogoTicker";
import Pricing from "./_components/Pricing";
import ProductShowcase from "./_components/ProductShowcase";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
