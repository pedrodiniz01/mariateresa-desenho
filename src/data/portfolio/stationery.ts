import stationeryJoanaFrancisco from "@/assets/stationery-joana-francisco.webp";
import stationeryBatizadoMatias from "@/assets/stationery-batizado-matias.webp";
import stationeryQuintaCamelias from "@/assets/stationery-quinta-camelias.webp";
import stationeryAntonioPedro from "@/assets/stationery-antonio-pedro.webp";
import stationeryVeraMartim from "@/assets/stationery-vera-martim.webp";
import stationeryAnitaEduardo from "@/assets/stationery-anita-eduardo.webp";
import stationeryBatizadoAntonioPedro from "@/assets/stationery-batizado-antonio-pedro.webp";
import type { Categoria } from "./types";

const categoria: Categoria = {
  slug: "stationery",
  titulo: "Stationery",
  descricao: "Convites e materiais de papelaria personalizados para eventos.",
  intro: "Convites e todos os outros materiais, com conceito e desenhos personalizados.",
  imagens: [
    { src: stationeryJoanaFrancisco, alt: "Suite de convites de casamento Joana e Francisco em tons verdes" },
    { src: stationeryBatizadoMatias, alt: "Convites de batizado do Matias em tons dourados" },
    { src: stationeryQuintaCamelias, alt: "Convite Quinta das Camélias ilustrado em aguarela" },
    { src: stationeryAntonioPedro, alt: "Convites do António Pedro com ursinhos em aguarela" },
    { src: stationeryVeraMartim, alt: "Suite de convites de casamento Vera e Martim com ilustrações da igreja e Casa de Sezim" },
    { src: stationeryAnitaEduardo, alt: "Suite de convites de casamento Anita e Eduardo em azul e vermelho" },
    { src: stationeryBatizadoAntonioPedro, alt: "Suite de batizado do António Pedro com ilustração em aguarela" },
  ],
};

export default categoria;
