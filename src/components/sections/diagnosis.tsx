import { Section, SectionTitle } from "@/components/ui-custom/section";
import { diagnostico } from "@/data/site";

/**
 * Seção "Diagnóstico: as principais dores".
 * Lista numerada com problema, onde acontece e se é competência estadual.
 */
export function DiagnosisSection() {
  return (
    <Section id="diagnostico" fundo="white" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="DIAGNÓSTICO"
        titulo="As dores que motivam esta candidatura"
        subtitulo="Três problemas estruturais do Pará que só podem ser enfrentados com políticas estaduais — e que estão na base das nossas propostas."
        corLinha="orange"
      />

      <div className="space-y-5 max-w-5xl mx-auto">
        {diagnostico.map((d) => (
          <article key={d.id} className="card-flat p-6 md:p-8 bg-white">
            <div className="flex items-start gap-5">
              <span className="w-14 h-14 rounded-full bg-blue text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                {d.numero}
              </span>
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-extrabold text-ink leading-snug">{d.titulo}</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-orange mb-1">Problema</p>
                    <p className="text-ink-soft leading-relaxed">{d.problema}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-blue mb-1">Onde acontece</p>
                    <p className="text-ink-soft leading-relaxed">{d.onde}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink mb-1">É competência estadual?</p>
                    <p className="text-ink-soft leading-relaxed">{d.competenciaEstadual}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
