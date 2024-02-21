function abrirImagen(numero) {
    var rutaImagenAmpliada = 'assets/imgs/GRANDESPNG/' + numero;
    document.getElementById('imagen-ampliada').src = rutaImagenAmpliada;
    document.getElementById('lightbox').style.display = 'block';
}

function cerrarImagen() {
    document.getElementById('lightbox').style.display = 'none';
}