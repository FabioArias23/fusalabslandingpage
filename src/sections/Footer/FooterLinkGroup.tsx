interface FooterLinkGroupProps {
  title: string;
  links: string[];
}

export const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
  <div className="flex flex-col gap-8">
    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">
      {title}
    </span>
    <nav className="flex flex-col gap-4 text-sm font-bold opacity-60">
      {links.map((l) => (
        <a
          key={l}
          href="#"
          className="hover:opacity-100 hover:translate-x-1 transition-all"
        >
          {l}
        </a>
      ))}
    </nav>
  </div>
);