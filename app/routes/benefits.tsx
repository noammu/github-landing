import styles from "./benefits.module.css";

const BENEFIT_GROUPS = [
  {
    title: "For Individual Developers",
    items: [
      "Showcase your work with a professional portfolio",
      "Learn from millions of open source projects",
      "Collaborate with developers worldwide",
      "Free unlimited private repositories",
      "Build your reputation in the developer community",
    ],
  },
  {
    title: "For Teams & Organizations",
    items: [
      "Streamline development workflows and increase productivity",
      "Enforce security policies and compliance requirements",
      "Scale from startups to enterprise with flexible plans",
      "Integrate with your favorite development tools",
      "Advanced insights and analytics for better decisions",
    ],
  },
] as const;

export default function Benefits() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Why developers choose GitHub</h1>
          <p className={styles.sectionDescription}>The tools and community that accelerate software development</p>
        </div>
        <div className={styles.benefitsGrid}>
          {BENEFIT_GROUPS.map((group) => (
            <div key={group.title} className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>{group.title}</h3>
              <ul className={styles.benefitList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
