/**
 * MovieFlix - Lógica de Interactividad Frontend
 * Desarrollado para interactuar con componentes de Bootstrap 5
 */

// 1. FUNCIÓN PRINCIPAL PARA CARGAR LOS DATOS EN EL MODAL
function cargarTrailer(titulo, descripcion, imagen = '', urlYoutube = '') {
    // Capturar los elementos dentro del modal
    const modalTitle = document.getElementById('modalMovieTitle');
    const modalDescription = document.getElementById('modalMovieDescription');
    const modalIframe = document.querySelector('#movieModal iframe');

    // Asignar los textos dinámicos
    modalTitle.textContent = titulo;
    modalDescription.textContent = descripcion;

    // Identificar el ID del video de YouTube. 
    // Si la tarjeta no tiene uno asignado en el 'onclick', usamos uno por defecto (Rickroll controlado o un trailer genérico)
    const videoId = urlYoutube ? urlYoutube : 'dQw4w9WgXcQ';

    // Cambiar el atributo 'src' del iframe para cargar el video correcto con autoplay deshabilitado por defecto
    modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

// 2. LIMPIAR EL MODAL CUANDO SE CIERRE (Para que el video no siga sonando de fondo)
document.addEventListener('DOMContentLoaded', () => {
    const movieModal = document.getElementById('movieModal');

    if (movieModal) {
        movieModal.addEventListener('hidden.bs.modal', () => {
            const modalIframe = movieModal.querySelector('iframe');
            // Reseteamos el src para detener la reproducción inmediatamente
            modalIframe.src = '';
        });
    }

    // 3. CONTROL DEL FORMULARIO DE NEWSLETTER (CONTACTO)
    const newsletterForm = document.getElementById('newsletterForm');
    const formFeedback = document.getElementById('formFeedback');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitar que la página se recargue

            const emailInput = document.getElementById('userEmail').value;

            // Simulación de registro exitoso
            formFeedback.textContent = `🍿 ¡Perfecto! Hemos enviado un enlace de acceso a: ${emailInput}`;
            formFeedback.classList.remove('d-none', 'text-danger');
            formFeedback.classList.add('text-success', 'fw-bold');

            // Limpiar el input
            newsletterForm.reset();

            // Ocultar el mensaje automáticamente después de 5 segundos
            setTimeout(() => {
                formFeedback.classList.add('d-none');
            }, 5000);
        });
    }

    // 4. CAMBIO DE OPACIDAD EN EL NAVBAR AL HACER SCROLL
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#000000' + ' !important'; // Negro sólido al bajar
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.75)' + ' !important'; // Regresa al cristal translúcido
            navbar.style.boxShadow = 'none';
        }
    });
});