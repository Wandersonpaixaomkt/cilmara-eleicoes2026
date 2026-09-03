import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui-custom/section";
import { IconCard } from "@/components/ui-custom/icon-card";
import { redesSociais, canaisDiretos } from "@/data/site";

const icones: Record<string, typeof Facebook> = {
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
  TikTok: MessageCircle,
  WhatsApp: MessageCircle,
};

/**
 * Seção "Redes Sociais e Canais Oficiais".
 * Cards com os ícones das redes e bloco lateral com canais diretos.
 */
export function SocialChannels() {
  return (
    <Section id="redes" fundo="white" className="!py-20 md:!py-24">
      <SectionTitle
        eyebrow="Canais oficiais"
        titulo="Redes sociais e canais de contato"
        subtitulo="Acompanhe a campanha e entre em contato pelos canais oficiais."
        corLinha="blue"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Grid de redes sociais */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-soft mb-4">
            Redes sociais
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {redesSociais.map((rede, i) => {
              const Icon = icones[rede.nome] ?? MessageCircle;
              return (
                <a
                  key={rede.id}
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-flat p-5 flex flex-col gap-3 group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      i % 2 === 0 ? "bg-blue-soft text-blue" : "bg-orange-soft text-orange"
                    }`}
                    aria-hidden
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                      {rede.nome}
                    </p>
                    <p className="text-sm font-extrabold text-ink truncate">{rede.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Canais diretos */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-soft mb-4">
            Contato direto
          </h3>
          <div className="flex flex-col gap-3">
            <IconCard
              icone={MessageCircle}
              titulo="WhatsApp"
              descricao={canaisDiretos.whatsapp}
              cor="orange"
            />
            <IconCard
              icone={Phone}
              titulo="Telefone"
              descricao={canaisDiretos.telefone}
              cor="blue"
            />
            <IconCard
              icone={Mail}
              titulo="E-mail"
              descricao={canaisDiretos.email}
              cor="blue"
            />
            <IconCard
              icone={MapPin}
              titulo="Endereço"
              descricao={canaisDiretos.endereco}
              cor="orange"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
