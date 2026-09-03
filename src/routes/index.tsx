import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { CommitmentBlock } from "@/components/sections/commitment-block";
import { AboutSection } from "@/components/sections/about-section";
import { ProposalAxis } from "@/components/sections/proposal-axis";
import { Achievements } from "@/components/sections/achievements";
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
        <CommitmentBlock />
        <AboutSection />
        <ProposalAxis />
        <Achievements />
        <HowToVote />
      </main>
      <Footer />
    </div>
  );
}
