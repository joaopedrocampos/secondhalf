import styles from './StoriesTeaser.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/startyoursecondhalf/'

export default function StoriesTeaser() {
  return (
    <section className={styles.stories} aria-label="Stories">
      <span className={styles.eyebrow}>Stories from the wearers</span>
      <h2 className={styles.heading}>The marks always have a story.</h2>
      <p className={styles.body}>
        Short films with people and the shirts they refused to retire. New story every week
        on Instagram.
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ghostBtn}
      >
        Watch on Instagram
      </a>
    </section>
  )
}
