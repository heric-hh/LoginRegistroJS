function crearMensaje(texto, tipo) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = texto;
    nuevoElemento.classList.add('alert', 'alert-' + tipo);

    let divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function() {
        nuevoElemento.remove();
    }, 2000);
}