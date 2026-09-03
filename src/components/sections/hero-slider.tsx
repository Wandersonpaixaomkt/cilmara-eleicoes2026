import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides, candidata } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Hero / Banner principal com carrossel.
 * - 3 slides configuráveis (imagem/vídeo + texto + botão)
 * - Indicadores (dots) na parte inferior
 * - Controles laterais discretos (setas)
 * - Autoplay com pausa ao hover / ao focar / ao reduzir motion
 * - Acessível por teclado e leitor de tela
 */
export function HeroSlider() {
  const [ativo, setAtivo] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const total = heroSlides.length;

  const irPara = useCallback(
    (i: number) => setAtivo(((i % total) + total) % total),
    [total]
  );
  const proximo = useCallback(() => irPara(ativo + 1), [ativo, irPara]);
  const anterior = useCallback(() => irPara(ativo - 1), [ativo, irPara]);

  // Autoplay com pausa acessível
  useEffect(() => {
    if (!autoplay) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(proximo, 6500);
    return () => window.clearInterval(id);
  }, [autoplay, proximo]);

  // Teclado: setas navegam
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") anterior();
    if (e.key === "ArrowRight") proximo();
  };

  return (
    <section
      id="inicio"
      className="relative bg-blue text-white overflow-hidden"
      aria-roledescription="carrossel"
      aria-label="Banner principal"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      onFocus={() => setAutoplay(false)}
      onBlur={() => setAutoplay(true)}
    >
      {/* Faixa de topo com número e cargo — sempre visível */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center justify-between text-xs md:text-sm font-bold tracking-wider">
          <span className="bg-orange text-white px-3 py-1.5 rounded-full">
            {candidata.cargo.toUpperCase()} · {candidata.uf}
          </span>
          <span className="hidden sm:inline-block text-white/80">
            {candidata.nomeUrna.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Slides */}
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div
          className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[420px] md:min-h-[500px]"
          role="group"
          aria-live="polite"
        >
          {/* Texto */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-all duration-500",
                  idx === ativo ? "block animate-fade-in-up" : "hidden"
                )}
                aria-hidden={idx !== ativo}
              >
                <p className="inline-block text-xs font-bold tracking-[0.18em] bg-white/10 px-3 py-1.5 rounded-full mb-5">
                  {slide.subtitulo}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                  {slide.titulo}
                </h1>
                <p className="text-base md:text-lg text-white/85 mt-5 max-w-xl leading-relaxed">
                  {slide.texto}
                </p>
                {slide.botao && (
                  <a
                    href={slide.botao.href}
                    className="mt-7 inline-flex items-center gap-2 bg-orange hover:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
                  >
                    {slide.botao.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mídia do slide ativo */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {(() => {
              const slide = heroSlides[ativo] ?? heroSlides[0];
              if (!slide) return null;
              return (
                <div
                  className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl border-2 border-white/20 bg-white/5 overflow-hidden"
                  role="img"
                  aria-label={slide.alt}
                >
                  {slide.videoUrl ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src={slide.videoUrl}
                      poster={slide.imagem}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                      <div className="text-white/70">
                        <p className="text-[10px] font-bold tracking-wider uppercase mb-1">
                          Placeholder · {slide.id}
                        </p>
                        <p className="text-sm font-medium">{slide.alt}</p>
                        <p className="text-xs text-white/40 mt-1">Substituir por imagem ou vídeo</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex items-center justify-between gap-4">
          {/* Setas */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={anterior}
              className="w-11 h-11 rounded-lg border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={proximo}
              className="w-11 h-11 rounded-lg border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicadores (dots) */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar slide">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === ativo}
                aria-label={`Ir para o slide ${i + 1}: ${slide.titulo}`}
                onClick={() => irPara(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === ativo ? "w-10 bg-orange" : "w-2 bg-white/40 hover:bg-white/60"
                )}
              />
            ))}
          </div>

          {/* Play/Pause */}
          <button
            type="button"
            onClick={() => setAutoplay((v) => !v)}
            className="w-11 h-11 rounded-lg border border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label={autoplay ? "Pausar carrossel" : "Reproduzir carrossel"}
          >
            {autoplay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
