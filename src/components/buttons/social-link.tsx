const EASE = "cubic-bezier(0.19,1,0.22,1)";

interface SocialLinkProps {
  href: string;
  label: string;
  /** true when the nav overlay is open (dark background) */
  dark?: boolean;
}

const SocialLink = ({ href, label, dark = false }: SocialLinkProps) => {
  const text = <span className="block px-1">{label}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-size="60px"
      data-cursor-stick="#stick-item"
      data-cursor-exclusion
      className={`group/social relative inline-flex items-center justify-center overflow-hidden rounded-full px-2 py-1 ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span
        aria-hidden
        style={{ transitionTimingFunction: EASE }}
        className={`pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-square w-[200%] -translate-x-1/2 translate-y-1/2 origin-center scale-0 rounded-full transition-transform duration-[900ms] group-hover/social:scale-[1.75] ${
          dark ? "bg-white" : "bg-black"
        }`}
      />

      <span className="relative z-10 block overflow-hidden">
        <span
          style={{ transitionTimingFunction: EASE }}
          className="block transition-transform duration-[900ms] group-hover/social:-translate-y-[140%]"
        >
          {text}
        </span>
        <span
          style={{ transitionTimingFunction: EASE }}
          className={`absolute inset-0 translate-y-[140%] transition-transform duration-[900ms] group-hover/social:translate-y-0 ${
            dark ? "text-black" : "text-white"
          }`}
        >
          {text}
        </span>
      </span>
    </a>
  );
};

export default SocialLink;
