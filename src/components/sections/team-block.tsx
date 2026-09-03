import { Section } from "@/components/ui-custom/section";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";

/**
 * Bloco "Equipe / Atuação" no estilo da referência:
 * - Eyebrow + título à esquerda + parágrafo + CTA
 * - Imagem à direita
 */
export function TeamBlock() {
  return (
    <Section id="sobre" fundo="white" className="!py-20 md:!py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-3">
            QUEM SOMOS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Uma história construída com a comunidade
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-4" />
          <p className="text-ink-soft mt-6 leading-relaxed text-base">
            Nossa campanha é uma construção coletiva. Reunimos pessoas, famílias, profissionais e
            lideranças comunitárias em torno de uma causa comum: transformar a inclusão em política
            pública concreta no Pará. Cada pessoa que se junta traz experiência, escuta e vontade
            de fazer diferente.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#apoiador"
              className="inline-flex items-center justify-center bg-blue hover:bg-blue-700 text-white font-extrabold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Quero participar
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center border-2 border-ink-soft hover:border-blue text-ink font-extrabold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Fale com a equipe
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <PlaceholderImage
            texto="Foto de Cilmara Bonfim com a equipe ou em atividade"
            aspect="video"
            variant="blue"
            className="rounded-none border-0"
          />
        </div>
      </div>
    </Section>
  );
}
