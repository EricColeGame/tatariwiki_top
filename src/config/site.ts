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
  supportEmail: `support@${new URL(siteUrl).hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/1847420/Tatari/",
  heroVideoId: "ratWpxMwe2M", // Tatari gameplay walkthrough (full game, all puzzles)
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
