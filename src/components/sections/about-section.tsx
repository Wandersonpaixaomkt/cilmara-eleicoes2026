import { CheckCircle2, ArrowRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { quemSou } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Apresentação da candidata.
 * Layout: foto à esquerda acompanhando a altura do card à direita
 * com biografia + destaques + dados pessoais + CTA.
 */
export function AboutSection() {
  return (
    <Section id="quem-sou" fundo="soft" py="lg">
      <SectionTitle
        eyebrow="Quem é Cilmara"
        titulo={quemSou.titulo}
        subtitulo={quemSou.subtitulo}
        corLinha="blue"
      />

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start lg:items-stretch">
        {/* Foto: no desktop preenche a mesma altura do card de informações */}
        <figure className="flex flex-col lg:h-full min-h-0">
          <PlaceholderImage
            texto={quemSou.fotoAlt}
            aspect="auto"
            variant="blue"
            fluid
            src="/uploads/foto-quemsou"
            dimensaoEsperada="1200 × 800 px"
            caminhoSalvamento="public/uploads/foto-quemsou.png"
            className="rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:flex-1 lg:h-full lg:min-h-0"
          />
          <figcaption className="mt-3 text-xs text-ink-soft text-center lg:text-left">
            Foto principal · retrato institucional
          </figcaption>
        </figure>

        {/* Card à direita */}
        <article className="card-flat p-6 md:p-8 flex flex-col gap-6 bg-white h-full">
          <div className="flex flex-col gap-4">
            {quemSou.biografia.map((paragrafo, i) => (
              <p
                key={i}
                className="text-ink leading-relaxed text-base md:text-[1.0625rem]"
              >
                {paragrafo}
              </p>
            ))}
          </div>

          {quemSou.destaques.length > 0 && (
            <ul className="space-y-3 pt-2 border-t border-ink-soft">
              {quemSou.destaques.map((destaque, i) => (
                <li key={i} className="flex items-start gap-3 pt-4">
                  <span className="w-6 h-6 rounded-full bg-blue-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue" aria-hidden />
                  </span>
                  <span className="text-sm md:text-base text-ink leading-relaxed">
                    {destaque}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Dados pessoais em chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-ink-soft">
            {quemSou.dadosPessoais.map((dado) => (
              <div
                key={dado.rotulo}
                className={cn(
                  "rounded-lg bg-ink-soft/60 border border-ink-100 px-3 py-2.5"
                )}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  {dado.rotulo}
                </p>
                <p className="mt-1 text-sm font-extrabold text-blue leading-tight">
                  {dado.valor}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#trajetoria"
            className="inline-flex items-center gap-2 text-blue font-extrabold text-sm hover:gap-3 transition-all pt-4 border-t border-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2 rounded-md self-start"
          >
            Ver trajetória completa
            <ArrowRight className="w-4 h-4" />
          </a>
        </article>
      </div>
    </Section>
  );
}
