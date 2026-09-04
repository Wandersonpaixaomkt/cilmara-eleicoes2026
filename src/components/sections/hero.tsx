import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { candidata } from "@/data/site";

/**
 * Hero — primeira dobra.
 * - Eyebrow com 3 atributos (período, partido, UF) para autoridade imediata
 * - Título navy com a causa (text-wrap balance aplicado via CSS global)
 * - Subtítulo com prova de vivência + COMPED + nº 70700
 * - Dual CTA com foco visível consistente e estados de hover
 * - Decorações sutis em blur (sem degradê)
 *
 * Mobile: foto primeiro (order-1), texto depois (order-2)
 * Desktop (lg): texto primeiro, foto à direita (layout original)
 */
export function Hero() {
  return (
    <section id="inicio" className="bg-white relative overflow-hidden">
      {/* Decoração sutil — orbs com blur; overflow-hidden do section evita transbordar */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-72 h-72 md:w-96 md:h-96 bg-blue-soft rounded-full opacity-50 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-72 h-72 md:w-96 md:h-96 bg-orange-soft/50 rounded-full opacity-50 blur-3xl pointer-events-none"
      />

      <div className="relative container mx-auto px-4 md:px-6 max-w-6xl py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagem — primeiro no mobile (order-1), segundo no desktop (lg:order-2) */}
          <div className="relative animate-fade-in delay-100 order-1 lg:order-2">
            <PlaceholderImage
              src="/uploads/hero-foto-principal"
              alt="Foto principal de Cilmara Bonfim em Libras"
              aspect="portrait"
            />
          </div>

          {/* Texto — segundo no mobile (order-2), primeiro no desktop (lg:order-1) */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-blue text-white">
                Eleições 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-blue-soft text-blue">
                Pará · AVANTE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue leading-[1.05] tracking-tight">
              A inclusão começa<br className="hidden sm:inline" />
              onde a pessoa<br className="hidden sm:inline" />
              é ouvida.
            </h1>

            <p className="text-base md:text-lg text-ink-soft mt-6 max-w-xl leading-relaxed">
              {candidata.nome} {candidata.sobrenome} é mulher surda, mãe atípica e ex-coordenadora da COMPED em Parauapebas. Leva a vivência de quem enfrenta as barreiras para a Assembleia Legislativa do Pará — para transformar inclusão em lei, orçamento e serviço público de verdade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apoiador"
                className="inline-flex items-center justify-center gap-2 bg-blue hover:bg-blue-700 active:bg-blue-700 text-white font-extrabold text-sm uppercase tracking-wide px-7 py-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2"
              >
                Quero Apoiar
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#como-votar"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-700 active:bg-orange-700 text-white font-extrabold text-sm uppercase tracking-wide px-7 py-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:ring-offset-2"
              >
                Vote {candidata.numero}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-soft">
              <li className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange" aria-hidden />
                Deputada Estadual · Pará
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue" aria-hidden />
                Base em Parauapebas
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue" aria-hidden />
                AVANTE · 70700
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
