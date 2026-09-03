import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle, HandHeart } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Seção "Quero ser um apoiador".
 * Formulário completo com:
 * - Nome, telefone/WhatsApp, cidade, estado
 * - Checkbox obrigatório de autorização
 * - Estados: idle, loading, success, error
 * - Preparado para integração futura com Supabase / CRM / webhook
 */
export function SupporterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [erro, setErro] = useState<string>("");
  const [aceite, setAceite] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    estado: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceite) {
      setErro("É necessário autorizar o contato para enviar o cadastro.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErro("");

    try {
      // Integração futura: substituir por chamada real ao backend
      // (Supabase, webhook, CRM, etc.). Por enquanto, simulamos a latência.
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
      setForm({ nome: "", whatsapp: "", cidade: "", estado: "" });
      setAceite(false);
    } catch (err) {
      setStatus("error");
      setErro("Não foi possível concluir o cadastro. Tente novamente em alguns instantes.");
    }
  };

  return (
    <Section id="apoiador" fundo="soft" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="Faça parte"
        titulo="Quero ser um apoiador"
        subtitulo="Cadastre seus dados para receber novidades, materiais e convites para ações da campanha."
        corLinha="orange"
      />

      <div className="max-w-2xl mx-auto">
        <div className="card-flat p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-blue-soft text-blue flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-extrabold text-ink">Cadastro concluído!</h3>
              <p className="text-sm text-ink-soft mt-2">
                Obrigada por se juntar à campanha. Em breve você receberá novidades no WhatsApp informado.
              </p>
              <Button
                onClick={() => setStatus("idle")}
                className="mt-6 bg-blue hover:bg-blue-700 text-white font-bold border-0"
              >
                Cadastrar outra pessoa
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="nome" className="text-sm font-bold text-ink">
                    Nome completo *
                  </Label>
                  <Input
                    id="nome"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className="h-12 rounded-lg border-ink-soft"
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="whatsapp" className="text-sm font-bold text-ink">
                    Telefone / WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    required
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="h-12 rounded-lg border-ink-soft"
                    autoComplete="tel"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="cidade" className="text-sm font-bold text-ink">
                    Cidade *
                  </Label>
                  <Input
                    id="cidade"
                    required
                    value={form.cidade}
                    onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                    placeholder="Sua cidade"
                    className="h-12 rounded-lg border-ink-soft"
                    autoComplete="address-level2"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="estado" className="text-sm font-bold text-ink">
                    Estado *
                  </Label>
                  <select
                    id="estado"
                    required
                    value={form.estado}
                    onChange={(e) => setForm({ ...form, estado: e.target.value })}
                    className="w-full h-12 px-3 rounded-lg border border-ink-soft bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-blue"
                    autoComplete="address-level1"
                  >
                    <option value="">Selecione o estado</option>
                    {[
                      "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA",
                      "MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN",
                      "RS","RO","RR","SC","SP","SE","TO",
                    ].map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="aceite"
                  checked={aceite}
                  onCheckedChange={(v) => setAceite(v === true)}
                  aria-required="true"
                  className="mt-0.5"
                />
                <Label htmlFor="aceite" className="text-sm text-ink-soft leading-relaxed cursor-pointer">
                  Autorizo o contato através dos dados informados. *
                </Label>
              </div>

              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{erro}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "w-full h-12 text-white font-extrabold text-base rounded-lg border-0 transition-colors",
                  "bg-orange hover:bg-orange-700",
                  status === "loading" && "opacity-70 cursor-not-allowed"
                )}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando cadastro...
                  </>
                ) : (
                  <>
                    <HandHeart className="w-4 h-4 mr-2" />
                    Enviar cadastro
                  </>
                )}
              </Button>

              <p className="text-xs text-ink-soft text-center pt-2">
                Estrutura pronta para integração futura com banco de dados, CRM ou webhook.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
