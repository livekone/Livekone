import React from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import WebDevComparison from './components/WebDevComparison';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import SpeedPlan from './components/SpeedPlan';
import ChatbotFeatures from './components/ChatbotFeatures';
import Pricing from './components/Pricing';
import InfluencerPlan from './components/InfluencerPlan';
import ValueProposition from './components/ValueProposition';
import FAQ from './components/FAQ';
import styles from './page.module.css';
import './page.css';

export default function App() {
  return (
    <div className={styles.page}>
      <div className="bg-white">
        <main className="pt-0">
          <section id="hero">
            <Hero />
          </section>
          <section id="features">
            <Problems />
            <WebDevComparison />
          </section>
          <section id="speed-plan">
            <SpeedPlan />
          </section>
          <section id="workflow">
            <Workflow />
          </section>
          <section id="chatbot">
            <ChatbotFeatures />
          </section>
          <section id="pricing">
            <Pricing />
          </section>
          <section id="influencer">
            <InfluencerPlan />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="support">
            <ValueProposition />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="speed-plan">
            <SpeedPlan />
          </section>
        </main>
      </div>
    </div>
  );
}
