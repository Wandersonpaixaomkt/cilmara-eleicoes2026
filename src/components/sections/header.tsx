import { useEffect, useState } from "react";
import { Menu, X, Vote } from "lucide-react";
import { navPrincipal, candidata } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Header sticky.
 * - Sombra sutil aparece após rolar (feedback de elevação)
 * - Detecta a seção em viewport via IntersectionObserver e marca
 *   o link correspondente com aria-current="location" (UX + a11y)
 * - Mobile: menu hambúrguer
 */
export function Header() {
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState<string>("");

  // Efeito de scroll (sombra)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const atualizarTopo = () => setScrolled(window.scrollY > 12);
    atualizarTopo();
    window.addEventListener("scroll", atualizarTopo, { passive: true });
    return () => window.removeEventListener("scroll", atualizarTopo);
  }, []);

  // Detecção de seção ativa por IntersectionObserver
  useEffect(() => {
    const ids = navPrincipal.map((n) => n.href.replace("#", "")).filter(Boolean);
    if (ids.length === 0 || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Mantém a primeira seção visível no topo como ativa
        const visiveis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
        if (visiveis[0]) {
          setSecaoAtiva(visiveis[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75] }
    );

    const elementos = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Fecha menu mobile ao navegar por hash
  useEffect(() => {
    const onHash = () => setAberto(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Bloqueia scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-blue text-white transition-shadow duration-200",
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_24px_-8px_rgba(8,22,58,0.45)]" : ""
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue"
            aria-label={`Página inicial — ${candidata.nome} ${candidata.sobrenome}`}
          >
            <div
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors"
              aria-hidden
            >
              <span className="text-white font-black text-[10px]">LOGO</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-extrabold text-white text-sm md:text-base leading-tight">
                {candidata.nome} {candidata.sobrenome}
              </p>
              <p className="text-[11px] text-white/70 font-medium tracking-wider">
                {candidata.cargo.toUpperCase()} · {candidata.numero}
              </p>
            </div>
          </a>

          {/* Navegação desktop */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Navegação principal"
          >
            {navPrincipal.slice(0, 6).map((item) => {
              const id = item.href.replace("#", "");
              const ativo = secaoAtiva === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={ativo ? "location" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm font-bold transition-colors rounded-md",
                    ativo ? "text-white" : "text-white/85 hover:text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-orange transition-all duration-200",
                      ativo ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                    aria-hidden
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA à direita */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#como-votar"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-700 text-white font-extrabold text-sm px-5 py-2.5 rounded-md uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue"
            >
              <Vote className="w-4 h-4" aria-hidden />
              Vote {candidata.numero}
            </a>
          </div>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setAberto(!aberto)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
          >
            {aberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {aberto && (
          <nav
            id="menu-mobile"
            className="lg:hidden border-t border-white/10 py-4 animate-fade-in"
            aria-label="Navegação mobile"
          >
            <ul className="flex flex-col gap-1">
              {navPrincipal.map((item) => {
                const id = item.href.replace("#", "");
                const ativo = secaoAtiva === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setAberto(false)}
                      aria-current={ativo ? "location" : undefined}
                      className={cn(
                        "block px-3 py-2.5 text-sm font-bold rounded-md transition-colors",
                        ativo
                          ? "bg-white/10 text-white"
                          : "text-white/85 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#como-votar"
                  onClick={() => setAberto(false)}
                  className="block w-full text-center bg-orange hover:bg-orange-700 text-white font-extrabold text-sm px-5 py-3 rounded-md uppercase tracking-wide"
                >
                  Vote {candidata.numero}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
