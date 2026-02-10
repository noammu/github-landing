import { Github, GitBranch, Users, Code2, Shield, Zap, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Github className={styles.heroIcon} size={64} strokeWidth={1.5} />
            <h1 className={styles.heroTitle}>
              Where the world builds software
            </h1>
            <p className={styles.heroDescription}>
              Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className={styles.primaryButton}>
                <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">
                  Sign up for GitHub
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className={styles.secondaryButton}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  Explore GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core Features</h2>
            <p className={styles.sectionDescription}>
              Everything you need to build, scale, and deliver secure software
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <GitBranch size={28} />
                </div>
                <CardTitle>Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track every change to your code with powerful distributed version control. Branch, merge, and collaborate with ease using Git's industry-standard workflow.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Users size={28} />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work together seamlessly with pull requests, code reviews, and integrated project management tools. Keep your team aligned and productive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Code2 size={28} />
                </div>
                <CardTitle>Code Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Host unlimited public and private repositories. Access your code from anywhere with reliable, secure cloud storage and lightning-fast performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Shield size={28} />
                </div>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built-in security features including vulnerability scanning, secret detection, and dependency management keep your code safe and compliant.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Zap size={28} />
                </div>
                <CardTitle>CI/CD Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automate your build, test, and deployment workflows with GitHub Actions. Deploy faster and more reliably with integrated continuous delivery.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Globe size={28} />
                </div>
                <CardTitle>Open Source Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join the world's largest open source community. Discover, contribute to, and learn from millions of repositories across every technology.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why developers choose GitHub</h2>
            <p className={styles.sectionDescription}>
              The tools and community that accelerate software development
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>For Individual Developers</h3>
              <ul className={styles.benefitList}>
                <li>Showcase your work with a professional portfolio</li>
                <li>Learn from millions of open source projects</li>
                <li>Collaborate with developers worldwide</li>
                <li>Free unlimited private repositories</li>
                <li>Build your reputation in the developer community</li>
              </ul>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>For Teams & Organizations</h3>
              <ul className={styles.benefitList}>
                <li>Streamline development workflows and increase productivity</li>
                <li>Enforce security policies and compliance requirements</li>
                <li>Scale from startups to enterprise with flexible plans</li>
                <li>Integrate with your favorite development tools</li>
                <li>Advanced insights and analytics for better decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>GitHub by the numbers</h2>
            <p className={styles.sectionDescription}>
              The world's leading platform for software development
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <TrendingUp className={styles.statIcon} size={32} />
              <div className={styles.statNumber}>100M+</div>
              <div className={styles.statLabel}>Developers</div>
              <p className={styles.statDescription}>
                Developers worldwide trust GitHub to build amazing things together
              </p>
            </div>

            <div className={styles.statCard}>
              <Code2 className={styles.statIcon} size={32} />
              <div className={styles.statNumber}>330M+</div>
              <div className={styles.statLabel}>Repositories</div>
              <p className={styles.statDescription}>
                Public and private repositories hosting code in every programming language
              </p>
            </div>

            <div className={styles.statCard}>
              <Globe className={styles.statIcon} size={32} />
              <div className={styles.statNumber}>4M+</div>
              <div className={styles.statLabel}>Organizations</div>
              <p className={styles.statDescription}>
                Companies and teams of all sizes rely on GitHub for their development
              </p>
            </div>

            <div className={styles.statCard}>
              <Shield className={styles.statIcon} size={32} />
              <div className={styles.statNumber}>90%</div>
              <div className={styles.statLabel}>Fortune 100</div>
              <p className={styles.statDescription}>
                Of Fortune 100 companies use GitHub to build and secure software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Resources Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaDescription}>
              Join millions of developers and start building on the world's leading platform
            </p>
            <div className={styles.ctaActions}>
              <Button asChild size="lg" className={styles.primaryButton}>
                <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">
                  Create your free account
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className={styles.resourcesSection}>
            <h3 className={styles.resourcesTitle}>Learn more about GitHub</h3>
            <div className={styles.resourcesGrid}>
              <a 
                href="https://docs.github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >
                <div className={styles.resourceLinkContent}>
                  <span className={styles.resourceLinkTitle}>Documentation</span>
                  <ArrowRight size={16} />
                </div>
                <p className={styles.resourceLinkDescription}>
                  Comprehensive guides and API references
                </p>
              </a>

              <a 
                href="https://github.com/features" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >
                <div className={styles.resourceLinkContent}>
                  <span className={styles.resourceLinkTitle}>Features</span>
                  <ArrowRight size={16} />
                </div>
                <p className={styles.resourceLinkDescription}>
                  Explore all GitHub features and capabilities
                </p>
              </a>

              <a 
                href="https://github.com/pricing" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >
                <div className={styles.resourceLinkContent}>
                  <span className={styles.resourceLinkTitle}>Pricing</span>
                  <ArrowRight size={16} />
                </div>
                <p className={styles.resourceLinkDescription}>
                  Find the perfect plan for your needs
                </p>
              </a>

              <a 
                href="https://github.blog" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >
                <div className={styles.resourceLinkContent}>
                  <span className={styles.resourceLinkTitle}>GitHub Blog</span>
                  <ArrowRight size={16} />
                </div>
                <p className={styles.resourceLinkDescription}>
                  Latest news, updates, and developer stories
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            This is an informational page about GitHub. Visit{" "}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              github.com
            </a>{" "}
            for the official GitHub platform.
          </p>
        </div>
      </footer>
    </div>
  );
}
