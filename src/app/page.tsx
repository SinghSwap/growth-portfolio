import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Achievements } from "@/components/achievements";
import { Tools } from "@/components/tools";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Achievements />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
