alert("Bienvendios a TuAnotador!")
alert("Ingresa un titulo y su respectivo contenido")
alert("Luego presiona en agregar, y tendras tu nota guardada")

const fecha = Date.now();
const hoy = new Date(fecha);
const fechaActual = hoy.toLocaleDateString()
notas=[]
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
    notas.forEach((cadaUna) => {
        const cardNotas = document.getElementById("notas");
        const divNotas = document.createElement('div');
        divNotas.className = "card mb-3";
        divNotas.innerHTML = `<div id="nuevoElemento " class="card-header">
                                ${cadaUna.titulo}
                                </div>
                                <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${cadaUna.contenido}</p>
                                    <footer class="blockquote-footer">Fecha de hoy: <cite title="">${cadaUna.fecha}</cite></footer>
                                </blockquote>
                                </div>
                                <div class="boton  blur-in">
                                    <button type="button" class="btn btn-danger" onclick="">Eliminar</button>
                                </div>`
        cardNotas.append(divNotas)
    });
}

