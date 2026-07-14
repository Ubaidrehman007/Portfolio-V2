import profile from "@/assets/images/profile.png";

export function HeroImage() {
  return (
    <div className="relative hidden items-center justify-center lg:flex">
      {/* Background Glow */}

      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-500/15
          blur-[120px]
        "
      />

      {/* Main Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(59,130,246,.20)]
        "
      >
        {/* Gradient Border */}

        <div
          className="
            absolute
            inset-0
            rounded-[40px]
            bg-gradient-to-br
            from-blue-500/20
            via-transparent
            to-cyan-500/20
            pointer-events-none
          "
        />

        {/* Image */}

        <img
          src={profile}
          alt="Ubaid Rehman"
          className="
            relative
            z-10
            h-[620px]
            w-[430px]
            rounded-[28px]
            object-cover
          "
        />
      </div>

      {/* Floating Badge */}

      <div
        className="
          absolute
          left-[-20px]
          top-12
          rounded-2xl
          border
          border-white/10
          bg-slate-900/80
          px-5
          py-3
          backdrop-blur-xl
          shadow-xl
        "
      >
        <p className="text-xs uppercase tracking-wider text-slate-400">Experience</p>

        <h3 className="mt-1 text-lg font-bold text-white">Java Developer</h3>
      </div>

      {/* Floating Badge */}

      <div
        className="
          absolute
          bottom-14
          right-[-25px]
          rounded-2xl
          border
          border-white/10
          bg-slate-900/80
          px-5
          py-3
          backdrop-blur-xl
          shadow-xl
        "
      >
        <p className="text-xs uppercase tracking-wider text-slate-400">Projects</p>

        <h3 className="mt-1 text-lg font-bold text-white">10+</h3>
      </div>
    </div>
  );
}
