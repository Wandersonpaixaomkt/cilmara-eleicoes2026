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
import { CtaFormStrip } from "@/components/sections/cta-form-strip";
import { HowToVote } from "@/components/sections/how-to-vote";

export const Route = createFileRoute("/")({
  component: Home,
});

/**
 * Home institucional — Cilmara Bonfim (Deputada Estadual · AVANTE 70700)
 *
 * Página objetiva: identidade, prioridades, resultados e voto.
 */
function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <FeaturesStrip />
        <CommitmentBlock />
        <WhyCandidacy />
        <TeamBlock />
        <MandateMethod />
        <DiagnosisSection />
        <ProposalAxis />
        <Achievements />
        <FAQ />
        <CtaFormStrip />
        <HowToVote />
      </main>
      <Footer />
    </div>
  );
}
