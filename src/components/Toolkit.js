'use client';
import ScrollReveal from './ScrollReveal';
import styles from './Toolkit.module.css';

/* ── SVG Icon Components ── */
const icons = {
  research: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      <path d="M11 8v6"/><path d="M8 11h6"/>
    </svg>
  ),
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  email: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  browser: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  docs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
    </svg>
  ),
  tasks: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  images: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  agents: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  slides: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
};

const heroFeatures = [
  {
    key: 'research',
    icon: icons.research,
    title: 'Deep Research',
    desc: 'Your agent searches across dozens of sources, cross-references data, and delivers comprehensive reports — all in minutes, not hours.',
    detail: 'Multi-source analysis',
  },
  {
    key: 'code',
    icon: icons.code,
    title: 'Code & Execute',
    desc: 'Write, debug, and run code in any language. Your agent doesn\'t just generate — it executes in a secure sandboxed environment.',
    detail: 'Sandboxed runtime',
  },
];

const secondaryFeatures = [
  { icon: icons.email, title: 'Email', desc: 'Send, read, and manage emails autonomously.' },
  { icon: icons.phone, title: 'Phone Calls', desc: 'Make and receive calls on your behalf.' },
  { icon: icons.browser, title: 'Web Browser', desc: 'Navigate, click, and extract data from any site.' },
  { icon: icons.docs, title: 'Documents', desc: 'Create, edit, and analyze documents.' },
  { icon: icons.tasks, title: 'Task Board', desc: 'Manage tasks and track progress visually.' },
  { icon: icons.images, title: 'Image Generation', desc: 'Create custom visuals and graphics on demand.' },
  { icon: icons.agents, title: 'Spawn Subagents', desc: 'Delegate subtasks to specialized agents.' },
  { icon: icons.slides, title: 'Presentations', desc: 'Build slide decks with compelling narratives.' },
];

export default function Toolkit() {
  return (
    <section className={`section-padding ${styles.toolkit}`} id="toolkit">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">
              Everything your agent needs to do real work.
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Hero Features ── */}
        <div className={styles.heroGrid}>
          {heroFeatures.map((f, i) => (
            <ScrollReveal key={f.key} delay={i + 1}>
              <div className={styles.heroCard}>
                <div className={styles.heroIcon}>{f.icon}</div>
                <div className={styles.heroText}>
                  <h3 className={styles.heroTitle}>{f.title}</h3>
                  <p className={styles.heroDesc}>{f.desc}</p>
                </div>
                <span className={styles.heroBadge}>{f.detail}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Secondary Features ── */}
        <ScrollReveal delay={3}>
          <div className={styles.secondaryGrid}>
            {secondaryFeatures.map((f) => (
              <div key={f.title} className={styles.secondaryCard}>
                <div className={styles.secondaryIcon}>{f.icon}</div>
                <div>
                  <h4 className={styles.secondaryTitle}>{f.title}</h4>
                  <p className={styles.secondaryDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
