import { Navbar } from "@/features/navbar/components";
import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Projects } from "@/features/projects";
import { Skills } from "@/features/skills";
import { Experience } from "@/features/experience";
import { Contact } from "@/features/contact";
function App() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--color-background)]">
        <Hero />
      </main>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
