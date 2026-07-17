import softproLogo from "@/assets/images/experience/softpro-logo.png";

import { FadeUp, GlassCard } from "@/components/common";

import { EXPERIENCE } from "./constants/experience";

export function ExperienceCard() {
  return (
    <div className="mt-16">
      {EXPERIENCE.map((item, index) => (
        <FadeUp key={item.company} delay={index * 0.1}>
          <GlassCard className="p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
              {/* Left */}

              <div className="flex-1">
                <span
                  className="
                    rounded-full
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-400
                  "
                >
                  {item.duration}
                </span>

                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={softproLogo}
                    alt="Softpro India"
                    className="h-14 w-14 rounded-xl bg-white p-2"
                  />

                  <div>
                    <h3 className="text-3xl font-bold text-white">{item.role}</h3>

                    <p className="mt-1 text-slate-400">{item.company}</p>
                  </div>
                </div>

                <p className="mt-2 text-slate-500">📍 {item.location}</p>

                <p className="mt-8 max-w-2xl leading-8 text-slate-400">{item.description}</p>

                <div className="mt-10 space-y-4">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <span className="text-emerald-400">✔</span>

                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}

              <div className="w-full lg:max-w-sm">
                <GlassCard
                  className="
                    bg-[#0f172a]
                    p-6
                  "
                >
                  <h4 className="text-xl font-semibold text-white">Technologies Used</h4>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.technologies.map((tech) => (
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
                    ))}
                  </div>
                </GlassCard>

                <GlassCard
                  className="
                    mt-6
                    border-emerald-500/20
                    bg-emerald-500/10
                    p-6
                  "
                >
                  <p className="text-sm text-emerald-400">Achievement</p>

                  <h3 className="mt-2 text-3xl font-bold text-white">A++</h3>

                  <p className="mt-2 text-slate-300">
                    Successfully completed Industrial Training with outstanding performance.
                  </p>
                </GlassCard>
              </div>
            </div>
          </GlassCard>
        </FadeUp>
      ))}
    </div>
  );
}
