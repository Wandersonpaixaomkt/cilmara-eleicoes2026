import { ArrowRight, Shield, HeartHandshake, Accessibility, Stethoscope, GraduationCap, Briefcase } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";

/**
 * Grid de bandeiras e causas no estilo "Serviços" da referência.
 * - Eyebrow + título + link "Ver todos"
 * - 3 colunas (2 linhas) com cards white: ícone circular azul, título, descrição e seta
 */
export function ServicesGrid() {
  const servicos = [
    { id: "s-1", icon: Accessibility,   titulo: "Acessibilidade e direitos",     desc: "Inclusão comunicacional, Libras, mobilidade acessível e serviços públicos para todos." },
    { id: "s-2", icon: HeartHandshake,  titulo: "Cuidado com as famílias",       desc: "Rede de apoio para mães atípicas, cuidadoras e pessoas com deficiência." },
    { id: "s-3", icon: Stethoscope,     titulo: "Saúde e reabilitação",          desc: "Atendimento prioritário, fluxo de Ciptea e continuidade de medicamentos." },
    { id: "s-4", icon: GraduationCap,   titulo: "Educação inclusiva",            desc: "Mediador escolar, escola bilíngue e qualificação profissional para todos." },
    { id: "s-5", icon: Shield,          titulo: "Proteção e segurança",          desc: "Combate à violência, defesa de idosos e canais de denúncia acessíveis." },
    { id: "s-6", icon: Briefcase,       titulo: "Emprego e renda",               desc: "Selo Empresa Inclusiva, qualificação e inclusão produtiva no Pará." },
  ];

  return (
    <Section id="bandeiras" fundo="soft" className="!py-20 md:!py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-3">BANDEIRAS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            Causas e bandeiras de mandato
          </h2>
          <div className="h-1 w-14 bg-orange rounded-full mt-4" />
        </div>
        <a href="#propostas" className="inline-flex items-center gap-1 text-blue font-extrabold text-sm hover:gap-2 transition-all self-start md:self-auto">
          Ver todas as bandeiras <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicos.map((s) => (
          <a
            key={s.id}
            href="#propostas"
            className="card-flat p-6 flex items-start gap-4 group bg-white"
          >
            <div className="w-12 h-12 rounded-full border-2 border-blue text-blue flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-extrabold text-ink leading-snug">{s.titulo}</h3>
              <p className="text-xs text-ink-soft leading-relaxed mt-1.5">{s.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-blue group-hover:translate-x-1 transition-transform self-center flex-shrink-0" />
          </a>
        ))}
      </div>
    </Section>
  );
}
