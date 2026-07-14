import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { ResumeModal } from "@/features/resume";

export function NavbarActions() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex">
        <Button variant="primary" size="md" onClick={() => setIsResumeOpen(true)}>
          Download Resume
        </Button>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
