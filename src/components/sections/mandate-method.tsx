import { HandHeart, MapPin, FileText, Tv } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { metodoMandato } from "@/data/site";

/**
 * Seção "Método de Mandato" — princípios operacionais do gabinete.
 */
export function MandateMethod() {
  return (
    <Section id="metodo" fundo="white" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="MÉTODO DE MANDATO"
        titulo={metodoMandato.titulo}
        subtitulo={metodoMandato.subtitulo}
        corLinha="blue"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {metodoMandato.principios.map((p, i) => {
          const icones = [HandHeart, MapPin, FileText, Tv];
          const Icon = icones[i] ?? HandHeart;
          return (
            <article
              key={p.id}
              className="card-flat p-6 flex items-start gap-4 bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-soft text-blue flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-ink leading-snug">{p.titulo}</h3>
                <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{p.descricao}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
