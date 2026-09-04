import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { canaisDiretos, formOptions, candidata } from "@/data/site";

type Status = "idle" | "success";
type FormState = { nome: string; email: string; telefone: string; mensagem: string };

/**
 * Seção "Fale com a campanha".
 * Layout: cabeçalho centralizado, formulário à esquerda com seletor de
 * assunto, e à direita coluna de Contato (telefone / e-mail / CNPJ) +
 * Redes sociais.
 *
 * Os cards laterais usam listras coloridas no topo (azul/laranja) para
 * indicar diferentes tipos de contato.
 */
export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [assunto, setAssunto] = useState<string>(formOptions[0]?.value ?? "apoiar");
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <Section id="contato" fundo="white" py="lg">
      <SectionTitle
        eyebrow="Fale conosco"
        titulo="Fale com a campanha"
        corLinha="blue"
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* ── Formulário principal (esquerda, ocupa 2 colunas) ── */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-2 card-flat bg-white p-6 md:p-8 flex flex-col gap-5 relative overflow-hidden"
          noValidate
        >
          {/* Listra superior azul */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue" aria-hidden />

          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-ink">
              Envie uma mensagem
            </h3>
            <p className="text-sm text-ink-soft mt-1">
              Selecione o assunto e preencha seus dados.
            </p>
          </div>

          {/* Seletor de assunto */}
          <div className="space-y-1.5">
            <label
              htmlFor="contato-assunto"
              className="text-sm font-bold text-ink"
            >
              Assunto
            </label>
            <select
              id="contato-assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="w-full h-12 px-3 rounded-lg border border-ink-soft bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
            >
              {formOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Nome + Telefone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="contato-nome" className="text-sm font-bold text-ink">
                Nome
              </label>
              <input
                id="contato-nome"
                required
                value={form.nome}
                onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                placeholder="Seu nome"
                autoComplete="name"
                className="w-full h-12 px-4 rounded-lg border border-ink-soft text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contato-telefone" className="text-sm font-bold text-ink">
                Telefone
              </label>
              <input
                id="contato-telefone"
                type="tel"
                required
                value={form.telefone}
                onChange={(e) => setForm((f) => ({ ...f, telefone: e.target.value }))}
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                className="w-full h-12 px-4 rounded-lg border border-ink-soft text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="space-y-1.5">
            <label htmlFor="contato-email" className="text-sm font-bold text-ink">
              E-mail
            </label>
            <input
              id="contato-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="seu@email.com"
              autoComplete="email"
              className="w-full h-12 px-4 rounded-lg border border-ink-soft text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-colors"
            />
          </div>

          {/* Mensagem */}
          <div className="space-y-1.5">
            <label htmlFor="contato-mensagem" className="text-sm font-bold text-ink">
              Mensagem
            </label>
            <textarea
              id="contato-mensagem"
              required
              value={form.mensagem}
              onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
              placeholder="Escreva sua mensagem…"
              className="w-full min-h-[140px] p-4 rounded-lg border border-ink-soft text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue resize-none transition-colors"
            />
          </div>

          {/* Status / sucesso */}
          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="flex items-center gap-2 p-3 rounded-lg bg-blue-soft border border-blue/30 text-sm text-blue"
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              Mensagem enviada. A equipe da campanha responderá em breve.
            </div>
          )}

          {/* CTA */}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-blue hover:bg-blue-700 active:bg-blue-700 text-white font-extrabold text-base uppercase tracking-wide px-6 h-12 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-2"
          >
            <Send className="w-4 h-4" aria-hidden />
            Enviar Mensagem
          </button>
        </form>

        {/* ── Coluna lateral: Contato + Redes ── */}
        <aside className="flex flex-col gap-6">
          {/* Card de Contato */}
          <section
            aria-labelledby="contato-direto-titulo"
            className="card-flat bg-white p-6 relative overflow-hidden"
          >
            {/* Listra laranja no topo — identidade de "contato direto" */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-orange" aria-hidden />

            <h3 id="contato-direto-titulo" className="text-base font-extrabold text-ink flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue" aria-hidden />
              Contato
            </h3>

            <ul className="mt-5 space-y-5">
              {/* Telefone */}
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-blue-soft text-blue flex items-center justify-center flex-shrink-0" aria-hidden>
                  <Phone className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                    Telefone
                  </p>
                  <p className="text-sm font-extrabold text-blue tabular-nums">
                    {canaisDiretos.telefone}
                  </p>
                </div>
              </li>

              {/* E-mail */}
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-blue-soft text-blue flex items-center justify-center flex-shrink-0" aria-hidden>
                  <Mail className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                    E-mail
                  </p>
                  <p className="text-sm font-bold text-ink break-all">
                    {canaisDiretos.email}
                  </p>
                </div>
              </li>

              {/* CNPJ / Local */}
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-blue-soft text-blue flex items-center justify-center flex-shrink-0" aria-hidden>
                  <MapPin className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                    CNPJ / Local
                  </p>
                  <p className="text-sm font-bold text-ink leading-snug">
                    {candidata.cnpjCampanha}
                    <span className="block text-xs font-medium text-ink-soft">
                      {candidata.cidadeBase} · {candidata.estado}
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Card de Redes sociais */}
          <section
            aria-labelledby="redes-titulo"
            className="card-flat bg-white p-6 relative overflow-hidden"
          >
            {/* Listra laranja/magenta — tom mais marcante */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-orange" aria-hidden />

            <h3 id="redes-titulo" className="text-base font-extrabold text-ink">
              Redes sociais
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-ink-soft hover:bg-orange-soft transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-orange-soft text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      Instagram
                    </p>
                    <p className="text-sm font-extrabold text-ink">@cilmarabonfim</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-ink-soft hover:bg-blue-soft transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-blue-soft text-blue flex items-center justify-center group-hover:bg-blue group-hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      Facebook
                    </p>
                    <p className="text-sm font-extrabold text-ink">Cilmara Bonfim</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg bg-ink-soft hover:bg-red-50 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Youtube className="w-4 h-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      YouTube
                    </p>
                    <p className="text-sm font-extrabold text-ink">@cilmarabonfim</p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </Section>
  );
}
