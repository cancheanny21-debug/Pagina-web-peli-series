# MovieFlix - Plataforma de Streaming

## 1. Descripción General
MovieFlix es una aplicación web de tipo landing page diseñada para la visualización y promoción de contenido multimedia como películas y series. La plataforma ofrece una interfaz moderna, intuitiva y responsiva que permite a los usuarios explorar catálogos, ver detalles de producciones y acceder a tráilers oficiales de forma dinámica.

## 2. Objetivo del Proyecto
El objetivo principal de este desarrollo es poner en práctica conocimientos avanzados de maquetación web y manipulación del DOM, creando una experiencia de usuario (UX) fluida similar a las plataformas de streaming líderes en el mercado. Se busca integrar componentes de terceros (Bootstrap) con lógica personalizada en JavaScript.

## 3. Tecnologías Utilizadas
*   **HTML5:** Estructura semántica del contenido.
*   **CSS3:** Estilos personalizados y diseño de scrollbar.
*   **Bootstrap 5.3:** Framework para el diseño responsivo, sistema de rejillas, navegación y componentes modales.
*   **JavaScript (Vanilla):** Lógica para la carga dinámica de datos en el modal y control de reproducción de video.
*   **Bootstrap Icons:** Librería de iconos vectoriales.
*   **YouTube IFrame API:** Embebido de tráilers para visualización directa.

## 4. Funcionalidades Implementadas
*   **Navegación Inteligente:** Menú superior con navegación por anclas y barra de búsqueda.
*   **Hero Carousel:** Sección destacada con transiciones para los estrenos más importantes.
*   **Catálogo Dinámico:** Secciones de "Películas" y "Series" con desplazamiento horizontal (overflow-x) optimizado para dispositivos móviles.
*   **Sistema de Modales:** Al hacer clic en cualquier título, se despliega un modal que carga dinámicamente el título, la descripción y el tráiler correspondiente mediante JavaScript, evitando la carga innecesaria de múltiples iframes al inicio.
*   **Sección de Planes:** Visualización de modelos de suscripción utilizando tarjetas de precios.
*   **Formulario de Contacto/Newsletter:** Validación básica para la captura de correos electrónicos de usuarios interesados.

## 5. Capturas de Pantalla


> **Vista Principal (Hero)**
> ![Vista Principal](img%20copy/cat1.jpeg)

> **Catálogo y Modal de Tráiler**
> ![Vista Modal](img%20copy/cat2.jpeg)

## 6. Integrantes del Grupo
Este proyecto fue desarrollado por el **Grupo N°1 X**:
*   Darwin Cabezas
*   Anny Canche
*   Jazmin Colobon


## 7. Conclusiones del Desarrollo
*   **Escalabilidad:** El uso de una función centralizada en JavaScript para cargar el contenido del modal permite añadir cientos de películas simplemente modificando el HTML o una base de datos, sin replicar código lógico.
*   **Rendimiento:** La limpieza del atributo `src` del iframe al cerrar el modal es una buena práctica implementada para detener la descarga de datos y el audio del video en segundo plano.
*   **Diseño Responsivo:** Gracias a Bootstrap y CSS personalizado, la plataforma mantiene una estética profesional tanto en monitores de escritorio como en smartphones.

---
© 2026 MovieFlix - Proyecto Práctico de Desarrollo Frontend.