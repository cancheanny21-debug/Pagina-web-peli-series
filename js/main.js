// 1. Función para cargar información dinámica en el modal
function cargarTrailer(titulo, descripcion, imagen, videoId = 'dQw4w9WgXcQ') {
    // Actualizar título y descripción
    document.getElementById('modalMovieTitle').innerText = titulo;
    document.getElementById('modalMovieDescription').innerText = descripcion;

    // Actualizar el video (usamos el ID de YouTube proporcionado)
    const videoURL = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('modalMovieVideo').src = videoURL;
}

// 2. Limpiar el video al cerrar el modal (para que deje de reproducirse)
const movieModal = document.getElementById('movieModal');
movieModal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('modalMovieVideo').src = "";
});

// 3. Lógica para el formulario de contacto (Newsletter)
const newsletterForm = document.getElementById('newsletterForm');
const formFeedback = document.getElementById('formFeedback');

newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue

    const email = document.getElementById('userEmail').value;

    // Simulación de envío
    formFeedback.classList.remove('d-none');
    formFeedback.innerText = `¡Gracias! Hemos registrado el correo: ${email}`;

    // Resetear formulario
    newsletterForm.reset();

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        formFeedback.classList.add('d-none');
    }, 3000);
});