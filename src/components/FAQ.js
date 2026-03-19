'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What does "Lifetime" mean?',
    a: 'Pay once, own it forever. No subscriptions, no renewals, no expiration. You get CookieOS plus every future update at no extra cost. Once all 100 slots are claimed, this offer is gone.',
  },
  {
    q: 'Which AI models does CookieOS support?',
    a: 'CookieOS lets you plug in your own API keys from providers like OpenAI, Anthropic, Google, Mistral, or any OpenAI-compatible endpoint. You pay your provider directly at their rates — we never add a markup. Your keys are stored locally and never leave your machine.',
  },
  {
    q: 'Can I run local models?',
    a: 'Yes. CookieOS works with Ollama, LM Studio, and any local inference server. Run models entirely on your hardware with zero API costs and full privacy.',
  },
  {
    q: 'Is my data really private?',
    a: 'Completely. Your agent runs locally on your machine in its own safe space. Your files, conversations, API keys, and data never leave your device unless you explicitly connect an external service.',
  },
  {
    q: 'What platforms are supported?',
    a: 'CookieOS is available now for macOS (Apple Silicon). Intel Mac and Windows support are coming soon. Check the downloads page for the latest builds.',
  },
  {
    q: 'What can the agent actually do?',
    a: 'Your agent runs in its own container environment with a real desktop. It can browse the web, manage files, run code, send messages, and execute multi-step tasks autonomously — all while you watch in real time.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={`section-padding ${styles.faq}`} id="faq">
      <div className={`container container--narrow`}>
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">
              Questions? <span className="gradient-text">Answers.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 6)}>
              <div className={`${styles.item} ${open === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  id={`faq-q-${i}`}
                >
                  <span>{faq.q}</span>
                  <span className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3.75V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className={styles.answer} role="region" aria-labelledby={`faq-q-${i}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
