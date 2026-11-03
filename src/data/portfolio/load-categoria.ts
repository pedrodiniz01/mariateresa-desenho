import type { Categoria } from "./types";

const loaders: Record<string, () => Promise<{ default: Categoria }>> = {
  quadros: () => import("./quadros"),
  posters: () => import("./posters"),
  murais: () => import("./murais"),
  stationery: () => import("./stationery"),
};

export async function loadCategoria(slug: string): Promise<Categoria | null> {
  const load = loaders[slug];
  if (!load) return null;
  const mod = await load();
  return mod.default;
}
