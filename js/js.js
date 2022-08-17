/* alert("Bienvendios a TuAnotador!")
alert("Ingresa un titulo y su respectivo contenido")
alert("Luego presiona en agregar, y tendras tu nota guardada") */

const fecha = Date.now();
const hoy = new Date(fecha);
const fechaActual = hoy.toLocaleDateString()

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
        }
    }

    cardNotas.append(divNotas)
}

botonAgregar.addEventListener('click', crearNota)


function eliminarNota(id){
    document.getElementById(id).remove()
}


