import { useEffect, useRef, useState } from "react";
import { Play, X, ImageOff, Filter } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { Badge } from "@/components/ui-custom/badge";
import { galeria, type GaleriaItem } from "@/data/site";
import { cn } from "@/lib/utils";

type Aba = "fotos" | "videos";

/**
 * Seção "Galeria".
 * - Tabs para Fotos e Vídeos
 * - Grid responsivo
 * - Lightbox acessível com tecla Escape + foco no botão de fechar
 * - Vídeo mostra thumbnail com botão play
 */
export function Gallery() {
  const [aba, setAba] = useState<Aba>("fotos");
  const [itemAberto, setItemAberto] = useState<GaleriaItem | null>(null);
  const [filtro, setFiltro] = useState<string>("");
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Fecha com Escape + foco no botão de fechar quando abre
  useEffect(() => {
    if (!itemAberto) return;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setItemAberto(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus();
    };
  }, [itemAberto]);

  const itens = aba === "fotos"
    ? galeria.filter((g) => g.tipo === "foto")
    : galeria.filter((g) => g.tipo === "video");

  const itensFiltrados = filtro ? itens.filter((g) => g.categoria === filtro) : itens;
  const categorias: string[] = Array.from(
    new Set(galeria.map((g) => g.categoria).filter(Boolean) as string[])
  );

  return (
    <Section id="galeria" fundo="soft" py="lg">
      <SectionTitle
        eyebrow="Galeria"
        titulo="Imagens e vídeos"
        subtitulo="Registros de eventos, reuniões e atividades da campanha."
        corLinha="orange"
      />

      {/* Tabs */}
      <div
        className="flex items-center gap-2 mb-6 justify-center"
        role="tablist"
        aria-label="Tipo de mídia"
      >
        <button
          role="tab"
          aria-selected={aba === "fotos"}
          onClick={() => setAba("fotos")}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2",
            aba === "fotos"
              ? "bg-blue text-white border-blue"
              : "bg-white text-ink-soft border-ink-soft hover:border-blue hover:text-blue"
          )}
        >
          Fotos
        </button>
        <button
          role="tab"
          aria-selected={aba === "videos"}
          onClick={() => setAba("videos")}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2",
            aba === "videos"
              ? "bg-blue text-white border-blue"
              : "bg-white text-ink-soft border-ink-soft hover:border-blue hover:text-blue"
          )}
        >
          Vídeos
        </button>
      </div>

      {/* Filtros estruturais */}
      {categorias.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 justify-center mb-8 text-sm">
          <Filter className="w-4 h-4 text-ink-soft" aria-hidden />
          <span className="text-ink-soft font-medium">Filtrar:</span>
          <button
            type="button"
            onClick={() => setFiltro("")}
            aria-pressed={!filtro}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-bold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2",
              !filtro
                ? "bg-orange text-white border-orange"
                : "bg-white text-ink-soft border-ink-soft hover:border-orange hover:text-orange"
            )}
          >
            Todos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltro(cat)}
              aria-pressed={filtro === cat}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2",
                filtro === cat
                  ? "bg-orange text-white border-orange"
                  : "bg-white text-ink-soft border-ink-soft hover:border-orange hover:text-orange"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {itensFiltrados.length === 0 ? (
        <div className="text-center py-16 text-ink-soft">
          <ImageOff className="w-10 h-10 mx-auto mb-3 opacity-40" aria-hidden />
          <p>Nenhum item encontrado para este filtro.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {itensFiltrados.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setItemAberto(item)}
              className="group relative aspect-square rounded-xl overflow-hidden border border-ink-soft bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2"
              aria-label={`Abrir ${item.titulo}`}
            >
              <PlaceholderImage
                texto={item.titulo}
                aspect="auto"
                variant="ink"
                fluid
                className="rounded-none border-0"
              />
              {item.tipo === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                  </span>
                </div>
              )}
              {item.categoria && (
                <Badge variant="blue" estilo="filled" className="absolute top-2 left-2">
                  {item.categoria}
                </Badge>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox acessível */}
      {itemAberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={itemAberto.titulo}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setItemAberto(null)}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setItemAberto(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Fechar galeria"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-ink-50 relative">
              {itemAberto.tipo === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center text-ink-soft">
                  <div className="text-center px-4">
                    <Play className="w-12 h-12 mx-auto mb-2 opacity-50" aria-hidden />
                    <p className="text-sm">
                      Player de vídeo — fonte disponível ao publicar.
                    </p>
                  </div>
                </div>
              ) : (
                <PlaceholderImage
                  texto={itemAberto.alt}
                  aspect="auto"
                  fluid
                  className="rounded-none border-0"
                />
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-extrabold text-ink">{itemAberto.titulo}</h3>
              <p className="text-sm text-ink-soft mt-1">{itemAberto.alt}</p>
              {itemAberto.cidade && (
                <p className="text-xs text-ink-soft mt-2">
                  <strong>Cidade:</strong> {itemAberto.cidade}
                  {itemAberto.categoria && (
                    <>
                      {" "}
                      · <strong>Categoria:</strong> {itemAberto.categoria}
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
