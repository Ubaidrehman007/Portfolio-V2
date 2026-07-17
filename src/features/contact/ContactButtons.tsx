import { useState } from "react";
import { ResumeModal } from "@/features/resume";
export function ContactButtons() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:urkhan556@gmail.com"
          className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-blue-700
          "
        >
          Send Email
        </a>

        <button
          onClick={() => setIsResumeOpen(true)}
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
            hover:bg-white/10
          "
        >
          Download Resume
        </button>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
