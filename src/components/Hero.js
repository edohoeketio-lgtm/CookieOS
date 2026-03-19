import ScrollReveal from './ScrollReveal';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.content}`}>
        <ScrollReveal>
          <h1 className={styles.headline}>
            Your AI agent.<br />
            Your desktop.<br />
            Your rules.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className={styles.subtext}>
            An autonomous agent that lives on your machine and actually does the work for you. 
            No cloud. Complete privacy. Real results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className={styles.actions}>
            <a href="#cta" className="btn btn--primary">Download for Mac</a>
            <a href="#toolkit" className="btn btn--ghost">Watch Tutorial ›</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
