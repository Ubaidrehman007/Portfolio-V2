import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ResumePreview } from "./ResumePreview";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Resume">
      <div className="space-y-8">
        <ResumePreview />

        <div className="flex gap-4">
          <a
            href="/resume/Ubaid-Rehman-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="secondary" size="md" className="w-full">
              Preview Resume
            </Button>
          </a>

          <a href="/resume/Ubaid-Rehman-Resume.pdf" download className="flex-1">
            <Button variant="primary" size="md" className="w-full">
              Download PDF
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
