import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Lexie.app · Jeremy Ro",
  description: "Lexie.app by Jeremy Ro",
};

export default function LexiePage() {
  return (
    <main className={styles.subPage}>
      <div className={styles.subInner}>
        <a href="/" className={styles.backLink}>← home</a>
        <p className={styles.subKicker}>project</p>
        <h1 className={styles.subTitle}>Lexie.app</h1>
        <p className={styles.subCopy}>
          A minimal project page for Lexie.app. More soon.
        </p>
        <p className={styles.subMeta}>Building in public, slowly and intentionally.</p>
      </div>
    </main>
  );
}
