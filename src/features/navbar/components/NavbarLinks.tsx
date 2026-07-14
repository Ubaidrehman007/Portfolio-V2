import { NAVIGATION_LINKS } from "@/constants/navigation";

export function NavbarLinks() {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {NAVIGATION_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="
              group
              relative
              py-2
              text-sm
              font-medium
              text-slate-300
              transition-colors
              duration-300
              hover:text-white
              focus:outline-none
              focus-visible:text-white
            "
          >
            {link.label}

            <span
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                origin-left
                scale-x-0
                rounded-full
                bg-blue-500
                transition-transform
                duration-300
                ease-out
                group-hover:scale-x-100
                group-focus-visible:scale-x-100
              "
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
