// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const activities = [
  { id: 'juegos', title: 'Juegos' },
  { id: 'lectura', title: 'Lectura' },
  { id: 'manualidades', title: 'Manualidades' },
  { id: 'cultura', title: 'Cultura' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showBtn, setShowBtn] = useState(true)
  const [lastY, setLastY] = useState(0)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShowBtn(!(y > lastY && y > 50))
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  const sections = [
    { label: 'Mensajes',  href: '#mensajes' },
    { label: 'Eventos',   href: '#calendario' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Contacto',  href: '#contacto' },
  ]

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        className={`
          fixed top-4 left-4 z-50
          ${showBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          p-3 bg-morado text-white rounded-full
          hover:bg-rojo transition-opacity duration-300
        `}
      >
        {open ? <HiX size={32} /> : <HiMenu size={32} />}
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Drawer */}
      <nav
        className={`
          fixed inset-y-0 left-0 w-64 bg-fondo shadow-xl z-50
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-rojo">La Estación</h2>

          {/* Secciones generales */}
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="block px-2 py-1 rounded hover:bg-rojoClaro transition"
              >
                Inicio
              </Link>
            </li>
            {sections.map(sec => (
              <li key={sec.label}>
                <a
                  href={sec.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-1 rounded hover:bg-rojoClaro transition"
                >
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actividades */}
          <div className="pt-4 border-t border-rojoClaro">
            <h3 className="text-lg font-semibold text-rojo mb-2">Actividades</h3>
            <ul className="space-y-1">
              {activities.map(act => (
                <li key={act.id}>
                  <Link
                    to={`/actividad/${act.id}`}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1 rounded hover:bg-rojoClaro transition"
                  >
                    {act.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
