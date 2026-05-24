import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* ── Name ── */}
        <header className={styles.header}>
          <h1 className={styles.name}>jeremy ro</h1>
          <div className={styles.rule}>
            {"─".repeat(32)}
          </div>
        </header>

        {/* ── About ── */}
        <section className={styles.about}>
          <p>founder, <a href="https://virio.ai" className={styles.accentLink}>virio</a></p>
          <p className={styles.muted}>building ai for linkedin</p>
        </section>

        <div className={styles.spacer} />

        {/* ── Writing ── */}
        <section className={styles.section}>
          <p className={styles.label}>writing</p>
          <div className={styles.rule} />
          <ul className={styles.list}>
            <li>
              <a
                href="https://www.linkedin.com/in/jeremyro/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                → notes on linkedin
              </a>
            </li>
          </ul>
        </section>

        <div className={styles.spacer} />

        {/* ── Links ── */}
        <section className={styles.section}>
          <p className={styles.label}>elsewhere</p>
          <div className={styles.rule} />
          <nav className={styles.list}>
            <a
              href="https://github.com/jeremyjro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              → github
            </a>
            <a
              href="https://www.linkedin.com/in/jeremyro/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              → linkedin
            </a>
            <a href="mailto:jeremy@virio.ai" className={styles.link}>
              → jeremy@virio.ai
            </a>
          </nav>
        </section>

      </div>
    </main>
  );
}
