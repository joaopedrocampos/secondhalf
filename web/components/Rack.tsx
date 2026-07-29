import { shirts } from '@/data/shirts'
import ShirtCard from './ShirtCard'
import styles from './Rack.module.css'

export default function Rack() {
  return (
    <section className={styles.rack} id="rack" aria-label="The Rack">
      <div className={styles.header}>
        <span className={styles.eyebrow}>The Rack</span>
        <span className={styles.count}>{shirts.length} shirts · found one by one</span>
      </div>

      <div className={styles.list}>
        {shirts.map((shirt) => (
          <ShirtCard shirt={shirt} key={shirt.id} />
        ))}
      </div>
    </section>
  )
}
