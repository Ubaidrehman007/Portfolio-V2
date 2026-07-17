import { useState } from "react";

import { FadeUp, GlassCard } from "@/components/common";

import { FEATURED_PROJECT } from "./constants/projects";
import { PROJECT_IMAGES } from "./constants/screenshots";

export function FeaturedProject() {
  const [activeImage, setActiveImage] = useState(PROJECT_IMAGES[1]);

  return (
    <GlassCard className="p-8 lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT */}
        <FadeUp>
          <div>
            <h3 className="text-4xl font-bold text-white">{FEATURED_PROJECT.title}</h3>

            <p className="mt-3 text-xl text-blue-400">{FEATURED_PROJECT.subtitle}</p>

            <p className="mt-6 leading-8 text-slate-400">{FEATURED_PROJECT.description}</p>

            <div className="mt-8 space-y-3">
              {FEATURED_PROJECT.features.slice(0, 4).map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-slate-300">
                  <span className="text-emerald-400">✔</span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {FEATURED_PROJECT.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-blue-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FEATURED_PROJECT.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                "
              >
                Live Demo
              </a>

              <a
                href={FEATURED_PROJECT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/10
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeUp>

        {/* RIGHT */}
        <FadeUp delay={0.2}>
          <div>
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#0b1220]
                shadow-2xl
              "
            >
              {/* Browser Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  bg-[#111827]
                  px-5
                  py-3
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />

                  <span className="h-3 w-3 rounded-full bg-yellow-500" />

                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="text-xs text-slate-400">testiva.onrender.com</span>

                <div className="w-12" />
              </div>

              {/* Screenshot */}
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="
                  h-[220px]
                  w-full
                  object-contain
                  bg-[#0b1220]
                  transition-all
                  duration-500

                  sm:h-[260px]
                  md:h-[300px]
                  lg:h-[340px]
                "
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {PROJECT_IMAGES.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(image)}
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1

                    ${
                      activeImage.id === image.id
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-slate-400 hover:bg-white/10"
                    }
                  `}
                >
                  {image.title}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </GlassCard>
  );
}
