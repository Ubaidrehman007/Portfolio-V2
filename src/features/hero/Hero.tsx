import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[var(--color-background)]
      "
    >
      {/* Top Glow */}

      <div
        className="
          absolute
          left-[-180px]
          top-[-120px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/20
          blur-[120px]
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-150px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-600/20
          blur-[120px]
        "
      />

      {/* Main Container */}

      <div
        className="
          relative
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          grid-cols-1
          items-center
          gap-20
          px-6
          pt-32
          pb-20
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
