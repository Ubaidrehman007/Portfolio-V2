import { Navbar } from "@/features/navbar/components";
import { Hero } from "@/features/hero";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--color-background)]">
        <Hero />
      </main>
    </>
  );
}

export default App;
