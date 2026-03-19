import ScrollReveal from './ScrollReveal';
import styles from './ThinkingAgent.module.css';

const useCases = [
  'Email campaigns',
  'Market research',
  'Code reviews',
  'Data analysis',
  'Content creation',
  'Lead generation',
  'Financial reports',
  'Competitive analysis',
  'Social media',
  'Technical docs',
  'Customer support',
  'Full codebases',
];

export default function ThinkingAgent() {
  return (
    <section className={`section-padding ${styles.thinking}`} id="thinking">
      <div className="container">
        <div className={styles.layout}>
          {/* Left — Headline */}
          <ScrollReveal>
            <div className={styles.headline}>
              <p className="section-label">Use Cases</p>
              <h2 className={styles.bigText}>
                Don&apos;t give it tasks.<br />
                Give it projects.
              </h2>
              <p className={styles.desc}>
                One agent, thousands of use cases. From emails to research 
                to full campaigns — think bigger.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Numbered Use Case List */}
          <ScrollReveal delay={1}>
            <div className={styles.useCases}>
              {useCases.map((uc, i) => (
                <div key={uc} className={styles.useCase}>
                  <span className={styles.useCaseNumber}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.useCaseTitle}>{uc}</span>
                  <svg className={styles.useCaseArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
