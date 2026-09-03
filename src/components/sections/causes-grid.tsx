import { Section, SectionTitle } from "@/components/ui-custom/section";
import { IconCard } from "@/components/ui-custom/icon-card";
import { bandeiras } from "@/data/site";

/**
 * Seção "Bandeiras e Causas".
 * Grid responsivo de cards com ícone, título e descrição.
 * Cores alternadas entre azul e laranja para diferenciação visual.
 */
export function CausesGrid() {
  return (
    <Section id="bandeiras" fundo="white" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="Causas e bandeiras"
        titulo="Bandeiras e Causas"
        subtitulo="As principais áreas de atuação e lutas defendidas pela candidata."
        corLinha="orange"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {bandeiras.map((b) => (
          <IconCard
            key={b.id}
            icone={b.icone}
            titulo={b.titulo}
            descricao={b.descricao}
            cor={b.cor}
          />
        ))}
      </div>
    </Section>
  );
}
