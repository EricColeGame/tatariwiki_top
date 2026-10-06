import { locales } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tatariwiki.top";

export const siteConfig: SiteConfig = {
  name: "Tatari Wiki",
  shortName: "Tatari",
  logoText: "T",
  tagline: "Walkthrough, Puzzles, Clues & Horror Guides",
  description: "Fan-made Tatari wiki covering the full walkthrough, puzzle solutions, clues, locations, achievements and story of the Japanese paranormal detective horror game.",
  url: siteUrl,
  supportEmail: "support@tatariwiki.top",
  gameUrl: "https://store.steampowered.com/app/1847420/Tatari/",
  heroVideoId: "yfzxoTHAMbM", // Tatari Steam Release Date Announcement Trailer (official, Hidden Tower Studios)
  social: {
    discord: "https://discord.com/game/tatari-the-arrival-1226184734019682365",
    youtube: "https://www.youtube.com/@hiddentowerstudios4617",
  },
  locales,
  defaultLocale: "en",
};
