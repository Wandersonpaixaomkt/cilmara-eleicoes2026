import { ArrowRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { InfoCard } from "@/components/ui-custom/info-card";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { apresentacaoRapida } from "@/data/site";

/**
 * Seção "Conheça Cilmara Bonfim" — apresentação curta.
 * Estrutura: foto + texto curto + 4 cards informativos + CTA.
 */
export function CandidateIntro() {
  return (
    <Section id="sobre" fundo="white" className="!py-16 md:!py-20">
      <SectionTitle
        eyebrow="Sobre a candidata"
        titulo={apresentacaoRapida.titulo}
        subtitulo={apresentacaoRapida.texto}
        corLinha="blue"
      />

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Foto */}
        <div className="lg:col-span-2">
          <PlaceholderImage
            texto={apresentacaoRapida.fotoAlt}
            aspect="portrait"
            variant="blue"
            className="rounded-2xl"
          />
        </div>

        {/* Conteúdo */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            {apresentacaoRapida.cards.map((card) => (
              <InfoCard
                key={card.id}
                rotulo={card.rotulo}
                valor={card.valor}
                cor="blue"
                destaque
              />
            ))}
          </div>

          <a
            href={apresentacaoRapida.botao.href}
            className="inline-flex items-center gap-2 text-blue font-bold hover:gap-3 transition-all self-start"
          >
            {apresentacaoRapida.botao.label}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
