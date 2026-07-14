export function NavbarLogo() {
  return (
    <a href="#hero" aria-label="Go to hero section" className="inline-flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-lg">
        U
      </div>

      <div className="flex flex-col">
        <span className="font-heading text-lg font-bold tracking-tight text-white">Ubaid</span>

        <span className="text-xs text-slate-400">Full Stack Java Developer</span>
      </div>
    </a>
  );
}
