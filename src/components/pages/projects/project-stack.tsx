import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import projectList from "./data";
import ProjectPanel from "./project-panel";

const DESKTOP_QUERY = "(min-width: 1024px)";

const slotId = (slug: string) => `project-${slug}`;

const indexOfSlug = (slug?: string) =>
  slug ? projectList.findIndex((p) => p.slug === slug) : -1;

function panelBackground(accent: string) {
  return `color-mix(in srgb, ${accent} 12%, var(--color-paper))`;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia(DESKTOP_QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}

interface StackSlotProps {
  index: number;
  total: number;
  slug: string;
  data: (typeof projectList)[number]["data"];
  active: boolean;
  recedeEnabled: boolean;
}

const COVER_RUNWAY = "100vh";

function StackSlot({
  index,
  total,
  slug,
  data,
  active,
  recedeEnabled,
}: StackSlotProps) {
  const isLast = index === total - 1;
  const spacerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  useLayoutEffect(() => {
    if (isLast) return;
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      const overflow = el.offsetHeight - window.innerHeight;
      setStickyTop(overflow > 0 ? -Math.ceil(overflow) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isLast]);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0.35, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0.35, 1], [0, -40]);
  const radius = useTransform(scrollYProgress, [0.35, 1], [0, 24]);
  const brightness = useTransform(scrollYProgress, [0.35, 1], [1, 0.5]);
  const filter = useMotionTemplate`brightness(${brightness})`;
  const recede = recedeEnabled && !isLast;

  const positionLabel = `${String(index + 1).padStart(2, "0")} / ${String(
    total,
  ).padStart(2, "0")}`;

  const body = (
    <div
      ref={contentRef}
      className="min-h-screen w-full"
      style={{ backgroundColor: panelBackground(data.aboutColor) }}
    >
      <ProjectPanel data={data} positionLabel={positionLabel} isActive={active} />
    </div>
  );

  if (isLast) {
    return (
      <div id={slotId(slug)} style={{ zIndex: index + 1 }} className="relative">
        {body}
      </div>
    );
  }

  return (
    <div
      id={slotId(slug)}
      style={{ zIndex: index + 1, marginBottom: `-${COVER_RUNWAY}` }}
      className="relative"
    >
      <div className="sticky" style={{ top: stickyTop }}>
        <motion.div
          style={recede ? { scale, y, borderRadius: radius, filter } : undefined}
          className="w-full overflow-hidden"
        >
          {body}
        </motion.div>
      </div>
      <div aria-hidden ref={spacerRef} style={{ height: COVER_RUNWAY }} />
    </div>
  );
}

interface ProjectStackProps {
  initialSlug?: string;
}

function ProjectStack({ initialSlug }: ProjectStackProps) {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  const total = projectList.length;
  const [current, setCurrent] = useState(Math.max(indexOfSlug(initialSlug), 0));

  useEffect(() => {
    if (indexOfSlug(initialSlug) < 0) return;
    let cancelled = false;
    let raf = 0;
    const doJump = () => {
      const el = document.getElementById(slotId(initialSlug as string));
      if (!el) return;
      const l = lenisRef.current;
      if (l) l.scrollTo(el, { immediate: true, force: true });
      else el.scrollIntoView();
    };
    const id = window.setTimeout(() => {
      if (cancelled) return;
      doJump();
      raf = requestAnimationFrame(doJump);
    }, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [initialSlug]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let cur = 0;
      for (let i = 0; i < total; i++) {
        const el = document.getElementById(slotId(projectList[i].slug));
        if (el && el.getBoundingClientRect().top <= 1) cur = i;
      }
      setCurrent((prev) => (prev === cur ? prev : cur));
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [total]);

  if (!isDesktop) {
    return (
      <div className="mt-12">
        {projectList.map((project, index) => (
          <div
            key={project.slug}
            id={slotId(project.slug)}
            className="min-h-screen"
            style={{
              backgroundColor: panelBackground(project.data.aboutColor),
            }}
          >
            <ProjectPanel
              data={project.data}
              positionLabel={`${String(index + 1).padStart(2, "0")} / ${String(
                total,
              ).padStart(2, "0")}`}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative mt-12">
      {projectList.map((project, index) => (
        <StackSlot
          key={project.slug}
          index={index}
          total={total}
          slug={project.slug}
          data={project.data}
          active={index === current}
          recedeEnabled={!reduceMotion}
        />
      ))}
    </div>
  );
}

export default ProjectStack;
