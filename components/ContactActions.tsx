'use client';

import styles from '@components/ContactActions.module.scss';

import * as React from 'react';

const EMAIL = 'youngjakecubes@g.ucla.edu';

const ContactActions: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <div className={styles.actions}>
      <button className={styles.cta} onClick={() => (window.location.href = `mailto:${EMAIL}`)}>
        Email me
      </button>
      <button className={`${styles.cta} ${styles.secondary}`} onClick={handleCopy}>
        {copied ? 'Copied ✓' : 'Copy email'}
      </button>
      <div className={styles.meta}>
        <span className={styles.light} aria-hidden="true" />
        <span>
          Prefer puzzles, spikeball, or a quick call. Replies in <strong>under 24 hours</strong>.
        </span>
      </div>
    </div>
  );
};

export default ContactActions;
