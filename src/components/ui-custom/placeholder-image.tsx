import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { resolveImageUrl } from "@/lib/image-resolver";

interface PlaceholderImageProps {
  /** Texto exibido dentro do placeholder (também usado em aria-label) */
  texto?: string;
  /** Proporção: video = 16/9, square = 1/1, portrait = 3/4, wide = 21/9, auto = sem ratio */
  aspect?: "video" | "square" | "portrait" | "wide" | "auto";
  /** Variante visual do fallback */
  variant?: "blue" | "orange" | "ink" | "soft";
  /** Oculta o label "Placeholder" interno */
  hideLabel?: boolean;
  /** Ícone opcional sobreposto */
  icone?: ReactNode;
  className?: string;
  /** Quando true, ocupa 100% da altura do container (sem aspect ratio) */
  fluid?: boolean;
  /**
   * URL base da imagem (sem extensão). Testa automaticamente
   * `.png .jpg .jpeg .webp` e variações de capitalização.
   */
  src?: string;
  /** URL exata (sem fallback de extensões) */
  srcDireto?: string;
  /** Texto alternativo da imagem */
  alt?: string;
  /** Modo de preenchimento */
  fit?: "cover" | "contain";
  /**
   * Dimensões esperadas (exibidas junto do placeholder para guiar
   * quem for salvar a imagem). Quando informada, aparece em negrito no
   * padrão "1200 × 800 px".
   */
  dimensaoEsperada?: string;
  /**
   * Caminho completo de salvamento (exibido no placeholder).
   * Se não informado, deriva automaticamente do `src`.
   */
  caminhoSalvamento?: string;
}

/**
 * Componente de mídia unificado.
 *
 * Quando a imagem existe, renderiza `<img>` cheia, sem moldura.
 * Quando não existe, mostra placeholder centralizado com o texto simples:
 *   "Imagem não cadastrada
 *    <texto> | <dimensão> | salvar em: <caminho>"
 */
export function PlaceholderImage({
  texto = "Inserir imagem",
  aspect = "video",
  variant = "soft",
  hideLabel = false,
  icone,
  className,
  fluid = false,
  src,
  srcDireto,
  alt,
  fit = "cover",
  dimensaoEsperada,
  caminhoSalvamento,
}: PlaceholderImageProps) {
  const [resolvido, setResolvido] = useState<string | null>(srcDireto ?? null);
  const [tentouCarregar, setTentouCarregar] = useState<boolean>(Boolean(srcDireto));

  useEffect(() => {
    if (srcDireto) {
      setResolvido(srcDireto);
      setTentouCarregar(true);
      return;
    }
    if (!src) {
      setResolvido(null);
      setTentouCarregar(false);
      return;
    }

    const controller = new AbortController();
    setTentouCarregar(false);

    resolveImageUrl(src, undefined, controller.signal)
      .then((url) => {
        setResolvido(url);
        setTentouCarregar(true);
      })
      .catch(() => {
        setResolvido(null);
        setTentouCarregar(true);
      });

    return () => controller.abort();
  }, [src, srcDireto]);

  const aspects = {
    video:    "aspect-video",
    square:   "aspect-square",
    portrait: "aspect-[3/4]",
    wide:     "aspect-[21/9]",
    auto:     "",
  } as const;

  const variants = {
    blue:   "bg-blue-soft text-blue",
    orange: "bg-orange-soft text-orange",
    ink:    "bg-ink-soft text-ink-soft",
    soft:   "bg-ink-soft text-ink-soft",
  } as const;

  const objectFitClass = fit === "cover" ? "object-cover" : "object-contain";
  const temImagem = Boolean(resolvido);

  // Calcula o caminho a exibir no placeholder
  const caminhoExibir = caminhoSalvamento
    ?? (src ? `public/uploads/${src.split("/").pop() ?? ""}` : null);

  return (
    <div
      role={temImagem ? undefined : "img"}
      aria-label={temImagem ? alt : `Placeholder: ${texto}`}
      className={cn(
        "w-full relative",
        aspects[aspect],
        temImagem
          ? ""
          : cn(
              "overflow-hidden rounded-xl flex items-center justify-center text-center px-3 py-2",
              variants[variant]
            ),
        fluid ? (temImagem ? "h-full" : "h-full overflow-hidden rounded-xl") : "",
        className
      )}
    >
      {temImagem && resolvido ? (
        <img
          src={resolvido}
          alt={alt ?? texto}
          loading="lazy"
          decoding="async"
          className={cn("absolute inset-0 w-full h-full", objectFitClass)}
        />
      ) : (
        <div className="flex flex-col items-center gap-1.5 text-center max-w-full">
          {!hideLabel && (
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-80">
              {!tentouCarregar ? "Carregando…" : "Imagem não cadastrada"}
            </span>
          )}
          <span className="text-xs leading-relaxed">
            <span className="block">{texto}</span>
            {(dimensaoEsperada || caminhoExibir) && (
              <span className="block opacity-80 text-[11px] mt-0.5">
                {dimensaoEsperada && (
                  <span className="font-bold tabular-nums">{dimensaoEsperada}</span>
                )}
                {dimensaoEsperada && caminhoExibir && " | "}
                {caminhoExibir && (
                  <span>
                    salvar em: <span className="font-mono">{caminhoExibir}</span>
                  </span>
                )}
              </span>
            )}
          </span>
        </div>
      )}
    </div>
  );
}
