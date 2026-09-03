import { ArrowRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";

/**
 * Grid de artigos/notícias no estilo da referência (última atualização, gestão, análise etc.).
 */
export function ArticlesGrid() {
  const artigos = [
    { id: "a-1", data: "[Inserir data]", categoria: "Trajetória", titulo: "Cinco marcos da caminhada política de Cilmara Bonfim" },
    { id: "a-2", data: "[Inserir data]", categoria: "Propostas",  titulo: "Como a inclusão comunicacional muda a vida no interior" },
    { id: "a-3", data: "[Inserir data]", categoria: "Comunidade",  titulo: "O que aprendi ouvindo famílias atípicas no Pará" },
  ];

  return (
    <Section id="artigos" fundo="white" className="!py-20 md:!py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-3">
            ARTIGOS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Leituras da campanha
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-4" />
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-blue font-extrabold text-sm hover:gap-2 transition-all self-start md:self-auto">
          Ver todos <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {artigos.map((art) => (
          <article key={art.id} className="card-flat overflow-hidden bg-white">
            <div className="aspect-video">
              <PlaceholderImage texto={art.titulo} aspect="auto" variant="ink" fluid className="rounded-none border-0" />
            </div>
            <div className="p-5">
              <p className="text-xs text-ink-soft font-bold">
                {art.data} · <span className="text-blue">{art.categoria}</span>
              </p>
              <h3 className="text-base font-extrabold text-ink mt-2 leading-snug">{art.titulo}</h3>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-blue font-extrabold text-sm">
                Ler mais <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
