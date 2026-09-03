import { Section, SectionTitle } from "@/components/ui-custom/section";
import { timeline, type TimelineItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

interface TimelineProps {
  itens?: TimelineItem[];
}

/**
 * Linha do tempo responsiva.
 * - Desktop: alterna esquerda/direita (zig-zag)
 * - Mobile: lista vertical simples
 * - Cada item: data, título, descrição, ícone e linha azul de ligação
 */
export function Timeline({ itens = timeline }: TimelineProps) {
  return (
    <Section id="trajetoria" fundo="soft" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="Linha do tempo"
        titulo="Uma trajetória construída ao longo do tempo"
        subtitulo="Os principais marcos da caminhada até aqui."
        corLinha="blue"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Linha vertical central (desktop) / esquerda (mobile) */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-blue/20 left-4 md:left-1/2 md:-translate-x-1/2"
          aria-hidden
        />

        <ol className="space-y-10 md:space-y-12">
          {itens.map((item, idx) => {
            const esquerda = idx % 2 === 0;
            return (
              <TimelineItemCard
                key={item.id}
                item={item}
                esquerda={esquerda}
                idx={idx}
              />
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

function TimelineItemCard({
  item,
  esquerda,
  idx,
}: {
  item: TimelineItem;
  esquerda: boolean;
  idx: number;
}) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  const Icon = item.icone;

  return (
    <li
      ref={ref}
      className={cn(
        "relative md:grid md:grid-cols-2 md:gap-12 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      {/* Marcador (sempre visível no eixo) */}
      <div
        className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange border-4 border-white shadow-sm z-10"
        aria-hidden
      />

      {/* Card */}
      <div
        className={cn(
          "pl-12 md:pl-0",
          esquerda ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"
        )}
      >
        <article
          className={cn(
            "card-flat p-5 md:p-6",
            esquerda ? "md:items-end" : ""
          )}
        >
          <div
            className={cn(
              "flex items-center gap-3 mb-3",
              esquerda ? "md:flex-row-reverse" : ""
            )}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-soft text-blue flex-shrink-0">
              {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xs font-bold">#{idx + 1}</span>}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue">
              {item.dataExibicao}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-extrabold text-ink leading-snug">
            {item.titulo}
          </h3>
          <p className="text-sm text-ink-soft leading-relaxed mt-2">{item.descricao}</p>

          {item.categoria && (
            <span
              className={cn(
                "inline-block mt-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-soft text-orange",
                esquerda ? "md:self-end" : ""
              )}
            >
              {item.categoria}
            </span>
          )}
        </article>
      </div>
    </li>
  );
}
