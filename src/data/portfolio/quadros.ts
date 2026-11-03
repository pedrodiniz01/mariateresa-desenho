import portfolioQuadros from "@/assets/portfolio-quadros.webp";
import quadro03 from "@/assets/quadro-03.webp";
import quadro04 from "@/assets/quadro-04.webp";
import quadro05 from "@/assets/quadro-05.webp";
import quadroMariaTeresa2 from "@/assets/quadro-maria-teresa-2.webp";
import quadroMariaTeresa3 from "@/assets/quadro-maria-teresa-3.webp";
import quadroMariaTeresa4 from "@/assets/quadro-maria-teresa-4.webp";
import quadroMariaTeresa5 from "@/assets/quadro-maria-teresa-5.webp";
import quadroImg4451 from "@/assets/quadro-img-4451.webp";
import quadroImg9489 from "@/assets/quadro-img-9489.webp";
import quadroImg9490 from "@/assets/quadro-img-9490.webp";
import quadroImg9493 from "@/assets/quadro-img-9493.webp";
import quadroImg9497 from "@/assets/quadro-img-9497.webp";
import quadroImg97513 from "@/assets/quadro-img-9751-3.webp";
import type { Categoria } from "./types";

const categoria: Categoria = {
  slug: "quadros",
  titulo: "Quadros",
  descricao: "Pinturas únicas em diferentes técnicas e estilos.",
  intro: "Coleção própria e obras personalizadas, pensadas em conjunto.",
  imagens: [
    { src: portfolioQuadros, alt: "Quadro abstrato em tons quentes" },
    { src: quadro03, alt: "Pintura abstrata em amarelo e verde" },
    { src: quadro04, alt: "Composição abstrata com formas orgânicas em verde e amarelo" },
    { src: quadro05, alt: "Pintura de tachos sobre fundo bordô com cone de gelado" },
    { src: quadroMariaTeresa2, alt: "Quadro com formas botânicas em branco, dourado e bordô" },
    { src: quadroMariaTeresa3, alt: "Composição botânica abstrata em bordô, rosa e dourado" },
    { src: quadroMariaTeresa4, alt: "Quadro abstrato botânico em azul escuro e tons pêssego" },
    { src: quadroMariaTeresa5, alt: "Conjunto de três quadros abstratos botânicos" },
    { src: quadroImg4451, alt: "Três quadros expostos sobre aparador de madeira" },
    { src: quadroImg9489, alt: "Três desenhos emoldurados apoiados sobre prateleira" },
    { src: quadroImg9490, alt: "Desenho abstrato em moldura de madeira com fundo amarelo suave" },
    { src: quadroImg9493, alt: "Desenho com formas circulares e linhas cinzentas" },
    { src: quadroImg9497, alt: "Ilustração abstrata em moldura com formas cinzentas e amarelas" },
    { src: quadroImg97513, alt: "Quadro com composição floral em rosa e azul" },
  ],
};

export default categoria;
