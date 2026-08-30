import { ProjectData } from "./types";
import tunema from "./tunema";
import serene from "./serene";
import catpaws from "./catpaws";
import yutrav from "./yutrav";
import adexLegend from "./adex-legend";

export interface ListedProject {
  slug: string;
  data: ProjectData;
}

export const projectList: ListedProject[] = [
  { slug: "TUNEMA", data: tunema },
  { slug: "Serene", data: serene },
  { slug: "CatPaws", data: catpaws },
  { slug: "YuTrav", data: yutrav },
  { slug: "AdexLegend", data: adexLegend },
];

export default projectList;
