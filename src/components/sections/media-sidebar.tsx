import { Megaphone, Calendar, ImageIcon, Video, FileText } from "lucide-react";
import { mediaSidebar, type MediaSidebarItem } from "@/data/site";
import { PlaceholderImage } from "@/components/ui-custom/placeholder-image";
import { Badge } from "@/components/ui-custom/badge";

const tipoIcone = (tipo: MediaSidebarItem["tipo"]) => {
  switch (tipo) {
    case "banner":   return FileText;
    case "imagem":   return ImageIcon;
    case "video":    return Video;
    case "agenda":   return Calendar;
    case "campanha": return Megaphone;
    default:         return Megaphone;
  }
};

/**
 * Coluna lateral de mídia (institucional).
 * - Pensada para ~20-25% da largura no desktop
 * - Reutilizável em diferentes seções
 * - Em mobile, deve ser inserida entre blocos (não lateral)
 */
export function MediaSidebar() {
  return (
    <aside
      aria-label="Mídia institucional"
      className="space-y-5 lg:sticky lg:top-24"
    >
      {mediaSidebar.map((item) => {
        const Icon = tipoIcone(item.tipo);
        return (
          <article
            key={item.id}
            className="card-flat overflow-hidden flex flex-col"
          >
            <div className="aspect-video bg-ink-soft relative">
              <PlaceholderImage
                texto={item.alt}
                aspect="auto"
                fluid
                className="rounded-none border-0"
              />
              <Badge
                variant={item.tipo === "agenda" ? "orange" : "blue"}
                estilo="filled"
                className="absolute top-2 left-2"
              >
                <Icon className="w-3 h-3" />
                {item.tipo}
              </Badge>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h4 className="text-sm font-extrabold text-ink leading-snug">
                {item.titulo}
              </h4>
              {item.descricao && (
                <p className="text-xs text-ink-soft leading-relaxed">{item.descricao}</p>
              )}
              {item.url && item.url !== "#" && (
                <a
                  href={item.url}
                  className="mt-1 text-xs font-bold text-blue hover:text-blue-deep transition-colors"
                >
                  Saiba mais →
                </a>
              )}
            </div>
          </article>
        );
      })}
    </aside>
  );
}
