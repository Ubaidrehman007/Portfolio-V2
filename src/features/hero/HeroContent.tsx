import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        text-center
        lg:text-left
      "
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          w-fit
          items-center
          rounded-full
          border
          border-emerald-500/20
          bg-emerald-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-emerald-400
          self-center
          lg:self-start
        "
      >
        ● Available for Opportunities
      </div>

      {/* Heading */}

      <h1
        className="
          mt-8
          font-heading
          text-5xl
          font-extrabold
          leading-tight
          text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        Ubaid{" "}
        <span
          className="
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-violet-500
            bg-clip-text
            text-transparent
          "
        >
          Rehman
        </span>
      </h1>

      {/* Title */}

      <h2
        className="
          mt-5
          text-2xl
          font-semibold
          text-slate-300
          sm:text-3xl
        "
      >
        Full Stack Java Developer
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        I build scalable backend systems using Java, Spring Boot, React and modern web technologies,
        while creating fast, responsive and user-focused digital experiences.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}
