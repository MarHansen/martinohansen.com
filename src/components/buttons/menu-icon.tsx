const EASE = "cubic-bezier(0.19,1,0.22,1)";

const MenuIcon = ({ open }: { open: boolean }) => (
  <span className="relative block h-[10px] w-6">
    <span
      style={{
        transitionTimingFunction: EASE,
        top: open ? "4px" : "0px",
        transform: open ? "rotate(45deg)" : "rotate(0deg)",
      }}
      className="absolute left-0 block h-[2px] w-6 rounded-full bg-current transition-all duration-500"
    />
    <span
      style={{
        transitionTimingFunction: EASE,
        bottom: open ? "4px" : "0px",
        transform: open ? "rotate(-45deg)" : "rotate(0deg)",
      }}
      className="absolute left-0 block h-[2px] w-6 rounded-full bg-current transition-all duration-500"
    />
  </span>
);

export default MenuIcon;
