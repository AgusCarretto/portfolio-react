import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail'; 
import { ScrollToTop } from './components/ScrollToTop'; 

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
        <Navbar />
        
        <Routes>
          {/* Este es mi home con todas las secciones*/}
          <Route path="/" element={<Home />} />
          
          {/* Aca vamos a ir pasando a detalle cada proyecto */}
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
        </Routes>

        <div className="max-w-6xl mx-auto px-6">
           <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App;