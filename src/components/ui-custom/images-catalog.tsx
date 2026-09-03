import { useEffect, useState } from "react";
import { ChevronDown, Copy, CheckCircle2, Camera, CameraIcon } from "lucide-react";
import { imageSpecs, SAVE_PATH_HINT } from "@/data/images-spec";
import { cn } from "@/lib/utils";

type StatusMap = Record<string, "pendente" | "ok" | "erro">;

/**
 * Bloco de catálogo de imagens — exibido dentro do site, em formato
 * accordion discreto. Detecta automaticamente quais arquivos já estão
 * publicados em `/public/uploads/` e mostra nome, dimensões e local
 * de salvamento para cada imagem que o site espera.
 */
export function ImagesCatalog() {
  const [status, setStatus] = useState<StatusMap>({});
  const [aberto, setAberto] = useState(false);
  const [filtro, setFiltro] = useState<string>("Todas");
  const [soPendentes, setSoPendentes] = useState(false);
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const resultados: StatusMap = {};
      await Promise.all(
        imageSpecs.map(async (img) => {
          try {
            const r = await fetch(img.path, { method: "HEAD" });
            if (!cancelado) resultados[img.id] = r.ok ? "ok" : "erro";
          } catch {
            if (!cancelado) resultados[img.id] = "erro";
          }
        })
      );
      if (!cancelado) setStatus(resultados);
    })();
    return () => {
      cancelado = true;
    };
  }, []);

  const categorias = ["Todas", ...Array.from(new Set(imageSpecs.map((i) => i.categoria)))];

  const itens = imageSpecs.filter((img) => {
    if (filtro !== "Todas" && img.categoria !== filtro) return false;
    if (soPendentes && status[img.id] === "ok") return false;
    return true;
  });

  const totais = {
    total: imageSpecs.length,
    ok: Object.values(status).filter((s) => s === "ok").length,
  };
  const pendentes = totais.total - totais.ok;

  const copiar = async (texto: string, id: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(texto);
      } else {
        const ta = document.createElement("textarea");
        ta.value = texto;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopiadoId(id);
      window.setTimeout(() => setCopiadoId(null), 1500);
    } catch {
      // silencioso
    }
  };

  return (
    <section
      id="imagens"
      aria-labelledby="imagens-titulo"
      className="border-t border-white/10 bg-ink"
    >
      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Cabeçalho com accordion */}
        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-controls="imagens-conteudo"
          className="w-full flex items-center justify-between gap-4 text-left group rounded-md px-2 py-2 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <span className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-orange" aria-hidden />
            <span>
              <span id="imagens-titulo" className="block text-xs font-bold uppercase tracking-[0.2em] text-orange">
                Equipe · Catálogo de imagens
              </span>
              <span className="block text-sm text-white/85 mt-1">
                {pendentes === 0 && totais.total > 0 ? (
                  <>✅ Todas as {totais.total} imagens já estão publicadas.</>
                ) : (
                  <>
                    {pendentes === 0 ? "Nenhuma imagem cadastrada" : (
                      <>
                        <strong className="text-white">{pendentes}</strong> pendentes
                        <span className="mx-1">·</span>
                        <strong className="text-white">{totais.ok}</strong> de {totais.total} publicadas
                      </>
                    )}
                  </>
                )}
              </span>
            </span>
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-white/70 transition-transform duration-200",
              aberto && "rotate-180"
            )}
            aria-hidden
          />
        </button>

        {/* Conteúdo expansível */}
        {aberto && (
          <div
            id="imagens-conteudo"
            className="mt-6 animate-fade-in"
          >
            {/* Filtros */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Categoria:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {categorias.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFiltro(cat)}
                      aria-pressed={filtro === cat}
                      className={cn(
                        "px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60",
                        filtro === cat
                          ? "bg-orange text-white border-orange"
                          : "bg-transparent text-white/70 border-white/20 hover:border-white/50"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-white/70">
                <input
                  type="checkbox"
                  checked={soPendentes}
                  onChange={(e) => setSoPendentes(e.target.checked)}
                  className="w-4 h-4 accent-orange"
                />
                Mostrar só pendentes
              </label>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {itens.map((img) => {
                const st = status[img.id] ?? "pendente";
                const fileName = img.path.split("/").pop() ?? img.path;
                const isCopied = copiadoId === img.id;
                return (
                  <article
                    key={img.id}
                    className={cn(
                      "bg-ink-soft rounded-lg overflow-hidden border flex flex-col",
                      st === "ok" ? "border-blue/30" : "border-orange/30"
                    )}
                  >
                    {/* Cabeçalho com nome + status */}
                    <header className={cn(
                      "p-3 flex items-start justify-between gap-2",
                      st === "ok" ? "bg-blue/20" : "bg-orange/20"
                    )}>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60 mb-1">
                          {img.categoria}
                          {img.opcional && (
                            <span className="ml-2 text-white/40 normal-case tracking-normal font-medium">
                              · opcional
                            </span>
                          )}
                        </p>
                        <p
                          className="font-mono font-extrabold text-xs text-white break-all leading-tight"
                          title={`Salvar como: ${fileName}`}
                        >
                          {fileName}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "shrink-0 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1",
                          st === "ok"
                            ? "bg-blue text-white"
                            : st === "erro"
                            ? "bg-red-600 text-white"
                            : "bg-orange text-white"
                        )}
                      >
                        {st === "ok" && <CheckCircle2 className="w-2.5 h-2.5" aria-hidden />}
                        {st === "ok" ? "OK" : st === "erro" ? "Erro" : "Pendente"}
                      </span>
                    </header>

                    {/* Preview */}
                    <div
                      className="relative bg-black/40 border-b border-white/5"
                      style={{
                        aspectRatio:
                          img.largura > 0 && img.altura > 0
                            ? `${img.largura} / ${img.altura}`
                            : "16/9",
                      }}
                    >
                      {st === "ok" ? (
                        <img
                          src={img.path}
                          alt={img.descricao}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center px-3">
                          <CameraIcon className="w-6 h-6 text-white/40" aria-hidden />
                          <p className="text-[10px] font-bold text-white/70 tabular-nums">
                            {img.largura} × {img.altura} px
                          </p>
                          <p className="text-[9px] text-white/40">
                            {img.formato} · {img.pesoMax} KB
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Detalhes + Salvar */}
                    <div className="p-3 flex flex-col gap-2 flex-1">
                      <p className="text-[11px] text-white/85 leading-snug line-clamp-2">
                        {img.descricao}
                      </p>

                      <div className="bg-blue/20 border border-blue/30 rounded p-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-orange mb-0.5">
                          Salvar em
                        </p>
                        <p className="font-mono text-[10px] text-white/85 break-all leading-relaxed">
                          public/uploads/<strong className="text-white">{fileName}</strong>
                        </p>
                      </div>

                      <div className="flex gap-1.5 mt-auto">
                        <button
                          type="button"
                          onClick={() => copiar(`public/uploads/${fileName}`, img.id)}
                          className={cn(
                            "flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 text-[10px] font-bold rounded transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/60",
                            isCopied
                              ? "bg-blue text-white"
                              : "bg-white/10 text-white hover:bg-white/20"
                          )}
                        >
                          {isCopied ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" aria-hidden /> Copiado!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" aria-hidden /> Copiar
                            </>
                          )}
                        </button>
                        <a
                          href={`/${img.path.replace(/^\//, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-2.5 py-1.5 text-[10px] font-bold border border-white/20 rounded text-white hover:bg-white/10 transition-colors"
                        >
                          Abrir
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {itens.length === 0 && (
              <div className="text-center py-10 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-orange opacity-70" aria-hidden />
                <p className="text-white/85 font-bold text-sm">
                  Tudo pronto por aqui.
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Todas as imagens desta categoria já estão publicadas.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
