// src/components/JuegosGallery.jsx

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import texts from '../data/texts'
import images from '../data/images'

export default function JuegosGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1.1,
    spacing: 0,
    breakpoints: {
      '(min-width: 640px)':  { slidesPerView: 2, spacing: 15 },
      '(min-width: 1024px)': { slidesPerView: 3, spacing: 20 }
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    }
  })

  // Combina imágenes con captions
  const captions = texts.gallery.juegos
  const sources  = images.gallery.juegos

  const slides = sources.map((src, index) => ({
    src,
    alt: `Imagen ${index + 1}`,
    caption: captions[index]?.caption || captions[index] || ''
  }))

  const slideIndex = Math.round(currentSlide)

  return (
    <div className="relative max-w-4xl mx-auto py-8 px-0 sm:px-4">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map(({ src, alt }, idx) => (
          <div key={idx} className="keen-slider__slide">
            <div
              className="
                w-full
                aspect-w-4 aspect-h-3
                md:aspect-w-16 md:aspect-h-9
                overflow-hidden rounded-lg shadow-md bg-white
              "
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      {instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current.prev()}
            className="
              absolute top-1/2 left-2 transform -translate-y-1/2
              bg-white bg-opacity-75 hover:bg-opacity-100
              p-2 rounded-full shadow
            "
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current.next()}
            className="
              absolute top-1/2 right-2 transform -translate-y-1/2
              bg-white bg-opacity-75 hover:bg-opacity-100
              p-2 rounded-full shadow
            "
            aria-label="Siguiente"
          >
            ›
          </button>
        </>
      )}

      {/* Caption dinámico */}
      <div
        className="
          mt-4
          bg-fondo
          p-4
          rounded-lg
          shadow-inner
          text-morado
          text-center
          text-lg
          max-w-2xl
          mx-auto
        "
      >
        {slides[slideIndex]?.caption}
      </div>
    </div>
  )
}
