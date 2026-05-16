export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/Choosen_GYM" : "");

export const asset = (p: string) => `${basePath}${p.startsWith("/") ? p : `/${p}`}`;
