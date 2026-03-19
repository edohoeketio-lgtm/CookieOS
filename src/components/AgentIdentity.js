import ScrollReveal from './ScrollReveal';
import styles from './AgentIdentity.module.css';

export default function AgentIdentity() {
  return (
    <section className={`section-padding ${styles.identity}`} id="identity">
      <div className={styles.glow}></div>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.text}>
          <ScrollReveal>
            <p className="section-label">Your Personal Agent</p>
            <h2 className="section-title">
              Your Agent Has Its Own<br />
              <span className="gradient-text">Identity & Computer</span>
            </h2>
            <p className="section-subtitle">
              Your agent runs in its own space you can watch in real time — signs up for services,
              manages its own accounts, and you see exactly what it sees.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div className={styles.visual}>
            <div className={styles.agentCard}>
              <div className={styles.avatarRing}>
                <div className={styles.avatar}>🤖</div>
                <div className={styles.statusDot}></div>
              </div>
              <div className={styles.agentInfo}>
                <h3 className={styles.agentName}>Alex Agent</h3>
                <p className={styles.agentRole}>Your AI Assistant</p>
              </div>
              <div className={styles.agentStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>24/7</span>
                  <span className={styles.statLabel}>Available</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>Local</span>
                  <span className={styles.statLabel}>Runtime</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>∞</span>
                  <span className={styles.statLabel}>Memory</span>
                </div>
              </div>
            </div>

            <div className={styles.miniDesktop}>
              <div className={styles.miniWindow} style={{top: '10%', right: '-5%'}}>
                <div className={styles.miniBar}>
                  <span className={styles.miniDot}></span>
                  <span className={styles.miniDot}></span>
                  <span className={styles.miniDot}></span>
                </div>
                <div className={styles.miniContent}>
                  <div className={styles.miniLine} style={{width: '80%'}}></div>
                  <div className={styles.miniLine} style={{width: '60%'}}></div>
                  <div className={styles.miniLine} style={{width: '90%'}}></div>
                </div>
              </div>
              <div className={styles.miniWindow} style={{bottom: '5%', right: '10%'}}>
                <div className={styles.miniBar}>
                  <span className={styles.miniDot}></span>
                  <span className={styles.miniDot}></span>
                  <span className={styles.miniDot}></span>
                </div>
                <div className={styles.miniContent}>
                  <div className={styles.miniLine} style={{width: '70%', background: 'var(--accent-blue)'}}></div>
                  <div className={styles.miniLine} style={{width: '45%', background: 'var(--accent-violet)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
