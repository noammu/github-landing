import { TrendingUp, Code2, Globe, Shield } from "lucide-react";
import styles from "./statistics.module.css";

const STATS = [
  {
    icon: TrendingUp,
    number: "100M+",
    label: "Developers",
    description: "Developers worldwide trust GitHub to build amazing things together",
  },
  {
    icon: Code2,
    number: "330M+",
    label: "Repositories",
    description: "Public and private repositories hosting code in every programming language",
  },
  {
    icon: Globe,
    number: "4M+",
    label: "Organizations",
    description: "Companies and teams of all sizes rely on GitHub for their development",
  },
  {
    icon: Shield,
    number: "90%",
    label: "Fortune 100",
    description: "Of Fortune 100 companies use GitHub to build and secure software",
  },
] as const;

export default function Statistics() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>GitHub by the numbers</h1>
          <h1 className={styles.sectionTitle}>THE NUMBERS MASON THE NUMBERSSSS</h1>
          <p className={styles.sectionDescription}>The world&apos;s leading platform for software development</p>
        </div>
        ANOTHA CHANGEEEEEE @$^%*^89678976436236!#$#%*&%^*
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <stat.icon className={styles.statIcon} size={32} />
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
          LALALILALALA
        </div>
      </div>
    </section>
  );
}
