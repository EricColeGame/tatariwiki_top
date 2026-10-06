import { BookOpen, Code2, Compass, Layers, Shapes, TrendingUp, Trophy } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Shapes, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "tier", path: "/tier", icon: Trophy, isContentType: true },
  { key: "modes", path: "/modes", icon: Compass, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Layers, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
