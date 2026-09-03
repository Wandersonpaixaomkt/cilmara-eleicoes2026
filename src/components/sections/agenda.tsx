import { useMemo, useState } from "react";
import { CalendarDays, List, Filter } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { EventCard } from "@/components/ui-custom/event-card";
import { Button } from "@/components/ui/button";
import { eventosFuturos, eventosAnteriores, type Evento } from "@/data/site";
import { cn } from "@/lib/utils";

type Visualizacao = "lista" | "calendario";

/**
 * Seção "Agenda".
 * - Próximos eventos / eventos anteriores
 * - Visualização em lista ou calendário
 * - Filtro funcional por cidade
 */
export function Agenda() {
  const [visualizacao, setVisualizacao] = useState<Visualizacao>("lista");
  const [cidadeFiltro, setCidadeFiltro] = useState<string>("");

  const todasCidades = useMemo(() => {
    const set = new Set<string>();
    [...eventosFuturos, ...eventosAnteriores].forEach((e) => {
      if (e.cidade) set.add(e.cidade);
    });
    return Array.from(set);
  }, []);

  const aplicaFiltro = (lista: Evento[]) =>
    cidadeFiltro ? lista.filter((e) => e.cidade === cidadeFiltro) : lista;

  return (
    <Section id="agenda" fundo="white" py="lg">
      <SectionTitle
        eyebrow="Agenda"
        titulo="Próximos compromissos e eventos"
        subtitulo="Acompanhe a agenda pública da candidata."
        corLinha="blue"
      />

      {/* Barra de controles */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm">
          <Filter className="w-4 h-4 text-ink-soft" aria-hidden />
          <label htmlFor="filtro-cidade" className="text-ink-soft font-medium">
            Filtrar por cidade:
          </label>
          <select
            id="filtro-cidade"
            value={cidadeFiltro}
            onChange={(e) => setCidadeFiltro(e.target.value)}
            className="border border-ink-soft rounded-lg px-3 py-1.5 text-sm bg-white text-ink focus:outline-none focus:ring-2 focus:ring-blue transition-colors"
          >
            <option value="">Todas</option>
            {todasCidades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div
          className="flex items-center gap-1 p-1 bg-ink-soft rounded-lg self-start md:self-auto"
          role="tablist"
          aria-label="Modo de visualização"
        >
          <button
            role="tab"
            aria-selected={visualizacao === "lista"}
            onClick={() => setVisualizacao("lista")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold rounded-md transition-colors",
              visualizacao === "lista"
                ? "bg-white text-ink shadow-sm"
                : "text-ink-soft hover:text-ink"
            )}
          >
            <List className="w-4 h-4" />
            Lista
          </button>
          <button
            role="tab"
            aria-selected={visualizacao === "calendario"}
            onClick={() => setVisualizacao("calendario")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold rounded-md transition-colors",
              visualizacao === "calendario"
                ? "bg-white text-ink shadow-sm"
                : "text-ink-soft hover:text-ink"
            )}
          >
            <CalendarDays className="w-4 h-4" />
            Calendário
          </button>
        </div>
      </div>

      {/* Conteúdo por visualização */}
      {visualizacao === "lista" ? (
        <div className="space-y-12">
          <ListaEventos titulo="Próximos eventos" eventos={aplicaFiltro(eventosFuturos)} />
          <ListaEventos titulo="Eventos anteriores" eventos={aplicaFiltro(eventosAnteriores)} />
        </div>
      ) : (
        <CalendarioView eventos={aplicaFiltro([...eventosFuturos, ...eventosAnteriores])} />
      )}

      <div className="mt-10 flex justify-center">
        <Button asChild className="bg-blue hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg border-0 transition-colors">
          <a href="#contato">Sugerir evento</a>
        </Button>
      </div>
    </Section>
  );
}

function ListaEventos({ titulo, eventos }: { titulo: string; eventos: Evento[] }) {
  if (eventos.length === 0) {
    return (
      <div className="text-center text-ink-soft py-10">
        Nenhum evento {titulo.toLowerCase()} cadastrado para este filtro.
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-blue mb-5">{titulo}</h3>
      <div className="space-y-4">
        {eventos.map((e) => (
          <EventCard key={e.id} evento={e} />
        ))}
      </div>
    </div>
  );
}

function CalendarioView({ eventos }: { eventos: Evento[] }) {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth();
  const primeiroDia = new Date(ano, mes, 1).getDay();
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();

  if (eventos.length === 0) {
    return (
      <div className="card-flat p-8 text-center text-ink-soft">
        <CalendarDays className="w-10 h-10 mx-auto mb-3 opacity-40" aria-hidden />
        <p>Nenhum evento cadastrado neste mês.</p>
      </div>
    );
  }

  const eventosPorDia: Record<number, Evento[]> = {};
  eventos.forEach((e) => {
    if (!e.dataISO) return;
    if (!e.dataISO.startsWith(`${ano}-${String(mes + 1).padStart(2, "0")}`)) return;
    const diaStr = e.dataISO.split("-")[2];
    if (!diaStr) return;
    const dia = parseInt(diaStr, 10);
    if (Number.isNaN(dia)) return;
    if (!eventosPorDia[dia]) eventosPorDia[dia] = [];
    eventosPorDia[dia].push(e);
  });

  const dias: (number | null)[] = [];
  for (let i = 0; i < primeiroDia; i++) dias.push(null);
  for (let d = 1; d <= diasNoMes; d++) dias.push(d);

  return (
    <div className="card-flat p-4 md:p-6">
      <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-2">
        {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
          <div key={i} className="text-[11px] font-bold uppercase tracking-wider text-ink-soft py-2">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {dias.map((d, i) => (
          <div
            key={i}
            className={cn(
              "min-h-[60px] md:min-h-[80px] rounded-lg border p-1.5 md:p-2 text-left",
              d ? "bg-white border-ink-soft" : "bg-transparent border-transparent"
            )}
          >
            {d && (
              <>
                <span className="text-xs font-bold text-ink-soft">{d}</span>
                {(eventosPorDia[d] ?? []).map((e) => (
                  <div
                    key={e.id}
                    title={e.titulo}
                    className={cn(
                      "mt-1 px-1.5 py-1 rounded text-[10px] font-bold truncate",
                      e.tipo === "futuro" ? "bg-blue-soft text-blue" : "bg-ink-50 text-ink-soft"
                    )}
                  >
                    {e.horario} {e.titulo}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-ink-soft mt-4 text-center">
        Visualização em calendário — mês atual ({hoje.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}).
      </p>
    </div>
  );
}
