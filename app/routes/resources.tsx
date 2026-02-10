import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button/button";
import styles from "./resources.module.css";

const RESOURCES = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    href: "https://docs.github.com",
  },
  {
    title: "Features",
    description: "Explore all GitHub features and capabilities",
    href: "https://github.com/features",
  },
  {
    title: "Pricing",
    description: "Find the perfect plan for your needs",
    href: "https://github.com/pricing",
  },
  {
    title: "GitHub Blog",
    description: "Latest news, updates, and developer stories",
    href: "https://github.blog",
  },
] as const;

export default function Resources() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h1 className={styles.ctaTitle}>Ready to get started?</h1>
          <p className={styles.ctaDescription}>
            Join millions of developers and start building on the world&apos;s
            leading platform
          </p>
          <div className={styles.ctaActions}>
            <Button asChild size="lg" className={styles.primaryButton}>
              <a
                href="https://github.com/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create your free account
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>

        <div className={styles.resourcesSection}>
          <h2 className={styles.resourcesTitle}>Learn more about GitHub</h2>
          <div className={styles.resourcesGrid}>
            {RESOURCES.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >
                <div className={styles.resourceLinkContent}>
                  <span className={styles.resourceLinkTitle}>
                    {resource.title}
                  </span>
                  <ArrowRight size={16} />
                </div>
                <p className={styles.resourceLinkDescription}>
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
