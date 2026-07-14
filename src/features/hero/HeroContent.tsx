import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/lib/motion";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        flex
        flex-col
        justify-center
        text-center
        lg:text-left
      "
    >
      {/* Badge */}

      <motion.div
        variants={fadeUpVariants}
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
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={fadeUpVariants}
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
      </motion.h1>

      {/* Title */}

      <motion.h2
        variants={fadeUpVariants}
        className="
          mt-5
          text-2xl
          font-semibold
          text-slate-300
          sm:text-3xl
        "
      >
        Full Stack Java Developer
      </motion.h2>

      {/* Description */}

      <motion.p
        variants={fadeUpVariants}
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
      </motion.p>

      <motion.div variants={fadeUpVariants}>
        <HeroButtons />
      </motion.div>

      <motion.div variants={fadeUpVariants}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}
