import { useEffect, useState } from "react";

/**
 * Hook para detectar se o viewport é mobile.
 *
 * Retorna `false` durante a renderização inicial (tanto no servidor quanto
 * na primeira pintura do cliente) para evitar hydration mismatch.
 * O valor real só é atribuído após o primeiro `resize` no cliente.
 */
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    onChange(); // primeira leitura só após hidratação
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
