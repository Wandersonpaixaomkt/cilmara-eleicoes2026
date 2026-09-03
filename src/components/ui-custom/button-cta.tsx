import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual do botão — primário (azul), secundário (laranja), outline, ghost */
  variant?: Variant;
  /** Tamanho — sm/md/lg (touch target mínimo 44px) */
  tamanho?: Size;
  /** Conteúdo (texto, ícones) */
  children: ReactNode;
  /** Ícone à esquerda */
  iconeEsq?: ReactNode;
  /** Ícone à direita */
  iconeDir?: ReactNode;
  /** Quando true, ocupa 100% da largura */
  fullWidth?: boolean;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-700 active:bg-blue-700 border border-transparent shadow-sm",
  secondary:
    "bg-orange text-white hover:bg-orange-700 active:bg-orange-700 border border-transparent shadow-sm",
  outline:
    "bg-white text-blue border border-blue/30 hover:border-blue hover:bg-blue-soft active:bg-blue-soft",
  ghost:
    "bg-transparent text-ink hover:bg-ink-soft active:bg-ink-soft border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

/**
 * Botão padronizado da campanha.
 * Garante tamanho mínimo de touch target, hierarquia visual entre
 * variantes e foco visível acessível.
 */
export function ButtonCTA({
  variant = "primary",
  tamanho = "md",
  children,
  iconeEsq,
  iconeDir,
  fullWidth = false,
  className,
  ...rest
}: ButtonCTAProps) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-extrabold uppercase tracking-wide whitespace-nowrap",
        "transition-colors duration-150",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[tamanho],
        fullWidth ? "w-full" : "",
        className
      )}
    >
      {iconeEsq}
      <span>{children}</span>
      {iconeDir}
    </button>
  );
}
