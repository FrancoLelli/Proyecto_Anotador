/* alert("Bienvendios a TuAnotador!")
alert("Ingresa un titulo y su respectivo contenido")
alert("Luego presiona en agregar, y tendras tu nota guardada") */

 const fecha = Date.now();
const hoy = new Date(fecha);
const fechaActual = hoy.toLocaleDateString() 

/* Fechas 

const fechaActual = DateTime.now()
fechaActual.setLocale('en').toLocaleString(DateTime.DATE_FULL)

*/

/* Funciones notas */
notas=[]

let id= 1

const botonAgregar = document.getElementById("btnAgregar")
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

const botonEliminar = document.getElementById("eliminarBtn")
const modalContainer = document.querySelector('#modal-container')
const notaModal = document.getElementById('eliminarNota')
const cerrarModal = document.getElementById('cerrarModal')



class Nota{
    constructor(id,titulo, contenido, fecha){
        id= this.id
        titulo = this.titulo
        contenido = this.contenido
        fecha = fechaActual
    }
}


function crearNota(){
    id++
    inputTitulo = document.getElementById("tituloNota")
    inputCont = document.getElementById("contenidoNota")
    tituloNota = document.getElementById("tituloNota").value
    contenidoNota = document.getElementById("contenidoNota").value
    notas.push({
        id: id,
        titulo: tituloNota, 
        contenido: contenidoNota, 
        fecha: fechaActual
    })
    const cardNotas = document.getElementById("notas");
    const divNotas = document.createElement('div');
    divNotas.setAttribute('id', `${id}`)
    divNotas.className = "pachorra card mb-3";
    divNotas.innerHTML = `<div class="card-header">
                            ${tituloNota}
                            </div>
                            <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${contenidoNota}</p>
                                <footer class="blockquote-footer">Fecha: <cite title="">${fechaActual}</cite></footer>
                            </blockquote>
                            </div>`

    const botonRemove = document.createElement('div')
    botonRemove.classList.add('boton', 'blur-in')
    botonRemove.innerHTML = `<button type="button" class="btn btn-sm btn-danger" id="${id}">Eliminar</button>`
    divNotas.appendChild(botonRemove)
    botonRemove.onclick = function(){
        modalContainer.classList.add('my-modal-activo');
        cerrarModal.onclick = () =>{
            modalContainer.classList.remove('my-modal-activo')
        }
        notaModal.onclick = () =>{
            modalContainer.classList.remove('my-modal-activo')
            eliminarNota(divNotas.getAttribute('id'))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Nota eliminada correctamente'
              })
        }
    }
    
    cardNotas.append(divNotas)
    resetearTextArea()
}

/* Reconocimiento de voz */
texto = document.getElementById("contenidoNota")
const btnStop = document.getElementById("btnStop")
const btnMicro = document.getElementById("btnMicro")
let recognition = new webkitSpeechRecognition()
recognition.lang = 'es-ES'
recognition.continuous = true 
/* recognition.interimResults = false  */

recognition.onresult = (event) => {
  const results = event.results
  const frase = results[results.length - 1][0].transcript
  texto.value += frase
}

btnMicro.addEventListener('click', () => {
  recognition.start()
})

btnStop.addEventListener('click', () => {
  recognition.abort()
})



/*  */

botonAgregar.addEventListener('click', () => {
    crearNota()
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Nota agregada correctamente'
      }) 
})


function eliminarNota(id){
    document.getElementById(id).remove()
}

function resetearTextArea(){
    document.getElementById("tituloNota").value='';
    document.getElementById("contenidoNota").value = '';
}

btnCerrarSes = document.getElementById("cerrarSesion")
btnCerrarSes.addEventListener('click', () => {
    Swal.fire({
        title: 'Estas seguro que quieres cerrar sesion?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Volver',
        confirmButtonText: 'Cerrar Sesion'
      }).then((result) => {
        if (result.isConfirmed) {
            location.href = "./index.html"
        }
      })
})