import { CheckCircle2 } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { funcoesCargo } from "@/data/site";

/**
 * Seção "O que faz uma Deputada Estadual" — bloco de educação cívica.
 * Cards com as 5 funções constitucionais do mandato.
 */
export function RoleExplainer() {
  return (
    <Section id="cargo" fundo="soft" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="EDUCAÇÃO CÍVICA"
        titulo="O que faz uma Deputada Estadual"
        subtitulo="As atribuições constitucionais do mandato na ALEPA — para alinhar expectativas sobre o que a candidata pode, de fato, entregar."
        corLinha="blue"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {funcoesCargo.map((f, i) => (
          <article
            key={f.id}
            className="card-flat p-6 bg-white flex flex-col gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-blue-soft text-blue flex items-center justify-center font-black text-sm">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-base font-extrabold text-ink leading-snug">{f.titulo}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{f.descricao}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-blue pt-3 border-t border-ink-soft">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Atribuição da ALEPA
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
