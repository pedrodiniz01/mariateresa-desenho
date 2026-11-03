export type PortfolioImage = {
  src: string;
  alt: string;
};

export type Categoria = {
  slug: string;
  titulo: string;
  descricao: string;
  intro: string;
  imagens: PortfolioImage[];
};
