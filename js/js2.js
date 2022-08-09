
const botonIniciar = document.getElementById("btnIniciar")

function validar(){
    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")
    const posibleError = document.getElementById("posibleError")
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(email !== "prueba" || password !== "prueba"){
        inputEmail.classList.add("error")
        inputPassword.classList.add("error")
        posibleError.classList.remove("errorEscondido")
        posibleError.classList.add("errorPosible")
    }else{
        posibleError.classList.add("errorEscondido")
        posibleError.classList.remove("errorPosible")
        location.href = "./menu.html"
    }
}

document.addEventListener('keypress', (e) =>{
    if(e.key == 'Enter'){
        validar()
    }
})
botonIniciar.addEventListener('click', validar)