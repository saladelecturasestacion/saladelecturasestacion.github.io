// App.jsx (actualizado)
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ActivityPage from './pages/ActivityPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-fondo">
      <Navbar />

      <div className="flex-grow pt-4 pb-4 px-4 md:pl-64 md:pr-64 md:px-0">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:id" element={<CategoryPage />} />
            <Route path="/actividad/:id" element={<ActivityPage />} />
          </Routes>
        </main>
      </div>

      <footer className="bg-morado text-white text-center py-4">
        © 2025 Sala de Lecturas “La Estación”
      </footer>
    </div>
  )
}
