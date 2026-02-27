import { SITE } from "@/config";

const EXTERNAL_LINK_RE = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;

function getNormalizedBase() {
  let rawBase = "/";

  try {
    rawBase = new URL(SITE.website).pathname || "/";
  } catch {
    rawBase = "/";
  }

  const withLeadingSlash = rawBase.startsWith("/") ? rawBase : `/${rawBase}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
}

export function withBase(path: string) {
  if (
    EXTERNAL_LINK_RE.test(path) ||
    path.startsWith("#") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const base = getNormalizedBase();

  if (path === "/") {
    return base;
  }

  const cleanPath = path.replace(/^\/+/, "");
  return `${base}${cleanPath}`;
}

export function stripBaseFromPathname(pathname: string) {
  const base = getNormalizedBase();
  if (base === "/") return pathname;

  const baseWithoutTrailingSlash = base.slice(0, -1);
  if (pathname === baseWithoutTrailingSlash) return "/";

  if (pathname.startsWith(base)) {
    const rest = pathname.slice(base.length);
    return rest ? `/${rest}` : "/";
  }

  return pathname;
}
