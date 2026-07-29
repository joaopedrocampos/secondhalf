// NOTE: The placeholder fields below (name, address, email) are NOT real —
// fill them in with your actual registered details before this site goes
// fully public. This is a natural-person Impressum (§5 TMG-successor rules),
// not a company one.

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Impressum — Second Half',
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>Impressum</h1>

        <section className={styles.section}>
          <h2>Angaben gemäß § 5 TMG-Nachfolgeregelung</h2>
          <p>[Your full name]</p>
          <p>[Your street address]</p>
          <p>[Your postal code and city]</p>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <p>E-Mail: [Your email]</p>
        </section>

        <section className={styles.section}>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>[Your full name], [Your street address], [Your postal code and city]</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
