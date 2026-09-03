import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icone: LucideIcon;
  titulo: string;
  descricao: string;
  cor?: "blue" | "orange";
  className?: string;
}

/**
 * Card com ícone grande + título + descrição.
 * Usado em bandeiras, causas e grids informativos.
 */
export function IconCard({ icone: Icon, titulo, descricao, cor = "blue", className }: IconCardProps) {
  const styles =
    cor === "blue"
      ? { bg: "bg-blue-soft", text: "text-blue", linha: "bg-blue" }
      : { bg: "bg-orange-soft", text: "text-orange", linha: "bg-orange" };

  return (
    <article
      className={cn(
        "card-flat p-6 flex flex-col gap-3 h-full",
        className
      )}
    >
      <div className={cn("h-1 w-10 rounded-full", styles.linha)} aria-hidden />
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          styles.bg
        )}
        aria-hidden
      >
        <Icon className={cn("w-6 h-6", styles.text)} />
      </div>
      <h3 className="text-base font-bold text-ink leading-snug">{titulo}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{descricao}</p>
    </article>
  );
}
