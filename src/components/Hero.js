import ScrollReveal from './ScrollReveal';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow} />
      <div className={`container ${styles.content}`}>
        <ScrollReveal>
          <h1 className={styles.headline}>
            Give your desktop a brain.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className={styles.subtext}>
            Download CookieOS and put your AI agent to work. No cloud. No setup. Just results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className={styles.actions}>
            <a href="#download" className={`btn btn--primary ${styles.ctaButton}`}>
              Download for macOS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.downloadIcon}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
