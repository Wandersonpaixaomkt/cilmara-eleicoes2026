/**
 * Tenta localizar uma imagem aceitando múltiplas extensões e variações
 * de capitalização. Usa HEAD em paralelo para descobrir qual arquivo
 * existe e devolve a URL canônica (a que de fato respondeu 200).
 *
 * Útil quando o usuário salva como "hero.PNG" e o spec dizia "hero.jpg".
 *
 * **Prioridade:** PNG primeiro (permite fundo transparente, sem conflito
 * de cor com o site), depois JPG/JPEG/WebP.
 *
 * @param basePath caminho base sem extensão (ex.: "/uploads/hero")
 * @param extensões lista priorizada de extensões para testar (opcional)
 * @param signal AbortSignal opcional para cancelar requisições
 * @returns a URL que existe, ou null se nenhuma foi encontrada
 */
export async function resolveImageUrl(
  basePath: string,
  extensoes?: string[],
  signal?: AbortSignal
): Promise<string | null> {
  // Padrão prioriza PNG (transparente) > JPG > WebP
  const ordem =
    extensoes ?? [
      ".png",  ".PNG",  ".PNG",
      ".jpg",  ".jpeg", ".JPG", ".JPEG",
      ".webp", ".WEBP",
    ];

  // Garante que basePath não termine com barra nem com extensão
  const base = basePath.replace(/\/$/, "").replace(/\.(png|jpg|jpeg|webp)$/i, "");

  // Mapeia extensões e testa em paralelo
  const tentativas = ordem.map(async (ext) => {
    const url = `${base}${ext}`;
    try {
      const init: RequestInit = { method: "HEAD" };
      if (signal) init.signal = signal;
      const r = await fetch(url, init);
      return r.ok ? url : null;
    } catch {
      return null;
    }
  });

  const resultados = await Promise.all(tentativas);
  return resultados.find((u): u is string => Boolean(u)) ?? null;
}

/**
 * Versão "fire-and-forget" para uso em componentes React.
 * Atualiza o estado com a URL encontrada (ou null).
 */
export function detectImageUrl(
  basePath: string,
  onResolved: (url: string | null) => void,
  signal?: AbortSignal
): void {
  resolveImageUrl(basePath, undefined, signal).then(onResolved).catch(() => onResolved(null));
}
