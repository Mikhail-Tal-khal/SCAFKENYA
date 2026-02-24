import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Pillars } from "@/components/pillars";
import { Impact } from "@/components/impact";
import { Programs } from "@/components/programs";
import { DonateSection } from "@/components/donate-section";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Pillars />
      <Impact />
      <Programs />
      <DonateSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
