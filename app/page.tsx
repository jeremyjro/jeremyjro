import styles from "./page.module.css";
import AsciiVideo from "./ascii-video";

// Replace with your own video — ideally a short loop of yourself or cinematic footage.
// Must be CORS-enabled if hosted externally, or place in /public as /video.mp4.
const VIDEO_SRC = "/ascii-hero.mp4";

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
              founder,{" "}
              <a href="https://virio.ai" className={styles.accentLink} target="_blank" rel="noopener noreferrer">
                virio
              </a>
            </p>
            <p className={styles.muted}>building ai for linkedin</p>
          </div>

          <div className={styles.gap} />

          <div className={styles.section}>
            <p className={styles.label}>writing</p>
            <div className={styles.rule}>{"─".repeat(32)}</div>
            <a
              href="https://www.linkedin.com/in/jeremyro/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              → notes on linkedin
            </a>
          </div>

          <div className={styles.gap} />

          <div className={styles.section}>
            <p className={styles.label}>elsewhere</p>
            <div className={styles.rule}>{"─".repeat(32)}</div>
            <nav className={styles.linkList}>
              <a href="https://github.com/jeremyjro" target="_blank" rel="noopener noreferrer" className={styles.link}>
                → github
              </a>
              <a href="https://www.linkedin.com/in/jeremyro/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                → linkedin
              </a>
              <a href="mailto:jeremy@virio.ai" className={styles.link}>
                → jeremy@virio.ai
              </a>
            </nav>
          </div>

        </div>
      </section>

    </div>
  );
}
