import { useState } from "react";
import { Menu, X } from "lucide-react";

import { NAVIGATION_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { ResumeModal } from "@/features/resume";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResumeClick = () => {
    setIsOpen(false);

    setTimeout(() => {
      setIsResumeOpen(true);
    }, 250);
  };

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        aria-label="Open Menu"
        onClick={() => setIsOpen(true)}
        className="
          flex
          lg:hidden
          items-center
          justify-center
          rounded-xl
          p-2
          text-white
          transition-all
          duration-300
          hover:bg-white/10
        "
      >
        <Menu size={28} />
      </button>

      {/* Drawer */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/70
            backdrop-blur-md
          "
        >
          {/* Backdrop */}

          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Drawer */}

          <div
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-[300px]
              flex-col
              border-l
              border-white/10
              bg-[#0f172a]
              p-6
              shadow-2xl
            "
          >
            {/* Header */}

            <div className="mb-10 flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-white">Menu</h2>

              <button
                aria-label="Close Menu"
                onClick={() => setIsOpen(false)}
                className="
                  rounded-lg
                  p-2
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}

            <nav className="flex flex-col gap-6">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-lg
                    font-medium
                    text-slate-300
                    transition-colors
                    duration-300
                    hover:text-blue-400
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Resume Button */}

            <div className="mt-auto">
              <Button variant="primary" size="md" className="w-full" onClick={handleResumeClick}>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
