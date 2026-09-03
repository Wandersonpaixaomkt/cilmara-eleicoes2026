import { Quote } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { porQue } from "@/data/site";

/**
 * Seção "Por que Cilmara se candidata".
 * Estrutura:
 * - Parágrafo da tensão central
 * - Citação da candidata em destaque
 * - Listas de públicos prioritários e territórios
 */
export function WhyCandidacy() {
  return (
    <Section id="motivo" fundo="white" className="!py-20 md:!py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-3">
            POR QUE SE CANDIDATA
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight leading-tight">
            Inclusão não pode ser promessa distante
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-4" />
          <p className="text-ink-soft mt-6 leading-relaxed">{porQue.paragrafo}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <div>
              <h3 className="text-sm font-extrabold text-ink uppercase tracking-wider mb-3">
                Públicos prioritários
              </h3>
              <ul className="space-y-2">
                {porQue.publicos.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-soft leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-ink uppercase tracking-wider mb-3">
                Recorte territorial
              </h3>
              <ul className="space-y-2">
                {porQue.territorios.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-soft leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 flex-shrink-0" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue text-white rounded-2xl p-8 md:p-10 relative">
          <Quote className="w-10 h-10 text-orange/70 mb-4" aria-hidden />
          <blockquote className="text-xl md:text-2xl font-extrabold leading-snug">
            "{porQue.citacao}"
          </blockquote>
          <p className="mt-5 text-white/70 text-sm font-bold uppercase tracking-wider">
            — {porQue.citacaoFonte}
          </p>

          <div className="mt-8 pt-6 border-t border-white/15">
            <p className="text-xs font-bold uppercase tracking-wider text-orange mb-3">
              Para quem eu falo
            </p>
            <p className="text-sm text-white/90 leading-relaxed">{porQue.paraQuemFalo}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
