import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Toolkit from '@/components/Toolkit';
import AgentIdentity from '@/components/AgentIdentity';
import Security from '@/components/Security';
import ThinkingAgent from '@/components/ThinkingAgent';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Toolkit />
        <AgentIdentity />
        <Security />
        <ThinkingAgent />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
