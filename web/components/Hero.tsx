import styles from './Hero.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/startyoursecondhalf/'

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Introduction">
      <p className={styles.eyebrow}>Real vintage football shirts — found one by one</p>
      <p className={styles.subtitle}>Somebody wore this shirt to the match of their life.</p>
      <h1 className={styles.heading}>The second half is yours.</h1>
      <p className={styles.sub}>
        Every shirt here has lived a first half full of real memories. Found one by one,
        waiting for its second.
      </p>
      <div className={styles.actions}>
        <a href="#rack" className={styles.primaryBtn}>
          See the rack
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ghostBtn}
        >
          Follow the stories
        </a>
      </div>
    </section>
  )
}
