import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
