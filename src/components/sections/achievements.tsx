import { MapPin, Calendar, ArrowRight, Quote } from "lucide-react";
import { Section } from "@/components/ui-custom/section";
import { SectionTitle } from "@/components/ui-custom/section";
import { StatCard } from "@/components/ui-custom/stat-card";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { Badge } from "@/components/ui-custom/badge";
import { atuacao, statsAtuacao } from "@/data/site";

/**
 * Seção "Trabalho e Atuação".
 * - Cabeçalho com CTA "Ver linha do tempo"
 * - 4 stats com stripe colorido e tabular-nums
 * - Cards de entregas-chave com hover elevado e CTA no rodapé
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
        {atuacao.slice(0, 3).map((acao, i) => (
          <article
            key={acao.id}
            className="card-flat overflow-hidden flex flex-col bg-white"
          >
            <div className="relative">
              <PlaceholderImage
                src={`/uploads/atuacao-${i + 1}`}
                texto={acao.imagemAlt}
                dimensaoEsperada="1200 × 800 px"
                caminhoSalvamento={`public/uploads/atuacao-${i + 1}.png`}
                aspect="video"
                variant={i % 2 === 0 ? "blue" : "orange"}
                className="rounded-none"
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  i % 2 === 0 ? "bg-white text-blue" : "bg-white text-orange"
                }`}
              >
                Entrega {String(i + 1).padStart(2, "0")}
              </span>
            </div>

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
        ))}
      </div>
    </Section>
  );
}
