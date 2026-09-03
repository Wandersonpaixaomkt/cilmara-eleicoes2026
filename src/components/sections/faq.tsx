import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { faqItems } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Seção "Perguntas Frequentes" (FAQ).
 * Accordion implementado com estados simples (sem lib externa).
 * Cada item usa botão acessível e aria-expanded.
 */
export function FAQ() {
  const [aberto, setAberto] = useState<string | null>(null);

  return (
    <Section id="faq" fundo="soft" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="FAQ"
        titulo="Perguntas frequentes"
        subtitulo="Tire suas dúvidas sobre a candidatura, propostas e canais oficiais."
        corLinha="blue"
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item) => {
          const isOpen = aberto === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                "card-flat overflow-hidden transition-colors",
                isOpen && "border-blue"
              )}
            >
              <button
                type="button"
                onClick={() => setAberto(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-${item.id}`}
                className="w-full flex items-center justify-between gap-4 text-left p-5"
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm md:text-base font-extrabold text-ink leading-snug">
                    {item.pergunta}
                  </span>
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-blue flex-shrink-0 transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>

              <div
                id={`faq-${item.id}`}
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm md:text-base text-ink-soft leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
