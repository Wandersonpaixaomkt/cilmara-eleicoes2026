import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Faixa CTA horizontal navy com formulário inline (estilo da referência):
 * - Título + subtítulo à esquerda
 * - Campos Nome / E-mail / Mensagem + botão laranja à direita
 */
export function CtaFormStrip() {
  return (
    <section id="apoiador" className="bg-blue text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
              Pronto para construir essa campanha com a gente?
            </h2>
            <p className="text-white/80 mt-3 leading-relaxed">
              Cadastre seus dados e receba novidades, materiais e convites para ações da campanha.
            </p>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Nome completo"
              className="h-12 px-4 rounded-md text-sm text-ink placeholder:text-ink-soft bg-white"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="h-12 px-4 rounded-md text-sm text-ink placeholder:text-ink-soft bg-white"
              required
            />
            <input
              type="text"
              placeholder="Cidade / Estado"
              className="h-12 px-4 rounded-md text-sm text-ink placeholder:text-ink-soft bg-white sm:col-span-2"
            />
            <Button
              type="submit"
              className="sm:col-span-2 bg-orange hover:bg-orange-700 text-white font-extrabold h-12 rounded-md border-0"
            >
              Quero me cadastrar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
