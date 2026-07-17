import { GlassCard, Reveal } from "@/components/common";

import { ContactButtons } from "./ContactButtons";
import { ContactCards } from "./ContactCards";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContactHeader />

          <div
            className="
              mt-16
              grid
              items-start
              gap-10
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* LEFT */}

            <div>
              <ContactCards />

              <ContactButtons />

              <GlassCard
                className="
                  mt-8
                  border-emerald-500/20
                  bg-emerald-500/10
                  p-6
                "
              >
                <h3 className="text-xl font-bold text-white">Availability</h3>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />

                    <span className="text-slate-300">Open to Full-Time Opportunities</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />

                    <span className="text-slate-300">Internship</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />

                    <span className="text-slate-300">Freelance Projects</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400">Typical response time</p>

                  <h4 className="mt-2 text-2xl font-bold text-white">Within 24 Hours</h4>
                </div>
              </GlassCard>
            </div>

            {/* RIGHT */}

            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
