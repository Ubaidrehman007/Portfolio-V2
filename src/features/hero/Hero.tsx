import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[var(--color-background)]
      "
    >
      <div
        className="
    mx-auto
    grid
    min-h-screen
    w-full
    max-w-7xl
    grid-cols-1
    items-center
    gap-20
    px-6
    pt-32
    pb-16
    lg:grid-cols-2
    lg:px-8
  "
      >
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}
