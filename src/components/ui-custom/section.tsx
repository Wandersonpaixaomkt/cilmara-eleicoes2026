import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  /** Pequeno label acima do título (em uppercase tracking) */
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  alinhamento?: "center" | "left";
  corLinha?: "blue" | "orange";
  /** Cor do badge/eyebrow (azul ou laranja) — independente da linha */
  corEyebrow?: "blue" | "orange";
  className?: string;
}

/**
 * Título padronizado de seção.
 * Eyebrow uppercase tracking + título extrabold + subtítulo curto + linha.
 * Entra com fade-in quando aparece em viewport (respeitando reduced-motion).
 */
export function SectionTitle({
  eyebrow,
  titulo,
  subtitulo,
  alinhamento = "center",
  corLinha = "blue",
  corEyebrow,
  className,
}: SectionTitleProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const badgeColor = corEyebrow ?? corLinha;

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 md:mb-14",
        alinhamento === "center" ? "text-center" : "text-left",
        visible ? "animate-fade-in-up" : "opacity-0",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5",
            badgeColor === "blue" ? "bg-blue-soft text-blue" : "bg-orange-soft text-orange"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight leading-[1.15]">
        {titulo}
      </h2>
      {subtitulo && (
        <p
          className={cn(
            "text-ink-soft text-base md:text-lg max-w-2xl mt-4 leading-relaxed",
            alinhamento === "center" ? "mx-auto" : ""
          )}
        >
          {subtitulo}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-14 rounded-full mt-6",
          alinhamento === "center" ? "mx-auto" : "",
          corLinha === "blue" ? "bg-blue" : "bg-orange"
        )}
        aria-hidden
      />
    </div>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Define o fundo da seção */
  fundo?: "white" | "soft" | "ink" | "blue" | "orange";
  /** Espaçamento vertical — use os tokens abaixo para consistência */
  py?: "sm" | "md" | "lg" | "none";
}

type SectionSpacing = Record<NonNullable<SectionProps["py"]>, string>;

const spacing: SectionSpacing = {
  none: "",
  sm:   "py-12 md:py-16",
  md:   "py-20 md:py-24",
  lg:   "py-24 md:py-32",
};

/**
 * Wrapper padrão de seção.
 * Aplica id (com scroll-margin-top automático via CSS), fundo consistente e espaçamento.
 */
export function Section({
  id,
  children,
  className,
  fundo = "white",
  py = "lg",
}: SectionProps) {
  const fundos = {
    white: "bg-white",
    soft:  "bg-ink-soft",
    ink:   "bg-ink text-white",
    blue:  "bg-blue text-white",
    orange:"bg-orange text-white",
  } as const;

  return (
    <section
      id={id}
      className={cn(spacing[py], fundos[fundo], className)}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">{children}</div>
    </section>
  );
}
