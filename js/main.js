function cargarTrailer(titulo, descripcion, imagen, idYoutube) {
    console.log("Intentando cargar:", titulo);

    // Cambiar el título del modal
    var modalTitle = document.getElementById('modalMovieTitle');
    if (modalTitle) modalTitle.innerText = titulo;

    // Cambiar la descripción
    var modalDesc = document.getElementById('modalMovieDescription');
    if (modalDesc) modalDesc.innerText = descripcion;

    // Cambiar la imagen
    var modalImage = document.getElementById('modalMovieImage');
    if (modalImage) modalImage.src = imagen;

    // Cambiar el iframe de YouTube
    var iframeVideo = document.getElementById('modalMovieVideo');
    if (iframeVideo) {
        iframeVideo.src = "https://www.youtube.com/embed/" + idYoutube;
    }
}

// Limpiar el video y la imagen al cerrar el modal
document.addEventListener('DOMContentLoaded', function () {
    var miModal = document.getElementById('movieModal');
    if (miModal) {
        miModal.addEventListener('hidden.bs.modal', function () {
            var iframeVideo = document.getElementById('modalMovieVideo');
            if (iframeVideo) iframeVideo.src = "";
            var modalImage = document.getElementById('modalMovieImage');
            if (modalImage) modalImage.src = "";
        });
    }
});