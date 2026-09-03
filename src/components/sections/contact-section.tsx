import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconCard } from "@/components/ui-custom/icon-card";
import { canaisDiretos } from "@/data/site";

type Status = "idle" | "success";

/**
 * Seção "Contato" — Fale com a equipe.
 * - Cards com canais diretos (WhatsApp, telefone, e-mail, endereço)
 * - Formulário controlado com validação HTML5
 * - Mensagem de sucesso com reset automático (limpa o timer ao desmontar)
 */
export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Limpa o timer ao desmontar para evitar "state update on unmounted component"
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <Section id="contato" fundo="white" py="lg">
      <SectionTitle
        eyebrow="Fale conosco"
        titulo="Fale com a equipe"
        subtitulo="Envie uma mensagem ou entre em contato diretamente pelos canais oficiais."
        corLinha="orange"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Coluna de canais */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-soft">
            Canais diretos
          </h3>
          <IconCard icone={MessageCircle} titulo="WhatsApp" descricao={canaisDiretos.whatsapp} cor="orange" />
          <IconCard icone={Phone} titulo="Telefone" descricao={canaisDiretos.telefone} cor="blue" />
          <IconCard icone={Mail} titulo="E-mail" descricao={canaisDiretos.email} cor="blue" />
          <IconCard icone={MapPin} titulo="Endereço" descricao={canaisDiretos.endereco} cor="orange" />
        </div>

        {/* Formulário */}
        <div className="lg:col-span-2">
          <div className="card-flat p-6 md:p-8">
            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-blue-soft text-blue flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-extrabold text-ink">Mensagem enviada!</h3>
                <p className="text-sm text-ink-soft mt-2">
                  A equipe da campanha responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <h3 className="text-lg font-extrabold text-ink">Envie uma mensagem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contato-nome" className="text-sm font-bold text-ink">Nome</Label>
                    <Input
                      id="contato-nome"
                      required
                      value={form.nome}
                      onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                      placeholder="Seu nome"
                      className="h-12 rounded-lg border-ink-soft"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contato-email" className="text-sm font-bold text-ink">E-mail</Label>
                    <Input
                      id="contato-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="seu@email.com"
                      className="h-12 rounded-lg border-ink-soft"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contato-assunto" className="text-sm font-bold text-ink">Assunto</Label>
                  <Input
                    id="contato-assunto"
                    required
                    value={form.assunto}
                    onChange={(e) => setForm((f) => ({ ...f, assunto: e.target.value }))}
                    placeholder="Assunto da mensagem"
                    className="h-12 rounded-lg border-ink-soft"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contato-mensagem" className="text-sm font-bold text-ink">Mensagem</Label>
                  <Textarea
                    id="contato-mensagem"
                    required
                    value={form.mensagem}
                    onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                    placeholder="Escreva sua mensagem..."
                    className="min-h-[140px] rounded-lg border-ink-soft resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-blue hover:bg-blue-700 text-white font-extrabold h-12 px-6 rounded-lg border-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
