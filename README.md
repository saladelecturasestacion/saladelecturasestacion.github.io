# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Sala de Lectura «La Estación»

Este repositorio contiene la página web de la Sala de Lectura **La Estación**, un espacio comunitario para la difusión cultural y educativa ubicado en Cuernavaca, Morelos.

## 📋 Descripción del Proyecto

La página presenta la siguiente estructura basada en el wireframe proporcionado:

1. **Header** con navegación a secciones clave:

   * Libros
   * Sobre Nosotros
   * Historia
   * Mensajes
   * Calendario de Eventos
   * Dónde Nos Ubicamos
   * Contactos
2. **Sección «Sobre Nosotros»**: texto descriptivo de la misión y visión.
3. **Historia**: relato histórico de «La Estación».
4. **Mensajes**: espacio para anuncios y noticias.
5. **Calendario de Eventos**: listado de actividades y fechas.
6. **Dónde Nos Ubicamos**: dirección física.
7. **Contactos**: teléfono y correo.

## 🛠 Tecnologías Utilizadas

* **React** (Create React App)
* **JavaScript**
* **GitHub Pages** (deploy)

## 🚀 Cómo Ejecutar el Proyecto Localmente

### Prerrequisitos

* Node.js (>= 14)
* npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/la-estacion.git
cd la-estacion

# Instalar dependencias
npm install
# o
yarn install
```

### Ejecución en Desarrollo

```bash
npm start
# o
yarn start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## ⚙️ Scripts Disponibles

* `npm start` / `yarn start`: inicia el servidor de desarrollo.
* `npm run build` / `yarn build`: genera los archivos estáticos para producción.
* `npm run deploy` / `yarn deploy`: construye y publica en GitHub Pages.

> **Nota**: Asegúrate de configurar el campo `homepage` en `package.json`:
>
> ```json
> {
>   "homepage": "https://tu-usuario.github.io/la-estacion"
> }
> ```

## 📁 Estructura del Proyecto

```
la-estacion/
├── public/
│   └── index.html
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Vistas para cada sección
│   ├── assets/          # Imágenes y estilos
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Wireframe

El diseño actual sigue el boceto proporcionado, con bloques de contenido identificados:

* **Encabezado** con botones de navegación.
* **Bloques de contenido** con títulos y texto (Lorem Ipsum de ejemplo).
* **Sección de ubicaciones** y **contacto**.

> Pronto se reemplazarán los textos de ejemplo por contenido real.

## 🤝 Contribuciones

Nada :)


*La Estación* © 2025
Sitio desarrollado con ❤️ usando React y GitHub Pages.
