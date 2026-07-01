import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Work · Jeremy Ro",
  description: "Jeremy Ro — work, writing, projects, and contact",
};

const RULE = "─".repeat(44);

export default function WorkPage() {
  return (
    <main className={styles.subPage}>
      <div className={styles.subInner}>
        <a href="/" className={styles.backLink}>← home</a>

        <div className={styles.about}>
          <p>
            Growth Lead,{" "}
            <a href="https://virio.ai" className={styles.accentLink} target="_blank" rel="noopener noreferrer">
              Virio
            </a>
          </p>
          <p className={styles.muted}>Content AI Native Content Agency</p>
        </div>

        <div className={styles.gap} />

        <div className={styles.section}>
          <p className={styles.label}>writing</p>
          <div className={styles.rule}>{RULE}</div>
          <nav className={styles.linkList}>
            <a href="https://substack.com/@jeremyrooo" target="_blank" rel="noopener noreferrer" className={styles.link}>
              → substack
            </a>
            <a href="/essays" className={styles.link}>
              → essays
            </a>
          </nav>
        </div>

        <div className={styles.gap} />

        <div className={styles.section}>
          <p className={styles.label}>projects</p>
          <div className={styles.rule}>{RULE}</div>
          <nav className={styles.linkList}>
            <a href="/lexie" className={styles.link}>
              → Lexie.app
            </a>
          </nav>
        </div>

        <div className={styles.gap} />

        <div className={styles.section}>
          <p className={styles.label}>socials</p>
          <div className={styles.rule}>{RULE}</div>
          <nav className={styles.linkList}>
            <a href="https://www.linkedin.com/in/jeremyro/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              → linkedin
            </a>
            <a href="https://www.instagram.com/jeremyrooo/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              → instagram
            </a>
            <a href="https://x.com/jjeremyro" target="_blank" rel="noopener noreferrer" className={styles.link}>
              → x
            </a>
          </nav>
        </div>

        <div className={styles.gap} />

        <div className={styles.section}>
          <p className={styles.label}>contact</p>
          <div className={styles.rule}>{RULE}</div>
          <a href="mailto:jjeremyro@gmail.com" className={styles.link}>
            → jjeremyro@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
