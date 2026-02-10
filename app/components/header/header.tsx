import { Github, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";
import { Button } from "../ui/button/button";
import { useState } from "react";
import styles from "./header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/benefits", label: "Benefits" },
  { to: "/statistics", label: "Statistics" },
  { to: "/resources", label: "Resources" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.logo}>
          <Github size={28} className={styles.logoIcon} />
          <span>GitHub</span>
        </Link>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `${styles.navLink}${isActive ? ` ${styles.active}` : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild size="sm" className={styles.signUpButton}>
            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </a>
          </Button>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={`${styles.mobileNav}${mobileOpen ? ` ${styles.open}` : ""}`}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `${styles.navLink}${isActive ? ` ${styles.active}` : ""}`
            }
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <Button asChild size="sm" className={styles.signUpButton}>
          <a
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up
          </a>
        </Button>
      </nav>
    </header>
  );
}
