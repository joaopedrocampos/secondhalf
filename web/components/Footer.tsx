import Link from 'next/link'
import styles from './Footer.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/startyoursecondhalf/'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Second Half — real vintage football shirts, found one by one · Munich</div>
      <div className={styles.links}>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <Link href="/impressum">Impressum</Link>
      </div>
    </footer>
  )
}
