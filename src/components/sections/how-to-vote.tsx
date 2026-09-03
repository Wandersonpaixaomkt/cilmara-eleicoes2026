import { Vote, Share2, CheckCircle2, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui-custom/section";
import { ButtonCTA } from "@/components/ui-custom/button-cta";
import { comoVotar, candidata } from "@/data/site";

/**
 * Seção "Como Votar".
 * - Bloco azul à esquerda com 4 passos numerados
 * - Cartão branco à direita com nº gigante (autoridade)
 * - Selo de status do TSE (autoridade)
 * - CTA WhatsApp com ação direta
 */
export function HowToVote() {
  const shareWhatsApp = () => {
    const texto = encodeURIComponent(
      `Vote ${candidata.numero} — Cilmara Bonfim (${candidata.partido}) para Deputada Estadual do Pará. ${comoVotar.whatsappTexto}`
    );
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/?text=${texto}`, "_blank");
    }
  };

  return (
    <Section id="como-votar" fundo="blue" py="lg">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Lado esquerdo: passos */}
        <div className="text-white animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Dia da eleição
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1]">
            Como votar em 60 segundos
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-5" />

          <p className="text-white/85 mt-6 leading-relaxed">
            <strong className="text-white">Cargo na urna:</strong> {comoVotar.cargo}<br />
            <strong className="text-white">Partido:</strong> {comoVotar.partido}
            <span className="block mt-1"><strong className="text-white">Nome na tela:</strong> CILMARA BONFIM</span>
          </p>

          <ol className="mt-8 space-y-4">
            {comoVotar.passos.map((passo, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span
                  className="w-9 h-9 rounded-full bg-orange text-white flex items-center justify-center font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="text-sm md:text-base text-white/95 leading-relaxed pt-1">
                  {passo}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-start gap-2 text-xs text-white/60 italic bg-white/5 border-l-2 border-white/20 px-4 py-3 rounded">
            <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5 text-orange" aria-hidden />
            <span className="leading-relaxed">
              <strong className="not-italic text-white/80">Status no TSE:</strong> {candidata.statusTSE}
            </span>
          </div>
        </div>

        {/* Lado direito: cartão de confirmação */}
        <div className="rounded-2xl bg-white text-ink p-8 md:p-10 elevated animate-fade-in-up delay-100">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue mb-3">
              Vote
            </p>
            <p className="text-7xl md:text-8xl font-black tracking-tighter text-blue leading-none tabular-nums">
              {candidata.numero}
            </p>
            <p className="text-base font-extrabold mt-4">{candidata.nomeCompleto}</p>
            <p className="text-sm text-ink-soft mt-1.5">
              {candidata.cargo} · {candidata.estado} · {candidata.partido}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-ink-100 space-y-3 text-sm">
            <p className="flex items-start gap-2.5 text-ink-soft">
              <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" />
              Digite 7 — 0 — 7 — 0 — 0 no teclado da urna.
            </p>
            <p className="flex items-start gap-2.5 text-ink-soft">
              <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" />
              Confirme a foto e o nome de CILMARA BONFIM.
            </p>
            <p className="flex items-start gap-2.5 text-ink-soft">
              <CheckCircle2 className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" />
              Pressione a tecla verde CONFIRMA.
            </p>
          </div>

          <ButtonCTA
            variant="secondary"
            tamanho="md"
            fullWidth
            iconeEsq={<Share2 className="w-4 h-4" />}
            iconeDir={<Vote className="w-4 h-4" />}
            onClick={shareWhatsApp}
            className="mt-7"
          >
            Mandar no WhatsApp
          </ButtonCTA>

          <p className="mt-4 text-[11px] text-ink-soft text-center leading-relaxed max-w-sm mx-auto">
            {comoVotar.pedido}
          </p>
        </div>
      </div>
    </Section>
  );
}
