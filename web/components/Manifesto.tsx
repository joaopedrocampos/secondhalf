import styles from './Manifesto.module.css'

const lines = [
  { index: 'I', text: 'Every shirt has lived a first half.' },
  { index: 'II', text: 'Every mark is a memory.' },
  { index: 'III', text: 'The second half is yours.' },
]

export default function Manifesto() {
  return (
    <section className={styles.manifesto} aria-label="Manifesto">
      {lines.map((line) => (
        <div className={styles.item} key={line.index}>
          <span className={styles.index}>{line.index}</span>
          <p className={styles.text}>{line.text}</p>
        </div>
      ))}
    </section>
  )
}
