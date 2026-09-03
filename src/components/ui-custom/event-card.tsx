import type { Evento } from "@/data/site";
import { MapPin, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui-custom/badge";
import { cn } from "@/lib/utils";

interface EventCardProps {
  evento: Evento;
}

/**
 * Card de evento (Agenda).
 * Mostra data/horário, cidade, local, título e descrição.
 */
export function EventCard({ evento }: EventCardProps) {
  const isFuturo = evento.tipo === "futuro";

  return (
    <article
      className={cn(
        "card-flat p-5 md:p-6 flex flex-col md:flex-row gap-5",
        !isFuturo && "opacity-75"
      )}
    >
      {/* Bloco de data */}
      <div className="flex-shrink-0 w-full md:w-28 flex md:flex-col items-center md:items-stretch gap-3 md:gap-1">
        <div
          className={cn(
            "rounded-lg py-3 px-2 text-center border-2",
            isFuturo ? "bg-blue-soft border-blue/20" : "bg-ink-50 border-ink-soft"
          )}
        >
          <p
            className={cn(
              "text-[10px] font-bold uppercase tracking-wider",
              isFuturo ? "text-blue" : "text-ink-soft"
            )}
          >
            <Calendar className="inline w-3 h-3 mr-1" aria-hidden />
            Data
          </p>
          <p className={cn("text-sm font-extrabold leading-tight", isFuturo ? "text-blue" : "text-ink")}>
            {evento.dataExibicao}
          </p>
          <p
            className={cn(
              "text-xs font-medium mt-0.5 inline-flex items-center gap-1",
              isFuturo ? "text-blue/80" : "text-ink-soft"
            )}
          >
            <Clock className="w-3 h-3" aria-hidden />
            {evento.horario}
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={isFuturo ? "blue" : "ink"} estilo="soft">
            {isFuturo ? "Próximo evento" : "Evento anterior"}
          </Badge>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
            <MapPin className="w-3.5 h-3.5" aria-hidden />
            {evento.cidade}
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-ink leading-snug">
          {evento.titulo}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed">{evento.descricao}</p>
        <p className="text-xs text-ink-soft">
          <strong>Local:</strong> {evento.local}
        </p>
      </div>
    </article>
  );
}
