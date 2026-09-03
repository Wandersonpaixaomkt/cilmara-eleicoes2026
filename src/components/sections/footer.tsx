import { candidata, navPrincipal } from "@/data/site";
import { ImagesCatalog } from "@/components/ui-custom/images-catalog";

/**
 * Rodapé do site.
 * Inclui:
 *  - Identidade da candidatura
 *  - Navegação rápida
 *  - Bloco discreto "Equipe · Catálogo de imagens" (accordion)
 *  - Aviso legal e copyright
 */
export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-blue text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center" aria-hidden>
              <span className="text-white font-black text-[10px]">LOGO</span>
            </div>
            <div>
              <p className="font-extrabold">{candidata.nome} {candidata.sobrenome}</p>
              <p className="text-sm text-white/75">Deputada Estadual · <strong className="text-white">{candidata.numero}</strong></p>
            </div>
          </div>
          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navPrincipal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bloco administrativo: catálogo de imagens (accordion) */}
      <ImagesCatalog />

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/70">
          <p>© {ano} {candidata.nome} {candidata.sobrenome}. Todos os direitos reservados.</p>
          <a
            href="#imagens"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            title="Abrir catálogo de imagens do site"
          >
            <span aria-hidden>📷</span> Imagens do site
          </a>
        </div>
      </div>
    </footer>
  );
}
