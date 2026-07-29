import type { Shirt } from '@/data/shirts'
import { JerseyIllustration } from './jerseys'
import styles from './ShirtCard.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/startyoursecondhalf/'

function paddedNumber(n: number) {
  return n.toString().padStart(2, '0')
}

export default function ShirtCard({ shirt }: { shirt: Shirt }) {
  return (
    <article className={styles.card}>
      <div className={styles.figure}>
        <JerseyIllustration kitStyle={shirt.kitStyle} className={styles.jersey} />
      </div>
      <div className={styles.body}>
        <div className={styles.label}>Shirt Nº {paddedNumber(shirt.number)}</div>
        <h3 className={styles.title}>{shirt.title}</h3>
        <p className={styles.story}>{shirt.storyLine}</p>

        <div className={styles.marks}>
          <div className={styles.marksHeading}>The marks — read before you fall in love</div>
          <ul>
            {shirt.marks.map((mark) => (
              <li key={mark}>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
                {mark}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <span className={styles.meta}>
            {shirt.maker} · Size {shirt.size}
          </span>
          <span className={styles.price}>{shirt.price}</span>

          {shirt.status === 'gone' ? (
            <span className={styles.goneTag}>Gone to its second half</span>
          ) : shirt.kleinanzeigenUrl ? (
            <a
              href={shirt.kleinanzeigenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Start its second half →
            </a>
          ) : (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              DM on Instagram to ask
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
