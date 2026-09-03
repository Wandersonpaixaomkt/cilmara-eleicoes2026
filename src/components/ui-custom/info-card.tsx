import { cn } from "@/lib/utils";

interface InfoCardProps {
  rotulo: string;
  valor: string;
  /** Variação: blue (padrão) | orange | ink */
  cor?: "blue" | "orange" | "ink";
  /** Quando true, usa layout vertical (label pequeno em cima, valor grande embaixo) */
  destaque?: boolean;
  className?: string;
}

/**
 * Cartão informativo de leitura rápida.
 * Usado em apresentação rápida, dados pessoais e indicadores.
 */
export function InfoCard({ rotulo, valor, cor = "blue", destaque = false, className }: InfoCardProps) {
  const cores = {
    blue:   { linha: "bg-blue",   texto: "text-blue" },
    orange: { linha: "bg-orange", texto: "text-orange" },
    ink:    { linha: "bg-ink",    texto: "text-ink" },
  } as const;

  return (
    <div
      className={cn(
        "card-flat p-5 flex flex-col gap-2",
        destaque ? "items-start" : "items-start",
        className
      )}
    >
      <div className={cn("h-1 w-8 rounded-full", cores[cor].linha)} aria-hidden />
      <span className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">
        {rotulo}
      </span>
      <span
        className={cn(
          "font-extrabold text-ink",
          destaque ? "text-3xl md:text-4xl" : "text-lg md:text-xl"
        )}
      >
        {valor}
      </span>
    </div>
  );
}
