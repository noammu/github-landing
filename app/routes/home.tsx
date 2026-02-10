import { Github, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button/button";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <Github className={styles.heroIcon} size={64} strokeWidth={1.5} />
          <h1 className={styles.heroTitle}>Where the world builds software</h1>
          <p className={styles.heroDescription}>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub—the largest and most advanced development platform
            in the world.
          </p>
          <div className={styles.heroActions}>
            <Button asChild size="lg" className={styles.primaryButton}>
              <a
                href="https://github.com/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up for GitHub
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={styles.secondaryButton}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
