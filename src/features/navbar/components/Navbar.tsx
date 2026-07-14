import { NavbarActions } from "./NavbarActions";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarLogo } from "./NavbarLogo";
import { MobileMenu } from "./MobileMenu";
import { ResumeModal } from "@/features/resume";

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-6 z-[100] w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6">
      <nav
        aria-label="Primary Navigation"
        className="
          flex
          h-[72px]
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          sm:px-8
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <NavbarLogo />

        {/* Desktop Navigation */}
        <NavbarLinks />

        {/* Desktop Resume Button */}
        <NavbarActions />

        {/* Mobile Navigation */}
        <MobileMenu />
      </nav>
    </header>
  );
}
