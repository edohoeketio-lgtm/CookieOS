import ScrollReveal from './ScrollReveal';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <section className={styles.cta} id="cta">
        <div className={styles.ctaMesh}>
          <div className={styles.ctaOrb1}></div>
          <div className={styles.ctaOrb2}></div>
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <ScrollReveal>
            <h2 className={styles.ctaHeadline}>
              Give your desktop <span className="gradient-text">a brain.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Download CookieOS and put your AI agent to work. No cloud. No setup. Just results.
            </p>
            <a href="#" className="btn btn--primary">
              Download for macOS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Links */}
      <div className={`container ${styles.bottom}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>🍪 CookieOS</span>
            <p className={styles.footerTagline}>
              Autonomous AI agents that actually do the work for you.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Product</h4>
            <a href="#toolkit" className={styles.footerLink}>Features</a>
            <a href="#pricing" className={styles.footerLink}>Pricing</a>
            <a href="#faq" className={styles.footerLink}>FAQ</a>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Legal</h4>
            <a href="/privacy" className={styles.footerLink}>Privacy</a>
            <a href="/terms" className={styles.footerLink}>Terms</a>
            <a href="/security" className={styles.footerLink}>Security</a>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <a href="https://twitter.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://discord.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2026 CookieOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
