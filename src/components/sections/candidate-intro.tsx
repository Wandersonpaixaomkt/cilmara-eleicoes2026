import { ArrowRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { InfoCard } from "@/components/ui-custom/info-card";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { apresentacaoRapida } from "@/data/site";

/**
 * Seção "Conheça Cilmara Bonfim" — apresentação curta.
 * Estrutura: foto + texto curto + 4 cards informativos + CTA.
 * No mobile a foto vem ANTES do texto; no desktop o texto fica à esquerda
 * e a foto à direita (igual ao layout anterior, só invertendo no mobile).
 */
export function CandidateIntro() {
  return (
    <Section id="sobre" fundo="white" className="!py-16 md:!py-20">
      <SectionTitle
        eyebrow="Sobre a candidata"
        titulo={apresentacaoRapida.titulo}
        subtitulo={apresentacaoRapida.resumo}
        corLinha="blue"
      />

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Conteúdo — vem primeiro no mobile, segundo no desktop (ordem visual esquerda) */}
        <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
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

        {/* Foto — vem depois do texto no mobile, primeiro no desktop (direita) */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <PlaceholderImage
            texto={apresentacaoRapida.fotoAlt}
            aspect="portrait"
            variant="blue"
            className="rounded-2xl"
          />
        </div>
      </div>
    </Section>
  );
}
