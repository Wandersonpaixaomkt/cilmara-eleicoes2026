import { ArrowRight, FileText } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { ButtonCTA } from "@/components/ui-custom/button-cta";
import { eixos } from "@/data/site";

/**
 * Prioridades em 4 eixos com hierarquia escaneável, microinterações
 * e CTA claro por card. Padrão: ícone → nº de propostas → título →
 * descrição → ação. Hover eleva card e desloca seta.
 */
export function ProposalAxis() {
  return (
    <Section id="propostas" fundo="white" py="lg">
      <SectionTitle
        eyebrow="Propostas"
        titulo="Quatro frentes para o Pará"
        subtitulo="Cada eixo reúne propostas concretas, pensadas para virar lei, emenda ou fiscalização na Assembleia Legislativa do Pará."
        corLinha="orange"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {eixos.map((eixo) => {
          const Icon = eixo.icone;
          return (
            <a
              key={eixo.id}
              href="#trajetoria"
              className="card-flat p-6 flex flex-col gap-4 group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2"
              aria-label={`Ver propostas do eixo: ${eixo.titulo}`}
            >
              <div className="flex items-start justify-between">
                <span className="w-11 h-11 rounded-lg bg-blue-soft text-blue flex items-center justify-center transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon className="w-5 h-5" aria-hidden />
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.12em] text-orange">
                  <FileText className="w-3 h-3" aria-hidden />
                  {eixo.propostas.length} propostas
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-ink leading-snug">
                {eixo.titulo}
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed flex-1">
                {eixo.descricao}
              </p>

              <span className="inline-flex items-center gap-1.5 text-blue font-extrabold text-xs uppercase tracking-wider pt-4 mt-auto border-t border-ink-soft group-hover:gap-2.5 transition-all">
                Ver propostas
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 md:p-7 bg-ink-soft rounded-xl border border-ink-100">
        <div>
          <p className="font-extrabold text-ink text-base">
            Quer entender cada proposta em detalhe?
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Veja os 3 destaques de mandato ou leia todas as 18 propostas numeradas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonCTA variant="outline" tamanho="sm" iconeDir={<ArrowRight className="w-4 h-4" />}>
            Ler todas as propostas
          </ButtonCTA>
          <ButtonCTA variant="primary" tamanho="sm" iconeDir={<ArrowRight className="w-4 h-4" />}>
            Quero apoiar
          </ButtonCTA>
        </div>
      </div>
    </Section>
  );
}
