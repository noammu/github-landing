import { GitBranch, Users, Code2, Shield, Zap, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card/card";
import styles from "./features.module.css";

const FEATURES = [
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Track every change to your code with powerful distributed version control. Branch, merge, and collaborate with ease using Git's industry-standard workflow.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with pull requests, code reviews, and integrated project management tools. Keep your team aligned and productive.",
  },
  {
    icon: Code2,
    title: "Code Hosting",
    description:
      "Host unlimited public and private repositories. Access your code from anywhere with reliable, secure cloud storage and lightning-fast performance.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Built-in security features including vulnerability scanning, secret detection, and dependency management keep your code safe and compliant.",
  },
  {
    icon: Zap,
    title: "CI/CD Automation",
    description:
      "Automate your build, test, and deployment workflows with GitHub Actions. Deploy faster and more reliably with integrated continuous delivery.",
  },
  {
    icon: Globe,
    title: "Open Source Community",
    description:
      "Join the world's largest open source community. Discover, contribute to, and learn from millions of repositories across every technology.",
  },
] as const;

export default function Features() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Core Features</h1>
          <p className={styles.sectionDescription}>
            Everything you need to build, scale, and deliver secure software
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {FEATURES.map((feature) => (
            <Card key={feature.title} className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <feature.icon size={28} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
