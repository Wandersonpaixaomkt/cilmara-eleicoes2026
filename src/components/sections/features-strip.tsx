import { Target, Shield, TrendingUp, HeadphonesIcon } from "lucide-react";

/**
 * Faixa horizontal de 4 features/cards com ícones (estilo "Expertise / Confiança / Performance / Acompanhamento").
 */
export function FeaturesStrip() {
  const features = [
    {
      icon: Target,
      titulo: "Propostas concretas",
      desc: "Ações específicas para os municípios do Pará.",
    },
    {
      icon: Shield,
      titulo: "Compromisso público",
      desc: "Atuação fiscalizada e prestação de contas aberta.",
    },
    {
      icon: TrendingUp,
      titulo: "Resultados reais",
      desc: "Histórico de entregas e atuação em inclusão.",
    },
    {
      icon: HeadphonesIcon,
      titulo: "Acessibilidade",
      desc: "Comunicação em Libras, legendas e canais abertos.",
    },
  ];

  return (
    <section className="bg-white border-y border-ink-soft">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-ink-soft">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-6 md:p-7">
              <div className="w-10 h-10 rounded-full border-2 border-blue text-blue flex items-center justify-center flex-shrink-0">
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-ink leading-snug">{f.titulo}</h3>
                <p className="text-xs text-ink-soft leading-relaxed mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
