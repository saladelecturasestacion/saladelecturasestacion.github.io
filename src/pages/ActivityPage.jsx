// src/pages/ActivityPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import texts from '../data/texts'
import images from '../data/images'
import Section from '../components/Section'

import JuegosGallery         from '../components/JuegosGallery'
import LecturaGallery        from '../components/LecturaGallery'
import ManualidadesGallery   from '../components/ManualidadesGallery'
import CulturaGallery        from '../components/CulturaGallery'

export default function ActivityPage() {
  const { id } = useParams()
  const data = texts.activities[id]
  const img  = images.activities[id]

  if (!data || !img) {
    return (
      <Section title="Actividad no encontrada" accent="rojo">
        <p className="text-morado">
          Lo sentimos, la actividad solicitada no existe.
        </p>
      </Section>
    )
  }

  // Mapea cada id a su componente de galería
  const galleryMap = {
    juegos:        <JuegosGallery />,
    lectura:       <LecturaGallery />,
    manualidades:  <ManualidadesGallery />,
    cultura:       <CulturaGallery />
  }

  return (
    <Section title={data.title} accent="verde">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Imagen principal */}
        <img
          src={img}
          alt={data.title}
          className="w-full rounded-xl shadow-playful object-cover aspect-video"
        />

        {/* Descripción */}
        <p className="whitespace-pre-line text-morado">
          {data.description}
        </p>

        {/* Título y galería correspondiente */}
        <div className="pt-8">
          <h2 className="text-2xl font-semibold text-morado mb-4 text-center">
            Galería de {data.title}
          </h2>
          {/* Este renderiza el componente correcto según el id */}
          {galleryMap[id] || null}
        </div>
      </div>
    </Section>
  )
}
