import Link from 'next/link'
import styles from './CaseStudyHeader.module.css'

/**
 * Sticky nav + pink project strip shared by every case-study page. It sits
 * outside the scaled canvas (see ScaledCanvas), on the same page gutter as the
 * homepage nav, so the strip title lines up with the scaled content below and
 * the links don't shift when moving between pages.
 */
export default function CaseStudyHeader({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Project navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#contact">Contact &amp; About</Link>
      </nav>
      <div className={styles.projectStrip}>{title}</div>
    </header>
  )
}
