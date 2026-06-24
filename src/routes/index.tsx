import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import heroArtworkAsset from "@/assets/hero-murais.jpeg";
const heroArtwork = heroArtworkAsset;
import aboutStudio from "@/assets/sobre-artista.jpeg";
import portfolioQuadrosAsset from "@/assets/portfolio-quadros.jpg";
const portfolioQuadros = portfolioQuadrosAsset;
import portfolioPosters from "@/assets/poster-mallorca.jpg";
import portfolioMuraisAsset from "@/assets/mural-safari.jpeg";
const portfolioMurais = portfolioMuraisAsset;
import portfolioStationery from "@/assets/stationery-batizado.jpg";
import {
  createBusinessJsonLd,
  createPageHead,
  createWebsiteJsonLd,
} from "@/lib/seo";

const HOME_TITLE = "Maria Teresa Desenho — Quadros, Murais e Stationery Personalizados";
const HOME_DESCRIPTION =
  "Maria Teresa Desenho — atelier de quadros, murais pintados à mão, posters e stationery personalizado em Guimarães, Portugal. Arte feita à mão, peça a peça.";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      path: "/",
      image: heroArtwork,
      imageAlt: "Mural de safari pintado à mão num quarto infantil por Maria Teresa Desenho",
      imageWidth: 1600,
      imageHeight: 1200,
      jsonLd: [createWebsiteJsonLd(), createBusinessJsonLd(heroArtwork)],
    }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portefólio", href: "#portefolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contactos", href: "#contactos" },
];

const portfolio = [
  {
    title: "Quadros",
    slug: "quadros",
    img: portfolioQuadros,
    text: "Coleção própria e obras personalizadas, pensadas em conjunto.",
    alt: "Quadros personalizados e pinturas originais de Maria Teresa Desenho",
  },
  {
    title: "Posters",
    slug: "posters",
    img: portfolioPosters,
    text: "Ilustrados em papel, cada poster tem um desenho único.",
    alt: "Poster ilustrado em aguarela de Mallorca por Maria Teresa Desenho",
  },
  {
    title: "Murais de parede",
    slug: "murais",
    img: portfolioMurais,
    text: "Murais pintados à mão que transformam espaços.",
    alt: "Mural de safari pintado à mão num quarto infantil",
  },
  {
    title: "Stationery",
    slug: "stationery",
    img: portfolioStationery,
    text: "Convites e todos os outros materiais, com conceito e desenhos personalizados.",
    alt: "Convites de batizado personalizados com ilustrações à mão",
  },
];

const servicos = [
  {
    title: "Quadros",
    text: "Coleção própria e obras personalizadas, pensadas em conjunto.",
  },
  {
    title: "Murais pintados à mão",
    text: "Murais pintados à mão que transformam espaços.",
  },
  {
    title: "Convites personalizados",
    text: "Convites e todos os outros materiais, com conceito e desenhos personalizados.",
  },
  {
    title: "Posters",
    text: "Ilustrados em papel, cada poster tem um desenho único.",
  },
  {
    title: "Outros projetos artísticos",
    text: "Decoração de objetos, pinturas ao vivo em eventos e outras ideias que queira concretizar.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex flex-col leading-tight">
            <span className="font-display text-2xl">Maria Teresa Desenho</span>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Atelier
            </span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contactos"
            className="hidden rounded-sm border border-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-primary-foreground md:inline-block"
          >
            Entrar em contacto
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-6">Atelier · Portugal</p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Um traço,<br />ou <em className="italic text-accent">rabiscos.</em>
            </h1>
            <p className="sr-only">
              Maria Teresa Desenho — quadros, murais pintados à mão, posters e stationery personalizado em Guimarães, Portugal.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Quadros, murais de parede, posters e stationery para eventos feitos à mão. Cada peça é criada a partir de uma conversa e de atenção ao detalhe.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#portefolio"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver portefólio <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contactos"
                className="inline-flex items-center rounded-sm border border-foreground px-7 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                Entrar em contacto
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              <a href="https://www.instagram.com/mariateresa_desenho/" aria-label="Instagram" className="transition-colors hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/351931371093" aria-label="WhatsApp" className="transition-colors hover:text-accent">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:mariateresadesenhopt@outlook.pt" aria-label="Email" className="transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroArtwork}
              alt="Murais de parede pintados à mão com cenas de safari e jardim em tons suaves"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border border-foreground/80 md:block" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-b border-border/60 bg-cream/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 lg:px-10 lg:py-28">
          <div>
            <img
              src={aboutStudio}
              alt="Mesa de atelier com pincéis, paleta de cerâmica e flores secas"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-5">Sobre a artista</p>
            <h2 className="text-4xl leading-tight sm:text-5xl">
              Quem e o quê?
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sou de Guimarães, no norte de Portugal, e desde cedo que a arte faz parte da minha vida.
              </p>
              <p>
                Inspiro-me no dia a dia, nas pessoas e nos lugares que me rodeiam para criar trabalhos únicos, feitos com dedicação e atenção ao detalhe, refletindo a minha paixão pela criatividade e pela expressão artística.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTEFÓLIO */}
      <section id="portefolio" className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 text-center">
            <p className="eyebrow mb-4">Portefólio</p>
            <h2 className="text-4xl sm:text-5xl">Alguns trabalhos</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {portfolio.map((p) => (
              <article key={p.title} className="group">
                <Link
                  to="/portefolio/$categoria"
                  params={{ categoria: p.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={1024}
                    height={800}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <h3 className="mt-6 text-2xl">
                  <Link
                    to="/portefolio/$categoria"
                    params={{ categoria: p.slug }}
                    className="transition-colors hover:text-accent"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <Link
                  to="/portefolio/$categoria"
                  params={{ categoria: p.slug }}
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-accent"
                >
                  Ver galeria <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href="#contactos"
              className="inline-flex items-center rounded-sm bg-foreground px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver todo o portefólio
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="border-b border-border/60 bg-cream/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 text-center">
            <p className="eyebrow mb-4">Serviços</p>
            <h2 className="text-4xl sm:text-5xl">O que posso criar</h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
            {servicos.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center bg-background p-8 text-center">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 font-display text-lg text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos" className="bg-cream/50">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <p className="eyebrow mb-4">Contactos</p>
          <h2 className="text-4xl sm:text-5xl">
            Vamos criar,<br />
            <em className="italic text-accent">juntos.</em>
          </h2>
          <p className="mt-6 mx-auto max-w-md text-base leading-relaxed text-muted-foreground">
            Entre em contacto comigo, responderei o mais brevemente possível. Se aplicável, marcamos uma conversa e mãos à obra!
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-accent" />
              <a href="https://wa.me/351931371093" className="hover:text-accent">
                +351 931 371 093
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:mariateresadesenhopt@outlook.pt" className="hover:text-accent">
                mariateresadesenhopt@outlook.pt
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-accent" />
              <a href="https://www.instagram.com/mariateresa_desenho/" className="hover:text-accent">
                @mariateresa_desenho
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Portugal</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Maria Teresa Desenho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/mariateresa_desenho/" aria-label="Instagram" className="hover:text-accent">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:mariateresadesenhopt@outlook.pt" aria-label="Email" className="hover:text-accent">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
