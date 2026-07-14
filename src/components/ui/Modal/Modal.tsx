import { useEffect } from "react";
import type { ModalProps } from "./Modal.types";

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
       inset-0
        z-[999]
        bg-black/70
       backdrop-blur-lg
        p-4
        sm:p-8
       "
    >
      {/* Modal Wrapper */}

      <div
        className="
          flex
          min-h-full
          items-start
          justify-center
          py-8
        "
      >
        {/* Modal */}

        <div
          onClick={(e) => e.stopPropagation()}
          className="
            flex
            w-full
            max-w-4xl
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0f172a]
            shadow-[0_30px_80px_rgba(0,0,0,.55)]
          "
        >
          {/* Header */}

          <div
            className="
              sticky
              top-0
              z-20
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-[#0f172a]/95
              px-8
              py-6
              backdrop-blur-xl
            "
          >
            <h2 className="font-heading text-2xl font-bold text-white">{title}</h2>

            <button
              aria-label="Close Modal"
              onClick={onClose}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                text-slate-400
                transition-all
                duration-300
                hover:bg-white/10
                hover:text-white
              "
            >
              ✕
            </button>
          </div>

          {/* Content */}

          <div
            className="
              max-h-[calc(100vh-180px)]
              overflow-y-auto
              px-8
              py-8
            "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
