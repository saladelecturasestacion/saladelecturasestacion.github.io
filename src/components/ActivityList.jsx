// src/components/ActivityList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import texts from '../data/texts'
import images from '../data/images'

export default function ActivityList() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  }
  // obtenemos pares [id, data] de activities
  const activityEntries = Object.entries(texts.activities)

  return (
    <section className="py-12 bg-fondo">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-morado">
          ¿Qué hacemos en La Estación?
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activityEntries.map(([id, { title, description }]) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-white rounded-2xl shadow-playful border border-gris overflow-hidden flex flex-col"
            >
              <Link to={`/actividad/${id}`} className="flex-grow flex flex-col">
                <div
                  className="h-48 bg-center bg-cover"
                  style={{ backgroundImage: `url(${images.activities[id]})` }}
                  aria-label={title}
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-morado mb-2">{title}</h3>
                  <p className="text-sm text-morado flex-grow whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <Link
                  to={`/actividad/${id}`}
                  className="block text-center bg-naranja text-white py-2 rounded-lg font-medium hover:bg-verde transition"
                >
                  Ver más
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
