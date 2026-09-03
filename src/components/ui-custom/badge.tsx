import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "blue" | "orange" | "ink";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  estilo?: "filled" | "soft" | "outline";
  /** Tamanho — sm para listas densas, md (default) para uso geral */
  tamanho?: "sm" | "md";
  className?: string;
}

const variants: Record<Variant, { filled: string; soft: string; outline: string }> = {
  blue:   { filled: "bg-blue text-white",       soft: "bg-blue-soft text-blue",       outline: "border border-blue/30 text-blue" },
  orange: { filled: "bg-orange text-white",     soft: "bg-orange-soft text-orange",   outline: "border border-orange/30 text-orange" },
  ink:    { filled: "bg-ink text-white",        soft: "bg-ink-50 text-ink",           outline: "border border-ink/30 text-ink" },
};

const tamanhos = {
  sm: "text-[10px] px-2.5 py-0.5 tracking-[0.12em]",
  md: "text-xs px-3 py-1 tracking-wide",
};

/**
 * Badge padronizada. Estados visuais consistentes, transições suaves.
 */
export function Badge({ children, variant = "blue", estilo = "soft", tamanho = "md", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-bold uppercase transition-colors",
        tamanhos[tamanho],
        variants[variant][estilo],
        className
      )}
    >
      {children}
    </span>
  );
}
