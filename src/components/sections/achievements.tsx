import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Quote,
  Accessibility,
  Brain,
  Trees,
} from "lucide-react";
import { Section } from "@/components/ui-custom/section";
import { StatCard } from "@/components/ui-custom/stat-card";
import { Badge } from "@/components/ui-custom/badge";
import { atuacao, statsAtuacao } from "@/data/site";
import { resolveImageUrl } from "@/lib/image-resolver";
import { cn } from "@/lib/utils";

const entregaArte: ReadonlyArray<{
  Icon: LucideIcon;
  variant: "blue" | "orange";
  src: string;
}> = [
  { Icon: Accessibility, variant: "blue", src: "/uploads/atuacao-1" },
  { Icon: Brain, variant: "orange", src: "/uploads/atuacao-2" },
  { Icon: Trees, variant: "blue", src: "/uploads/atuacao-3" },
];

const ARTE_FALLBACK = entregaArte[0]!;

function EntregaVisual({
  src,
  alt,
  Icon,
  variant,
  rotulo,
}: {
  src: string;
  alt: string;
  Icon: LucideIcon;
  variant: "blue" | "orange";
  rotulo: string;
}) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    resolveImageUrl(src, undefined, controller.signal)
      .then((resolvida) => setUrl(resolvida))
      .catch(() => setUrl(null));
    return () => controller.abort();
  }, [src]);

  const isBlue = variant === "blue";

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden",
        isBlue ? "bg-blue-soft" : "bg-orange-soft"
      )}
    >
      {url ? (
        <img
          src={url}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <span
            className={cn(
              "absolute left-[12%] top-[22%] w-10 h-10 rounded-full opacity-70",
              isBlue ? "bg-blue/15" : "bg-orange/20"
            )}
          />
          <span
            className={cn(
              "absolute right-[16%] top-[18%] w-6 h-6 rounded-full opacity-80",
              isBlue ? "bg-blue/20" : "bg-orange/25"
            )}
          />
          <span
            className={cn(
              "absolute right-[22%] bottom-[20%] w-14 h-14 rounded-full opacity-50",
              isBlue ? "bg-white" : "bg-white"
            )}
          />
          <span
            className={cn(
              "absolute left-[18%] bottom-[18%] w-3 h-3 rounded-full",
              isBlue ? "bg-orange" : "bg-blue"
            )}
          />
          <span className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center">
            <Icon className={cn("w-10 h-10", isBlue ? "text-blue" : "text-orange")} />
          </span>
        </div>
      )}

      <span
        className={cn(
          "absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white",
          isBlue ? "text-blue" : "text-orange"
        )}
      >
        {rotulo}
      </span>
    </div>
  );
}

/**
 * Seção "Trabalho e Atuação".
 * - Cabeçalho com CTA "Ver linha do tempo"
 * - 4 stats com stripe colorido e tabular-nums
 * - Cards de entregas-chave com infográfico / ícone no topo
 */
export function Achievements() {
  return (
    <Section id="atuacao" fundo="soft" py="lg">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-3">
            ATUAÇÃO
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Trabalho que já virou entrega
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-4" />
        </div>
        <a
          href="#trajetoria"
          className="inline-flex items-center gap-1.5 text-blue font-extrabold text-sm hover:gap-2.5 transition-all self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2 rounded-md px-2 py-1"
        >
          Ver linha do tempo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-14">
        {statsAtuacao.map((stat, i) => (
          <StatCard
            key={stat.id}
            valor={stat.valor}
            rotulo={stat.rotulo}
            cor={i % 2 === 0 ? "blue" : "orange"}
          />
        ))}
      </div>

      {/* Depoimento em destaque */}
      <figure className="bg-white border border-ink-100 rounded-xl p-6 md:p-8 mb-10 md:mb-14 flex gap-4 max-w-4xl">
        <Quote className="w-8 h-8 text-orange flex-shrink-0" aria-hidden />
        <div>
          <blockquote className="text-base md:text-lg text-ink leading-relaxed italic">
            "As mães estão levando seus filhos para conhecer e passear. A gente fica muito
            contente com isso. Esta é a nossa luta pela inclusão."
          </blockquote>
          <figcaption className="mt-3 text-sm text-ink-soft">
            <strong className="text-ink font-bold">Cilmara Bonfim</strong> · Trilha Inclusiva Quarubarana · Carajás, 2025
          </figcaption>
        </div>
      </figure>

      {/* Cards de ações */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {atuacao.slice(0, 3).map((acao, i) => {
          const arte = entregaArte[i] ?? ARTE_FALLBACK;
          return (
            <article
              key={acao.id}
              className="card-flat overflow-hidden flex flex-col bg-white"
            >
              <EntregaVisual
                src={arte.src}
                alt={acao.imagemAlt}
                Icon={arte.Icon}
                variant={arte.variant}
                rotulo={`Entrega ${String(i + 1).padStart(2, "0")}`}
              />

              <div className="p-6 flex flex-col gap-3 flex-1">
                <Badge variant={i % 2 === 0 ? "blue" : "orange"} estilo="soft">
                  {acao.categoria}
                </Badge>
                <h3 className="text-base font-extrabold text-ink leading-snug">
                  {acao.titulo}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed flex-1">
                  {acao.descricao}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-ink-soft pt-3 border-t border-ink-soft">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden />
                    {acao.data}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" aria-hidden />
                    {acao.local}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
