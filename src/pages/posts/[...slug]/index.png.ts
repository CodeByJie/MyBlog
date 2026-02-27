import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getCollection, type CollectionEntry } from "astro:content";
import { getPath } from "@/utils/getPath";
import { generateOgImageForPost } from "@/utils/generateOgImages";
import { SITE } from "@/config";

export async function getStaticPaths() {
  if (!SITE.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("blog").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: getPath(post.id, post.filePath, false) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  if (!SITE.dynamicOgImage) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  try {
    const buffer = await generateOgImageForPost(props as CollectionEntry<"blog">);
    return new Response(new Uint8Array(buffer), {
      headers: { "Content-Type": "image/png" },
    });
  } catch {
    const fallbackImage = SITE.ogImage || "og.png";
    const fallbackImagePath = join(process.cwd(), "public", fallbackImage);
    const fallbackBuffer = await readFile(fallbackImagePath);
    const contentType = fallbackImage.endsWith(".webp")
      ? "image/webp"
      : fallbackImage.endsWith(".svg")
        ? "image/svg+xml"
        : "image/png";

    return new Response(new Uint8Array(fallbackBuffer), {
      headers: { "Content-Type": contentType },
    });
  }
};
