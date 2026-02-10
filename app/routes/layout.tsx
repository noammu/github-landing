import { Outlet } from "react-router";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import styles from "./layout.module.css";

export default function SiteLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
