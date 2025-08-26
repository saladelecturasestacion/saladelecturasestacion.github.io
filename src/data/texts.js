// src/data/texts.js

const texts = {
  home: {
    banner: {
      title: 'Sala de Lecturas «La Estación»',
      subtitle:
        'Somos una sala de lectura en Patios de la Estación, Cuernavaca. ' +
        'Espacio lúdico para infancias. Inclusión y hospitalidad nos unen.'
    },
    sections: {
      mensajes: {
        title: 'Mensajes',
        content:
          'Próximamente publicaremos noticias importantes, actividades y novedades.'
      },
      calendario: {
        title: 'Calendario de Eventos',
        content:
          'Consulta aquí las próximas actividades, lecturas colectivas y talleres.'
      },
      ubicacion: {
        title: 'Dónde nos ubicamos',
        content:
          'Paseo 5 de Mayo 123, Col. Patios de la Estación, Cuernavaca, Morelos.'
      },
      contacto: {
        title: 'Contacto',
        items: [
          {
            icon: '📞',
            label: 'Teléfono',
            value: '777 123 4567'
          },
          {
            icon: '✉️',
            label: 'Correo',
            value: 'contacto@laestacion.mx'
          }
        ]
      }
    },
    map: {
      embedSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.058689818937!2d-99.2305368230151!3d18.928796182245673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfd71261e553%3A0x5a2f359b4ba6e3ba!2sSala%20de%20lectura%20Estaci%C3%B3n%20de%20los%20libros!5e0!3m2!1ses!2smx!4v1752206725662!5m2!1ses!2smx',
      directionsLink: 'https://maps.app.goo.gl/xxsnhJQDtTasN7KT6'
    }
  },

    gallery: {
        juegos: [
          {
            src: '/images/carusel1.jpg',
            alt: 'Niños con fichas de colores',
            caption:
              'Jugamos con fichas de colores para clasificar formas y desarrollar la motricidad fina.'
          },
          {
            src: '/images/carusel2.jpg',
            alt: 'Juego colaborativo en el suelo',
            caption:
              'Actividad colaborativa en el suelo: fomentamos el trabajo en equipo y la coordinación.'
          },
          {
            src: '/images/carusel3.jpg',
            alt: 'Tarjetas didácticas',
            caption:
              'Exploramos tarjetas didácticas para ampliar vocabulario y reforzar la memoria visual.'
          },
          {
            src: '/images/carusel4.jpg',
            alt: 'Rincón de lectura y juego libre',
            caption:
              'Rincón de lectura y juego libre: estimulamos la imaginación y las habilidades sociales.'
          },
          {
            src: '/images/carusel5.jpg',
            alt: 'Niños con un rompecabezas',
            caption:
              'Armamos rompecabezas para potenciar la resolución de problemas y la paciencia.'
          },
          {
            src: '/images/carusel6.jpg',
            alt: 'Niños y adulto con un memorama',
            caption:
              'Memorama en equipo: estimulamos la concentración y la memoria a través del juego.'
          },
          {
            src: '/images/carusel7.jpg',
            alt: 'Niños con manualidades',
            caption:
              'Taller de manualidades: desarrollamos la creatividad y la destreza con materiales variados.'
          },
          {
            src: '/images/carusel8.jpg',
            alt: 'Juego Compartido y variado',
            caption:
              'Espacio de juego compartido: fomentamos el respeto y la colaboración, donde cada quien puede disfrutar y aportar sus propias ideas.'
          },
          {
            src: '/images/carusel9.jpg',
            alt: 'Niños en Papalote, en la actividad de escalar llantas suspendidas',
            caption:
              'Aventura en Papalote: escalamos llantas suspendidas para fortalecer confianza y equilibrio.'
          },
          {
            src: '/images/carusel10.jpg',
            alt: 'Niños con la maestra activándose físicamente con juegos',
            caption:
              'Juegos físicos guiados: mejoramos la coordinación motriz y la energía junto a la maestra.'
          } 
        ]
      },

  activities: {
    juegos: {
      title: 'Juegos',
      description:
        'El juego es imprescindible para generar interacciones asertivas y creativas; ' +
        'desarrolla habilidades adaptativas y comunicación.'
    },
    lectura: {
      title: 'Lectura',
      description: 'Ponemos a disposición un espacio de lectura para niñas y niños. Fomentamos el diálogo y aspiramos a despertar la sensibilidad y la imaginación a través de la literatura infantil.'
    },
    manualidades: {
      title: 'Manualidades',
      description: 'En los talleres de manualidades, se descubren su creatividad a través de proyectos prácticos: pintura, modelado, collage y reciclaje artístico. Fomentar la experimentación y la resolución de problemas, al tiempo que desarrollan habilidades manuales, coordinación y confianza en sí mismos.'
    },
    cultura: {
      title: 'Cultura',
      description: 'Nuestro objetivo es abrir puertas a la cultura para las infancias, brindando acceso a actividades, talleres y espacios donde puedan explorar tradiciones, expresiones artísticas y saberes comunitarios, enriqueciendo su mirada y fortaleciendo su identidad.'
    }
  }
}

export default texts
