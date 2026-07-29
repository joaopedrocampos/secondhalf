import styles from './Header.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/startyoursecondhalf/'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.brand} aria-label="Second Half — home">
        {/* eslint-disable-next-line @next/next/no-img-element -- static SVG mark, no optimization needed */}
        <img
          src="/logo-mark.svg"
          alt="Second Half kickoff circle mark"
          width={32}
          height={32}
          className={styles.mark}
        />
        <span className={styles.wordmark}>
          Second <span className={styles.half}>Half</span>
        </span>
      </a>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#rack">The Rack</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </nav>
    </header>
  )
}
