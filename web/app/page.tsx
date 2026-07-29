import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Rack from '@/components/Rack'
import StoriesTeaser from '@/components/StoriesTeaser'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Rack />
        <StoriesTeaser />
      </main>
      <Footer />
    </>
  )
}
