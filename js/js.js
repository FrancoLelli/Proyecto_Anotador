/* alert("Bienvendios a TuAnotador!")
alert("Ingresa un titulo y su respectivo contenido")
alert("Luego presiona en agregar, y tendras tu nota guardada") */

const fecha = Date.now();
const hoy = new Date(fecha);
const fechaActual = hoy.toLocaleDateString()

notas=[]

const botonAgregar = document.getElementById("btnAgregar")

class Nota{
    constructor(titulo, contenido, fecha){
        titulo = this.titulo
        contenido = this.contenido
        fecha = fechaActual
    }
}

function crearNota(){
    tituloNota = document.getElementById("tituloNota").value
    contenidoNota = document.getElementById("contenidoNota").value
    notas.push({
        titulo: tituloNota, 
        contenido: contenidoNota, 
        fecha: fechaActual
    })
    const cardNotas = document.getElementById("notas");
    const divNotas = document.createElement('div');
    divNotas.className = "card mb-3";
    divNotas.innerHTML = `<div id="nuevoElemento " class="card-header">
                            ${tituloNota}
                            </div>
                            <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${contenidoNota}</p>
                                <footer class="blockquote-footer">Fecha: <cite title="">${fechaActual}</cite></footer>
                            </blockquote>
                            </div>
                            <div class="boton  blur-in">
                                <button type="button" class="btn btn-danger" onclick="">Eliminar</button>
                            </div>`
    cardNotas.append(divNotas)
}

botonAgregar.addEventListener('click', crearNota)

function eliminarNota(){
    
}
