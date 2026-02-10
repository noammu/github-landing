import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>
          This is an informational page about GitHub. Visit{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>{" "}
          for the official GitHub platform.
        </p>
      </div>
    </footer>
  );
}
