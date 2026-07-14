import { Button } from "@/components/ui/Button";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <a href="#projects">
        <Button variant="primary" size="lg">
          Explore Projects
        </Button>
      </a>

      <a href="#contact">
        <Button variant="secondary" size="lg">
          Hire Me
        </Button>
      </a>
    </div>
  );
}
