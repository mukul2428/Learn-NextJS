import styles from "./styles.module.css";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Page',
}
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
