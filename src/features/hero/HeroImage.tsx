import profile from "@/assets/images/profile.png";
import { motion } from "framer-motion";

import { heroImageVariants, floatingAnimation, glowAnimation } from "@/lib/motion";

import { useParallax } from "@/hooks";

export function HeroImage() {
  const { x, y } = useParallax(25);

  return (
    <motion.div
      variants={heroImageVariants}
      initial="hidden"
      animate="visible"
      className="
        relative
        order-first
        flex
        justify-center
        lg:order-last
      "
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {/* Glow */}

      <motion.div
        animate={glowAnimation}
        style={{
          transform: `translate(${x * 0.5}px, ${y * 0.5}px)`,
        }}
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-500/20
          blur-[80px]

          sm:h-[420px]
          sm:w-[420px]

          lg:h-[520px]
          lg:w-[520px]
        "
      />

      {/* Image Card */}

      <motion.div
        animate={floatingAnimation}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          p-3
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(59,130,246,.20)]
        "
      >
        <img
          src={profile}
          alt="Ubaid Rehman"
          className="
            h-[320px]
            w-[240px]
            rounded-[24px]
            object-cover

            sm:h-[420px]
            sm:w-[310px]

            lg:h-[620px]
            lg:w-[430px]
          "
        />
      </motion.div>

      {/* Left Badge */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-2
          top-8
          rounded-xl
          border
          border-white/10
          bg-slate-900/80
          px-4
          py-2
          text-sm
          text-white
          backdrop-blur-xl

          lg:-left-8
        "
      >
        ☕ Java Developer
      </motion.div>

      {/* Right Badge */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-2
          bottom-10
          rounded-xl
          border
          border-white/10
          bg-slate-900/80
          px-4
          py-2
          text-sm
          text-white
          backdrop-blur-xl

          lg:-right-8
        "
      >
        🚀 10+ Projects
      </motion.div>
    </motion.div>
  );
}
