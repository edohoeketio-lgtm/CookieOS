'use client';
import ScrollReveal from './ScrollReveal';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Lifetime',
    tagline: 'Pay once, own it forever.',
    price: '$299',
    period: 'one-time',
    note: 'Only 100 licenses available',
    features: [
      'One local AI agent',
      'Container environment',
      'Limited skills',
      'Local Messenger',
      'Controlled file access',
      'Bring your own API keys',
    ],
    cta: 'Claim License',
    href: '#',
    highlight: false,
    badge: 'Limited',
  },
  {
    name: 'Starter',
    tagline: 'Give AI its own space.',
    price: '$49',
    period: '/mo',
    note: '$490/yr — save 2 months',
    features: [
      'Four local AI agents',
      'Persistent agent memory',
      '10+ advanced skills',
      'Email & Calendar',
      'Meeting assistance',
      'Sync across 2 devices',
    ],
    cta: 'Start Free Trial',
    href: '#',
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro',
    tagline: 'Where AI goes to work.',
    price: '$199',
    period: '/mo',
    note: '$2,000/yr',
    features: [
      'Unlimited agents & skills',
      'Everything in Starter',
      'Team workspace & roles',
      'Shared agent profiles',
      'Advanced integrations',
      'Enhanced security',
    ],
    cta: 'Go Pro',
    href: '#',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    tagline: 'Intelligence at scale.',
    price: 'Custom',
    period: '',
    note: 'Volume pricing available',
    features: [
      'Everything in Pro',
      'On-prem deployment',
      'Admin console & SSO',
      'Compliance & audit trails',
      'Custom skill development',
      'Dedicated support & SLA',
    ],
    cta: 'Contact Sales',
    href: 'mailto:sales@cookieos.app',
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section className={`section-padding ${styles.pricing}`} id="pricing">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <p className="section-label">Pricing</p>
            <h2 className="section-title">
              Find the right plan for you.
            </h2>
            <p className="section-subtitle">
              Start free, upgrade when you&apos;re ready.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={Math.min(i + 1, 4)}>
              <div className={`${styles.card} ${plan.highlight ? styles.highlighted : ''}`}>
                {plan.badge && (
                  <span className={plan.highlight ? styles.popularBadge : styles.limitedBadge}>
                    {plan.badge}
                  </span>
                )}

                <div className={styles.cardTop}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planTagline}>{plan.tagline}</p>
                </div>

                <div className={styles.priceSection}>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{plan.price}</span>
                    {plan.period && <span className={styles.period}>{plan.period}</span>}
                  </div>
                  {plan.note && <p className={styles.note}>{plan.note}</p>}
                </div>

                <div className={styles.divider} />

                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={plan.href} className={styles.cta}>
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
