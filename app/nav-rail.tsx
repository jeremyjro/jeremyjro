import styles from "./nav-rail.module.css";

const LINKS = [
  { label: "jro", href: "/" },
  { label: "work", href: "/comp" },
  { label: "projects", href: "/lexie" },
  { label: "writing", href: "/essays" },
];

export default function NavRail() {
  return (
    <div className={styles.rail}>
      <div className={styles.hint} />
      <nav className={styles.panel}>
        <img
          src="/jeremy-face.jpg"
          alt="Jeremy Ro"
          className={styles.face}
          width={60}
          height={60}
        />
        <ul className={styles.list}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
