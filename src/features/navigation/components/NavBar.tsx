import { FC, useEffect, useState } from "react";
import { FiBriefcase, FiHome, FiMail, FiUser } from "react-icons/fi";
import { NAV_ITEMS, type NavIcon } from "../data/items.data";

const iconClassName = "h-[1.45rem] w-[1.45rem]";

const NAV_ICONS: Record<NavIcon, typeof FiHome> = {
  home: FiHome,
  user: FiUser,
  briefcase: FiBriefcase,
  mail: FiMail,
};

const NavBar: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className="
        fixed bottom-8 left-1/2 -translate-x-1/2
        flex items-center justify-center gap-1 rounded-3xl border border-white/15
        bg-[rgba(10,10,10,0.45)] p-1.5 backdrop-blur-[20px]
        shadow-[0_14px_40px_rgba(0,0,0,0.45)]
        animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)]
      "
      style={{ zIndex: 1200 }}
      aria-label="Section Navigation"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = NAV_ICONS[item.icon];
        return (
          <div key={item.id} className="group relative">
            <a
              href={item.path}
              aria-label={item.label}
              className="
                flex h-11 w-11 items-center justify-center rounded-2xl text-white/70
                transition-all duration-200
                hover:-translate-y-0.5 hover:bg-white/10 hover:text-indigo-300
              "
            >
              <Icon className={iconClassName} aria-hidden />
            </a>
            <span
              className="
                pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1
                whitespace-nowrap rounded-md border border-white/15 bg-zinc-900/95 px-2.5 py-1
                text-[10px] font-medium tracking-[0.08em] text-zinc-200
                opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-all duration-200 delay-200
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              {item.label}
              <span
                className="
                  absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2
                  rotate-45 border-r border-b border-white/15 bg-zinc-900/95
                "
                aria-hidden="true"
              />
            </span>
          </div>
        );
      })}
      <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
