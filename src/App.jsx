import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import {Footer} from './components/Footer' 


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Projects/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}

export default App