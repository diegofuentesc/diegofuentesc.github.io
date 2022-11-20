const agregarTareas = document.querySelector("#agregar"); //capturo boton agregar con su id
const arregloListaTareas = []; //creo arreglo vacio
let capturaId = 1;



//AGREGAR TAREA
botonAgregar.addEventListener('click', function () {
    const textoTarea = document.querySelector("#inputTareas").value;

    if (textoTarea != '') {
        const id = capturaId;
        const terminada = false;
        const tarea = { id: id, nombre: textoTarea, terminada: terminada }

        arregloListaTareas.push(tarea);
        crearTbody();
        capturaId++;
    } else {
        alert("Ingresa una tarea");
    }

});


// CONSTRUCCION DE LISTADO CON TAREAS
const crearTbody = function () {
    const listado = document.querySelector("#cuerpoListado");
    let armarHtml = '';

    for (const tarea of arregloListaTareas) {

        if (tarea.terminada) {
            check = 'checked';

        }
        else {
            check = '';
        }

        armarHtml += `
  <tr>
 <td>
  ${tarea.id}
 </td>
 <td>
  ${tarea.nombre}
 </td>
 <td>
 <input type="checkbox" ${check} onclick="checkTarea(${tarea.id});">
 <button type="button" id="botonEliminar" class="botonEliminar" onclick="botonEliminar(${tarea.id});">Eliminar</button>
 </td>
 </tr>
 `;
    }

    listado.innerHTML = armarHtml;
    document.querySelector('#total').innerHTML = arregloListaTareas.length;
    const tareasTerminadas = arregloListaTareas.filter((c) => c.terminada == true);
    document.querySelector('#realizadas').innerHTML = tareasTerminadas.length;

};


//ELIMINAR  TAREA

const botonEliminar = function (id) {

    const lugar = arregloListaTareas.findIndex((c) => c.id == id);

    if (lugar >= 0) {
        arregloListaTareas.splice(lugar, 1);
        crearTbody();
    }
};


//CHECK ESTADO

const checkTarea = function (id) {
    const lugar = arregloListaTareas.findIndex((c) => c.id == id);
    arregloListaTareas[lugar].terminada = !arregloListaTareas[lugar].terminada;

    crearTbody();
}
