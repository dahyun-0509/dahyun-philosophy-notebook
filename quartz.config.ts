import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dahyun's Philosophy Notebook",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",
    baseUrl: "dahyun-0509.github.io/dahyun-philosophy-notebook",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
    typography: {
      header: "Noto Serif KR",
      body: "Noto Serif KR",
      code: "IBM Plex Mono",
    },
colors: {
      lightMode: {
        light: "#E8DFCE",
        lightgray: "#DED2B8",
        gray: "#B08863",
        darkgray: "#4A3F35",
        dark: "#2B2420",
        secondary: "#7A4B32",
        tertiary: "#5C3A34",
        highlight: "rgba(176, 136, 99, 0.15)",
        textHighlight: "#B0886388",
      },
      darkMode: {
        light: "#1C1815",
        lightgray: "#3A322B",
        gray: "#7A6A58",
        darkgray: "#D8CDBB",
        dark: "#E8DFCE",
        secondary: "#C99B6E",
        tertiary: "#E0B98F",
        highlight: "rgba(201, 155, 110, 0.15)",
        textHighlight: "#C99B6E88",
      },
    },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
