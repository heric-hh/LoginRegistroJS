//Declarar variables para vincular los elementos del formulario
const usuario = document.getElementById('user');
const passw = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e) {
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = passw.value;

    if(usuarioVal == '' || passwordVal == '') {
        crearMensaje('Los campos no pueden estar vacios', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')) {
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass) {
            crearMensaje('Login Correcto', 'success');

            localStorage.setItem('sesion', 'activa');

            setTimeout(function() {
                window.open('./inicio.html', '_self');
            }, 1000);
        } else {
            crearMensaje('Usuario incorrecto', 'success');
        }
    } else {
        crearMensaje('No hay usuarios registrados', 'danger');
    }
}