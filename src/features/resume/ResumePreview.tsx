import profile from "@/assets/images/profile.png";

export function ResumePreview() {
  return (
    <div className="space-y-8">
      {/* Profile */}

      <div className="flex flex-col items-center text-center">
        <img
          src={profile}
          alt="Ubaid Rehman"
          className="
            h-36
            w-36
            rounded-full
            border-4
            border-blue-500/40
            object-cover
            shadow-[0_0_35px_rgba(59,130,246,.25)]
          "
        />

        <h2 className="mt-5 font-heading text-3xl font-bold text-white">Ubaid Rehman</h2>

        <p className="mt-2 text-slate-400">Full Stack Java Developer</p>

        <span
          className="
            mt-4
            rounded-full
            bg-emerald-500/15
            px-4
            py-2
            text-sm
            font-medium
            text-emerald-400
          "
        >
          ● Available for Opportunities
        </span>
      </div>

      {/* Highlights */}

      <div className="grid gap-4">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <h3 className="font-semibold text-white">🎓 Education</h3>

          <p className="mt-1 text-slate-400">B.Tech Computer Science Engineering</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <h3 className="font-semibold text-white">💼 Experience</h3>

          <p className="mt-1 text-slate-400">Java Developer Intern — Softpro India</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <h3 className="font-semibold text-white">🚀 Featured Project</h3>

          <p className="mt-1 text-slate-400">Testiva — Online Examination System</p>
        </div>
      </div>

      {/* Tech Stack */}

      <div>
        <h3 className="mb-4 font-semibold text-white">Tech Stack</h3>

        <div className="flex flex-wrap gap-3">
          {["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Git"].map(
            (tech) => (
              <span
                key={tech}
                className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                text-blue-300
              "
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Contact */}

      <div>
        <h3 className="mb-4 font-semibold text-white">Connect</h3>

        <div className="grid gap-4">
          {/* Email */}

          <a
            href="mailto:urkhan556@gmail.com"
            className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-4
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-slate-800
        hover:-translate-y-1
      "
          >
            <div>
              <h4 className="font-semibold text-white">📧 Email</h4>

              <p className="text-slate-400">urkhan556@gmail.com</p>
            </div>

            <span className="text-blue-400">→</span>
          </a>

          {/* Phone */}

          <a
            href="tel:+919772255268"
            className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-4
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-slate-800
        hover:-translate-y-1
      "
          >
            <div>
              <h4 className="font-semibold text-white">📱 Phone</h4>

              <p className="text-slate-400">+91 9772255268</p>
            </div>

            <span className="text-blue-400">→</span>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/ubaid-rehman-9a5470269"
            target="_blank"
            rel="noopener noreferrer"
            className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-4
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-slate-800
        hover:-translate-y-1
      "
          >
            <div>
              <h4 className="font-semibold text-white">💼 LinkedIn</h4>

              <p className="text-slate-400">linkedin.com/in/ubaid-rehman</p>
            </div>

            <span className="text-blue-400">↗</span>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/Ubaidrehman007"
            target="_blank"
            rel="noopener noreferrer"
            className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-4
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-slate-800
        hover:-translate-y-1
      "
          >
            <div>
              <h4 className="font-semibold text-white">💻 GitHub</h4>

              <p className="text-slate-400">github.com/Ubaidrehman007</p>
            </div>

            <span className="text-blue-400">↗</span>
          </a>

          {/* Location */}

          <div
            className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-4
      "
          >
            <div>
              <h4 className="font-semibold text-white">📍 Location</h4>

              <p className="text-slate-400">Lucknow, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 text-center text-sm text-slate-500">
        Updated July 2026 • PDF Resume
      </div>
    </div>
  );
}
