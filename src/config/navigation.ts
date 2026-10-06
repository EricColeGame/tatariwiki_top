export interface NavigationItem {
  key: string;
  path: string;
  icon: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG: NavigationItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
