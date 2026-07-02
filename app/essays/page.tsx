import type { Metadata } from "next";
import styles from "../page.module.css";
import WritingList from "../writing-list";

export const metadata: Metadata = {
  title: "Writing · Jeremy Ro",
  description: "Writing by Jeremy Ro",
};

export default function EssaysPage() {
  return (
    <main className={styles.subPage}>
      <div className={styles.subInner}>
        <a href="/" className={styles.backLink}>← home</a>
        <WritingList />
      </div>
    </main>
  );
}
