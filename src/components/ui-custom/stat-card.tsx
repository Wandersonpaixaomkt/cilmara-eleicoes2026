import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  valor: string;
  rotulo: string;
  descricao?: string;
  cor?: "blue" | "orange" | "ink";
  /** Ícone opcional exibido no canto superior */
  icone?: ReactNode;
  className?: string;
}

/**
 * Cartão de indicador numérico.
 * Faixa colorida superior (stripe) + valor + rótulo. Hover eleva o card.
 */
export function StatCard({ valor, rotulo, descricao, cor = "blue", icone, className }: StatCardProps) {
  const cores = {
    blue:   { stripe: "bg-blue",   texto: "text-blue" },
    orange: { stripe: "bg-orange", texto: "text-orange" },
    ink:    { stripe: "bg-ink",    texto: "text-ink" },
  } as const;

  return (
    <div className={cn("card-flat relative overflow-hidden p-6 flex flex-col gap-2", className)}>
      {/* Stripe colorida no topo */}
      <div
        className={cn("absolute top-0 left-0 right-0 h-1", cores[cor].stripe)}
        aria-hidden
      />
      {icone && (
        <div className={cn("self-start opacity-70", cores[cor].texto)} aria-hidden>
          {icone}
        </div>
      )}
      <span className={cn("text-4xl md:text-5xl font-black tracking-tighter leading-none tabular-nums", cores[cor].texto)}>
        {valor}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-wider text-ink">
        {rotulo}
      </span>
      {descricao && (
        <span className="text-xs text-ink-soft leading-relaxed">{descricao}</span>
      )}
    </div>
  );
}
