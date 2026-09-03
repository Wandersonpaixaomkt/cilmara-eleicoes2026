import { useState } from "react";
import { Download, FileText, Image as ImageIcon, Video, FileArchive, FileImage } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { Badge } from "@/components/ui-custom/badge";
import { materiais, type CategoriaMaterial } from "@/data/site";
import { cn } from "@/lib/utils";

const categorias: ("Todos" | CategoriaMaterial)[] = [
  "Todos",
  "Fotos",
  "Logos",
  "Cards",
  "Vídeos",
  "Wallpapers",
  "Materiais informativos",
  "Outros",
];

const formatoIcone = (formato: string) => {
  if (formato === "MP4") return Video;
  if (formato === "PDF") return FileText;
  if (formato === "ZIP") return FileArchive;
  if (formato === "PNG") return FileImage;
  return ImageIcon;
};

/**
 * Seção "Materiais" — central de materiais para divulgação.
 * - Filtro por categoria
 * - Cards com thumbnail, nome, formato e botão de download
 */
export function DownloadCenter() {
  const [categoria, setCategoria] = useState<"Todos" | CategoriaMaterial>("Todos");

  const itensFiltrados =
    categoria === "Todos" ? materiais : materiais.filter((m) => m.categoria === categoria);

  return (
    <Section id="materiais" fundo="white" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="Divulgação"
        titulo="Materiais para divulgação"
        subtitulo="Baixe peças oficiais para ajudar a divulgar a campanha."
        corLinha="blue"
      />

      {/* Filtro por categoria */}
      <div className="flex flex-wrap items-center gap-2 justify-center mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategoria(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold border-2 transition-colors",
              categoria === cat
                ? "bg-blue text-white border-blue"
                : "bg-white text-ink-soft border-ink-soft hover:border-blue hover:text-blue"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {itensFiltrados.map((material) => {
          const Icon = formatoIcone(material.formato);
          return (
            <article key={material.id} className="card-flat overflow-hidden flex flex-col">
              {/* Thumbnail */}
              <div className="aspect-video bg-ink-soft border-b border-ink-soft flex items-center justify-center">
                <Icon className="w-10 h-10 text-ink-soft" aria-hidden />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="blue" estilo="soft">{material.categoria}</Badge>
                  <Badge variant="orange" estilo="outline">{material.formato}</Badge>
                </div>
                <h3 className="text-sm font-extrabold text-ink leading-snug">
                  {material.titulo}
                </h3>
                {material.tamanho && (
                  <p className="text-xs text-ink-soft">{material.tamanho}</p>
                )}

                <a
                  href={material.downloadUrl}
                  download
                  className="mt-auto inline-flex items-center justify-center gap-1.5 text-sm font-bold text-blue hover:text-blue-deep transition-colors pt-3 border-t border-ink-soft"
                >
                  <Download className="w-4 h-4" />
                  Abrir / Baixar
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
