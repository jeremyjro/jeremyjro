import styles from "./page.module.css";
import AsciiVideo from "./ascii-video";

// Playlist: plays each clip in order, then loops back to the first.
// Add, remove, or reorder entries here to change what plays on the hero.
const VIDEO_SRC = [
  "/ascii-hero.mp4",
  "/hero-1.mp4",
  "/hero-2.mp4",
  "/hero-3.mp4",
];
const RULE = "─".repeat(44);

export default function Home() {
  return (
    <div className={styles.root}>

      {/* ── Hero: ASCII video ── */}
      <section className={styles.hero}>
        <div className={styles.videoWrap}>
          <AsciiVideo src={VIDEO_SRC} />
        </div>

        <div className={styles.heroText}>
          <h1 className={styles.heroName}>jeremy ro</h1>
        </div>

        <a href="#about" className={styles.scrollHint} aria-label="Scroll down">
          ↓
        </a>
      </section>

      {/* ── Content: parchment ── */}
      <section id="about" className={styles.content}>
        <div className={styles.inner}>

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
      </section>

    </div>
  );
}
