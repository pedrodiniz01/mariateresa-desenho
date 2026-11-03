import muralSafariQuarto from "@/assets/mural-safari-quarto.webp";
import poster01 from "@/assets/poster-01.webp";
import poster02 from "@/assets/poster-02.webp";
import poster03 from "@/assets/poster-03.webp";
import poster04 from "@/assets/poster-04.webp";
import poster05 from "@/assets/poster-05.webp";
import poster06 from "@/assets/poster-06.webp";
import type { Categoria } from "./types";

const categoria: Categoria = {
  slug: "murais",
  titulo: "Murais de parede",
  descricao: "Murais pintados à mão que transformam qualquer espaço.",
  intro: "Murais pintados à mão que transformam espaços.",
  imagens: [
    { src: muralSafariQuarto, alt: "Mural de safari pintado à mão num quarto com girafas, macacos e árvores" },
    { src: poster01, alt: "Mural floral em parede branca com ramos e flores" },
    { src: poster02, alt: "Porta integrada com ilustração de ramos e flores" },
    { src: poster03, alt: "Detalhe de mural com ramos, folhas e pequenas flores" },
    { src: poster04, alt: "Mural vertical com ramos delicados e flores rosa" },
    { src: poster05, alt: "Painéis pintados à mão com animais e jardim" },
    { src: poster06, alt: "Atelier em frente a painéis com elefante, girafa e jardim" },
  ],
};

export default categoria;
