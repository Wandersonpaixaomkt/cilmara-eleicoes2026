import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturesStrip } from "@/components/sections/features-strip";
import { CommitmentBlock } from "@/components/sections/commitment-block";
import { WhyCandidacy } from "@/components/sections/why-candidacy";
import { TeamBlock } from "@/components/sections/team-block";
import { MandateMethod } from "@/components/sections/mandate-method";
import { DiagnosisSection } from "@/components/sections/diagnosis";
import { ProposalAxis } from "@/components/sections/proposal-axis";
import { Achievements } from "@/components/sections/achievements";
import { FAQ } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact-section";

export const Route = createFileRoute("/")({
  component: Home,
});

/**
 * Home institucional — Cilmara Bonfim (Deputada Estadual · AVANTE 70700)
 *
 * Página responsiva: identidade, prioridades, resultados e voto.
 * Layout adaptativo: mobile-first com breakpoints em sm/md/lg.
 */
function Home() {
  return (
    <div className="min-h-screen bg-white text-ink overflow-hidden">
      <Header />
      <main id="conteudo-principal" className="w-full">
        {/* Hero — já responsivo nativamente */}
        <Hero />

        {/* Features strip — cards flexíveis */}
        <FeaturesStrip />

        {/* Bloco de compromisso */}
        <CommitmentBlock />

        {/* Por que a candidatura */}
        <WhyCandidacy />

        {/* Equipe / Sobre */}
        <TeamBlock />

        {/* Método do mandato */}
        <MandateMethod />

        {/* Diagnóstico */}
        <DiagnosisSection />

        {/* Eixos de propostas */}
        <ProposalAxis />

        {/* Conquistas / Atuação */}
        <Achievements />

        {/* FAQ — Accordion responsivo */}
        <FAQ />

        {/* Fale com a campanha — formulário + contato + redes */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
