import { candidata } from "@/data/site";

/**
 * Rodapé institucional enxuto.
 * Estrutura padrão de site:
 *   - Identidade (logo + nome + cargo)
 *   - Links rápidos
 *   - Copyright
 */
export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-ink-soft border-t border-ink-100 text-ink-soft">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:items-center md:text-left">
          {/* Identidade */}
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-md bg-blue flex items-center justify-center text-white font-black text-[10px]"
              aria-hidden
            >
              LOGO
            </span>
            <p className="text-sm font-bold text-ink">
              {candidata.nome} {candidata.sobrenome} ·{" "}
              <span className="text-ink-soft font-medium">
                {candidata.cargo} · {candidata.numero}
              </span>
            </p>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
              <li>
                <a href="#inicio" className="hover:text-blue transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-blue transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#propostas" className="hover:text-blue transition-colors">
                  Propostas
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Linha divisória */}
        <div className="my-6 border-t border-ink-100" />

        {/* Copyright */}
        <p className="text-center text-xs text-ink-soft">
          © {ano} {candidata.nome} {candidata.sobrenome} · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
