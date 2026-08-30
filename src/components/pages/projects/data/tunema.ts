import { ProjectData } from "./types";

const tunema: ProjectData = {
  headTitle: "TUNEMA──marhansen",
  title: "TUNEMA",
  role: "Frontend ── UI/UX",
  developed: "February 2023",
  docs: [
    { label: "Github", to: "https://github.com/tunema-org" },
    {
      label: "Bēhance",
      to: "https://www.behance.net/gallery/171910903/TUNEMA",
    },
    { label: "Youtube", to: "https://youtu.be/eTJzIU04X3s" },
  ],
  aboutColor: "#758915",
  aboutText:
    "Sampling exists as an educational tool and as a way for artists to springboard inspiration off of each other. In today there's only 1 platform that well known as sample music selling website. TUNEMA is here to provide music samples to help the producer and independent artist in music industry.",
  paragraphs: [
    "This web application allows producers to sell and buy a variety of music samples, including kicks, snare, instrumentals, vocals, and more. With TUNEMA, producers worldwide can access high-quality samples at an affordable price, making it easier than ever to create professional-quality music.\nTUNEMA is created to revolutionize the music production industry by providing a more affordable and diverse marketplace for music samples, empowering producers to create professional quality tracks and connecting with other music creators around the world.",
    "The most challenging part when developing TUNEMA is to find-out and how to differentiate TUNEMA with other sample music selling platform. This is the first time debut using react typescript when developing TUNEMA frontend, it ends up with new knowledge with react ecosystem and do an easier things that vanilla HTML and CSS does, with tons of frameworks and libraries to use.",
  ],
  paragraphsClassName: "flex lg:flex-row flex-col gap-3 font-body font-[401]",
  techStack: ["react", "tailwind", "golang", "lambda", "rds", "s3"],
  images: [
    "/showcase/tunema/tunema-1.webp",
    "/showcase/tunema/tunema-2.webp",
    "/showcase/tunema/tunema-3.webp",
    "/showcase/tunema/tunema-4.webp",
  ],
};

export default tunema;
