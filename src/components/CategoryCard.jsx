// src/components/ActivityCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ActivityCard({ id, title, description, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="
        w-full bg-white rounded-2xl shadow-playful border border-gris
        overflow-hidden flex flex-col
      "
    >
      <Link to={`/actividad/${id}`} className="flex-grow flex flex-col">
        <div
          className="h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={title}
        />
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-morado mb-2">{title}</h3>
          <p className="text-sm text-morado flex-grow">{description}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Link
          to={`/actividad/${id}`}
          className="
            block                      /* siempre visible */
            text-center
            bg-morado                  /* color base del botón */
            text-white
            py-2
            rounded-lg
            font-medium
            hover:bg-rojoSuave         /* color al pasar el cursor */
            transition
          "
        >
          Ver más →
        </Link>
      </div>
    </motion.div>
  )
}
