import React from 'react'
import { useParams, Link } from 'react-router-dom'
import categories from '../data/categoriesData'
import Section from '../components/Section'

export default function CategoryPage() {
  const { id } = useParams()
  const category = categories.find(c => String(c.id) === id)

  if (!category) {
    return (
      <Section title="Categoría no encontrada" accent="rojo">
        <p className="text-morado">
          Verifica la URL o regresa al inicio.
        </p>
        <Link to="/" className="mt-4 inline-block text-naranja font-semibold">
          Volver al inicio
        </Link>
      </Section>
    )
  }

  return (
    <>
      <Section title={category.title} accent="verde">
        <p className="text-morado">{category.description}</p>
      </Section>

      <Section title="Libros disponibles" accent="naranja">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="
                bg-white border-2 border-gris rounded-2xl
                p-4 overflow-hidden shadow-playful
                hover:border-rojo hover:shadow-lg transition
              "
            >
              <div className="h-40 bg-rojoClaro mb-4 flex items-center justify-center rounded-lg">
                <span className="text-rojoSuave">Imagen</span>
              </div>
              <h3 className="text-lg font-bold text-morado mb-1">
                Título de Ejemplo {idx + 1}
              </h3>
              <p className="text-sm text-morado mb-3">
                Autor Desconocido
              </p>
              <Link
                to={`/categoria/${category.id}/libro/${idx + 1}`}
                className="
                  block text-center bg-rojo text-white
                  py-2 rounded-xl font-medium
                  hover:bg-verde transition
                "
              >
                Ver detalle
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
