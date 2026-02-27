import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { generateOgImageForSite } from "@/utils/generateOgImages";
import { SITE } from "@/config";

const CONTENT_TYPE_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

export const GET: APIRoute = async () => {
  try {
    const buffer = await generateOgImageForSite();
    return new Response(new Uint8Array(buffer), {
      headers: { "Content-Type": "image/png" },
    });
  } catch {
    if (!SITE.ogImage) {
      throw new Error("OG image generation failed and no fallback image is configured.");
    }

    const publicPath = fileURLToPath(new URL("../../public", import.meta.url));
    const fallbackPath = join(publicPath, SITE.ogImage);
    const fallbackBuffer = await readFile(fallbackPath);
    const ext = extname(SITE.ogImage).toLowerCase();

    return new Response(new Uint8Array(fallbackBuffer), {
      headers: {
        "Content-Type": CONTENT_TYPE_BY_EXT[ext] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }
};
