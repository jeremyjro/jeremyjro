import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Essays · Jeremy Ro",
  description: "Essays by Jeremy Ro",
};

export default function EssaysPage() {
  return (
    <main className={styles.subPage}>
      <div className={styles.subInner}>
        <a href="/" className={styles.backLink}>← home</a>
        <p className={styles.subKicker}>essays</p>
        <h1 className={styles.subTitle}>Essays</h1>
        <p className={styles.subCopy}>
          A home for longer notes, observations, and ideas. Coming soon.
        </p>
        <p className={styles.subMeta}>For now, read the live feed on Substack.</p>
      </div>
    </main>
  );
}
