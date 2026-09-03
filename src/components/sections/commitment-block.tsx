import { Eye, ListChecks, BarChart3 } from "lucide-react";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";

/**
 * Bloco de compromisso (BAB + 3 pilares).
 * Imagem à esquerda (efeito hover scale sutil), card azul à direita.
 * Cada pilar vira um mini-card com ícone + título em bold + label de detalhe.
 */
export function CommitmentBlock() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-ink-100 shadow-sm">
          {/* Imagem */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
            <PlaceholderImage
              texto="Foto de atividade comunitária ou institucional"
              src="/uploads/compromisso-foto"
              dimensaoEsperada="1200 × 800 px"
              caminhoSalvamento="public/uploads/compromisso-foto.png"
              aspect="auto"
              variant="ink"
              fluid
              className="rounded-none h-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Card azul */}
          <div className="bg-blue text-white p-8 md:p-12 flex flex-col justify-center relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
              COMPROMISSO DE MANDATO
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.15] text-balance">
              Sua causa, nosso trabalho — todos os dias.
            </h2>
            <p className="text-white/85 mt-5 leading-relaxed text-base">
              Inclusão não se promete em campanha e se esquece na Assembleia. Cada proposta aqui
              nasce de uma demanda real e é pensada para virar lei, fiscalização e orçamento
              carimbado no Pará.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { icon: Eye,        label: "Escutar",    detalhe: "a comunidade" },
                { icon: ListChecks,  label: "Propor",     detalhe: "com técnica" },
                { icon: BarChart3,   label: "Fiscalizar", detalhe: "com resultado" },
              ].map((it, i) => (
                <div
                  key={i}
                  className="text-center p-3 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  <div className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto">
                    <it.icon className="w-5 h-5" aria-hidden />
                  </div>
                  <p className="text-sm font-extrabold mt-2 text-white">{it.label}</p>
                  <p className="text-[11px] text-white/65 mt-0.5">{it.detalhe}</p>
                </div>
              ))}
            </div>

            {/* Faixa ornamental no canto */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-1 h-full bg-orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
