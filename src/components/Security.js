import ScrollReveal from './ScrollReveal';
import styles from './Security.module.css';

/* ── SVG Icons ── */
const icons = {
  enclave: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  noTelemetry: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
    </svg>
  ),
  localhost: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  approval: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  audit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
};

const features = [
  { icon: icons.enclave,     title: 'Secure enclave',          desc: 'Your agent runs in a hardened container with all capabilities dropped by default.' },
  { icon: icons.noTelemetry, title: 'Zero telemetry',          desc: 'No analytics, no tracking, no data collection. Ever.' },
  { icon: icons.localhost,   title: 'Localhost only',           desc: 'Network access bound to your machine — invisible to the outside world.' },
  { icon: icons.approval,    title: 'Explicit approval',       desc: 'Every action your agent takes requires your permission first.' },
  { icon: icons.audit,       title: 'Full audit trail',        desc: 'See exactly what your agent reads, writes, and executes.' },
  { icon: icons.lock,        title: 'No privilege escalation', desc: 'Your agent can never grant itself more access than you\'ve allowed.' },
];

export default function Security() {
  return (
    <section className={`section-padding ${styles.security}`} id="security">
      <div className="container">
        <div className={styles.layout}>
          {/* Left — Headline */}
          <ScrollReveal>
            <div className={styles.header}>
              <p className="section-label">Privacy First</p>
              <h2 className="section-title">
                Your data never leaves your machine.
              </h2>
              <p className="section-subtitle">
                CookieOS runs entirely on your desktop. No cloud. No third-party servers. Everything stays with you.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Feature List */}
          <div className={styles.featureList}>
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={Math.min(i + 1, 6)}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div className={styles.featureText}>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
