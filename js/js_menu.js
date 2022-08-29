/* API  */

fetch('https://strangerthings-quotes.vercel.app/api/quotes/2')
.then((response) => response.json())
.then((frases) => frases.forEach(frase => {
  const cardNotas1 = document.getElementById("notas");
  const divNotas2 = document.createElement('div');
  divNotas2.className = "card mb-3";
  divNotas2.innerHTML = `<div class="card-header">
                          ${frase.author}
                          </div>
                          <div class="card-body">
                          <blockquote class="blockquote mb-0">
                              <p>${frase.quote}</p>
                              <footer class="blockquote-footer">From: <cite title="">Stranger Things</cite></footer>
                          </blockquote>
                        </div>`

  cardNotas1.append(divNotas2) 
  }
 )
)

.catch((err) => console.log(err)) 

/* Nombre de usuario */
let usNom = localStorage.getItem('id_usu').toUpperCase()
let nom = document.getElementById('name')
nom.innerHTML +=  `${usNom}`


 /* Fechas  */
const { DateTime } = luxon

var fechaActual1 = DateTime.now()

var f = {month: 'long', day: 'numeric'}

 var fechaActual = fechaActual1.setLocale('es').toLocaleString(f)

/* Funciones notas */

notas=[]

let id= 1

const botonAgregar = document.getElementById("btnAgregar")
let usuarios = JSON.parse(localStorage.getItem('usuarios'));

const botonEliminar = document.getElementById("eliminarBtn")
const modalContainer = document.querySelector('#modal-container')
const notaModal = document.getElementById('eliminarNota')
const cerrarModal = document.getElementById('cerrarModal')
const modalContainer2 = document.getElementById('modal-container1')
const notaModal1 = document.getElementById('eliminarNota1')
const cerrarModal1 = document.getElementById('cerrarModal1')




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
    const botonEditar = document.createElement('div')
    botonEditar.classList.add('boton', 'blur-in')
    botonEditar.innerHTML = `<button type="button" class="btn btn-sm btn-danger" id="${id}">Editar</button>`
    divNotas.appendChild(botonEditar)
    botonEditar.onclick = function(){
      modalContainer2.classList.add('my-modal-activo');
      cerrarModal1.onclick = () =>{
          modalContainer2.classList.remove('my-modal-activo')
      }
      notaModal1.onclick = () =>{
          modalContainer2.classList.remove('my-modal-activo')
          editarNota(divNotas.getAttribute('id'))
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
              title: 'Editar nota'
            })
      }
  }

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

function editarNota(id){
  console.log(notas)
  const indiceArray = notas.find((nota) => id == nota.id)
  document.getElementById("tituloNota").value= indiceArray.titulo;
  document.getElementById("contenidoNota").value = indiceArray.contenido;
  eliminarNota(id)
} 

