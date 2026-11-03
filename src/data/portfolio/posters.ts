import poster07 from "@/assets/poster-07.webp";
import posterMallorcaCover from "@/assets/poster-mallorca-cover.webp";
import type { Categoria } from "./types";

const categoria: Categoria = {
  slug: "posters",
  titulo: "Posters",
  descricao: "Posters ilustrados em papel, cada um com um desenho original.",
  intro: "Ilustrados em papel, cada poster carrega um desenho único feito à mão.",
  imagens: [
    { src: poster07, alt: "Ilustração em aguarela de Mallorca baseada numa fotografia" },
    { src: posterMallorcaCover, alt: "Poster Mallorca Maio 2026 em aguarela" },
  ],
};

export default categoria;
