# 🛍️ Catálogo de Productos React

Un catálogo de productos estático y responsivo desarrollado con React y CSS tradicional, diseñado para mostrar productos de manera atractiva con información de contacto directo.

## 🚀 Características

- **Diseño Responsivo**: Adaptado para desktop, tablet y móvil
- **Interfaz Moderna**: Diseño limpio y profesional
- **Búsqueda y Filtros**: Encuentra productos fácilmente
- **Carrusel Automático**: Productos destacados en rotación
- **Contacto Directo**: WhatsApp, teléfono y ubicación

## 🏗️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **CSS3**: Estilos personalizados y animaciones
- **JavaScript ES6+**: Funcionalidades modernas
- **Responsive Design**: Compatible con todos los dispositivos

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ProductCard.jsx        # Tarjeta individual de producto
│   ├── ProductList.jsx        # Lista de productos en cuadrícula
│   ├── Navbar.jsx            # Barra de navegación
│   ├── Carousel.jsx          # Carrusel de productos destacados
│   ├── FilterBar.jsx         # Búsqueda y filtros
│   ├── ContactSection.jsx    # Sección de contacto
│   └── Footer.jsx            # Pie de página
├── data/
│   └── products.js           # Base de datos estática de productos
├── App.js                    # Componente principal
└── index.js                  # Punto de entrada
```

## ⚡ Instalación y Uso

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/AngelSky2/catalogo.git

# Navegar al directorio
cd catalogo

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🎯 Funcionalidades

### ✅ Implementadas
- **ProductCard**: Tarjetas de producto con imagen, nombre, descripción y precio
- **ProductList**: Visualización en cuadrícula responsiva
- **Diseño Base**: Header y footer funcionales

### 🚧 En Desarrollo
- **Navbar**: Navegación completa con menú responsive
- **Carousel**: Carrusel automático de productos destacados
- **FilterBar**: Sistema de búsqueda y filtros por categoría
- **ContactSection**: Mapa, información de contacto y QR de WhatsApp
- **Footer**: Pie de página completo con enlaces

## 🎨 Características del Diseño

- **Color Principal**: Azul (#007bff)
- **Tipografía**: Arial, sans-serif
- **Espaciado**: Sistema de grid responsivo
- **Efectos**: Transiciones suaves y hover effects
- **Accesibilidad**: Contraste optimizado y navegación por teclado

## 📱 Responsive Design

| Dispositivo | Breakpoint | Columnas |
|-------------|------------|----------|
| Desktop     | > 1024px   | 3        |
| Tablet      | 768-1024px | 2        |
| Mobile      | < 768px    | 1        |

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm start          # Iniciar servidor de desarrollo
npm run build      # Crear build de producción para hosting
npm test           # Ejecutar tests
```

## 📋 Próximas Características

- [ ] Búsqueda avanzada por texto
- [ ] Filtros múltiples por categoría
- [ ] Galería de imágenes por producto
- [ ] Modo oscuro/claro
- [ ] Animaciones de entrada
- [ ] Compartir productos en redes sociales
- [ ] Optimización SEO

## 🚀 Despliegue

Este catálogo estático puede desplegarse en:
- **Netlify**: Drag & drop de la carpeta `build/`
- **Vercel**: Conectar repositorio de GitHub
- **GitHub Pages**: Usar `gh-pages` para despliegue automático
- **Firebase Hosting**: Para hosting gratuito

## 👤 Autor

**Angel Sky**
- GitHub: [Angelsky](https://github.com/AngelSky2)
- Email: AngelskyAndHell@gmail.com

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
