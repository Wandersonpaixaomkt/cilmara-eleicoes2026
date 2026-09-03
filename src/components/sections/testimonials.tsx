import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";

/**
 * Seção de depoimentos no estilo da referência:
 * - Eyebrow + título à esquerda + setas à direita
 * - Grid de 3 cards com avatar circular, texto, nome, 5 estrelas
 */
export function Testimonials() {
  const depoimentos = [
    {
      id: "d-1",
      texto: "[Inserir depoimento autorizado. Conte a experiência da pessoa com a campanha ou com a atuação da candidata.]",
      nome: "[Inserir nome]",
      papel: "[Inserir papel / cidade]",
    },
    {
      id: "d-2",
      texto: "[Inserir depoimento autorizado. Pode ser de liderança comunitária, mãe atípica, pessoa com deficiência, parceiro institucional.]",
      nome: "[Inserir nome]",
      papel: "[Inserir papel / cidade]",
    },
    {
      id: "d-3",
      texto: "[Inserir depoimento autorizado. Priorize pessoas com vínculo real e autorização de imagem e texto.]",
      nome: "[Inserir nome]",
      papel: "[Inserir papel / cidade]",
    },
  ];

  return (
    <Section id="depoimentos" fundo="soft" className="!py-20 md:!py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-3">
            DEPOIMENTOS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            O que dizem da nossa caminhada
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-4" />
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            type="button"
            aria-label="Anterior"
            className="w-10 h-10 rounded-full border border-ink-soft text-ink-soft hover:border-blue hover:text-blue transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            className="w-10 h-10 rounded-full border border-ink-soft text-ink-soft hover:border-blue hover:text-blue transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {depoimentos.map((d) => (
          <article key={d.id} className="card-flat p-6 flex flex-col gap-4 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <PlaceholderImage texto="Avatar" aspect="auto" fluid variant="ink" className="rounded-none border-0 h-full" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-ink leading-tight">{d.nome}</p>
                <p className="text-xs text-ink-soft">{d.papel}</p>
              </div>
            </div>
            <p className="text-sm text-ink leading-relaxed flex-1">"{d.texto}"</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange text-orange" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
