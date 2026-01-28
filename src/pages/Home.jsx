import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
    </main>
  )
}