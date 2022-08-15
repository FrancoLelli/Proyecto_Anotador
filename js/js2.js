
const botonIniciar = document.getElementById("btnIniciar")
const botonCrear = document.getElementById("btnCrear")
const modalContainer = document.querySelector('#modal-container')
modalContainer.classList.add('my-modal-activo');
const cerrarModal = document.getElementById('entendidoBtn')
cerrarModal.onclick = () =>{
    modalContainer.classList.remove('my-modal-activo');
}
class Persona{
    constructor(nombre, contrasenia){
        nombre = this.nombre
        contrasenia = this.contrasenia
    }
}

function returnLista(){
    let usuarios = localStorage.getItem('usuarios');
    if(!usuarios){
        usuarios = []
    }else{
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
    console.log(usuarios);
    return usuarios
}

function agregar_A_Lista(){
    let lista = returnLista()
    lista.push(
        {
            nombre: document.getElementById("email").value,
            contrasenia: document.getElementById("password").value
        }
    ); 

    localStorage.setItem('usuarios', JSON.stringify(lista))
    console.log(lista);
}


function validar(){
    let usuariosLocal = JSON.parse(localStorage.getItem('usuarios'))

    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")
    const posibleError = document.getElementById("posibleError")
    const nombre = document.getElementById("email").value
    const password = document.getElementById("password").value

    const recorrertData = usuariosLocal.some(usuario => nombre === usuario.nombre && password === usuario.contrasenia)

    if(recorrertData){
        posibleError.classList.add("errorEscondido")
        posibleError.classList.remove("errorPosible")
        location.href = "./menu.html"
    }else{
        inputEmail.classList.add("error")
        inputPassword.classList.add("error")
        posibleError.classList.remove("errorEscondido")
        posibleError.classList.add("errorPosible")
    }

}

document.addEventListener('keypress', (e) =>{
    if(e.key == 'Enter'){
        validar()
    }
})

botonCrear.addEventListener('click', agregar_A_Lista) 
botonIniciar.addEventListener('click', validar) 