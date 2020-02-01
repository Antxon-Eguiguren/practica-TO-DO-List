/* ----------------------------------------------------------------------------------------------------------
DECLARACIÓN DE LAS FUNCIONES
------------------------------------------------------------------------------------------------------------*/

// Función que pinta todas las tareas del array y comprueba si no hay tareas pendientes para sacar un mensaje informativo. Además añade un Event Listener a cada botón de borrado de cada tarea para poder ejecutar la función de borrarTarea
function pintarTareas(pListadoTareas) {
    seccionTareas.innerHTML = '';

    for (let i = 0; i < pListadoTareas.length; i++) {
        let articulo = document.createElement('article');
        articulo.className = pListadoTareas[i].prioridad;

        let divNombre = document.createElement('div');
        let h2 = document.createElement('h2');
        let h2Texto = document.createTextNode('' + pListadoTareas[i].nombre + '');
        h2.appendChild(h2Texto);
        divNombre.appendChild(h2);

        let divIcono = document.createElement('div');
        let enlace = document.createElement('a');
        enlace.href = '#';

        // Al icono le añado clase, dataset (para saber qué tarea hay que borrar), estilos y escuchadores (para el click y el hover) dinámicamente porque al crear el elemento con JS, no me respeta los estilos de la hoja de estilos CSS
        let icono = document.createElement('i');
        icono.className = 'fas fa-trash-alt';
        icono.dataset.id = pListadoTareas[i].id;
        icono.addEventListener('click', recogerDatosBorrarTarea);
        icono.style.cssText = 'color: white; font-size: 2em;'
        icono.addEventListener('mouseover', () => {
            icono.style.cssText = 'animation-name: pulse; animation-duration: 1.5s; animation-iteration-count: infinite; color: black; font-size: 2em;';
        });
        icono.addEventListener('mouseout', () => {
            icono.style.cssText = 'color: white; font-size: 2em;'
        });

        divIcono.appendChild(enlace);
        divIcono.appendChild(icono);

        articulo.appendChild(divNombre);
        articulo.appendChild(divIcono);
        seccionTareas.appendChild(articulo);
    }
    if (listadoTareas.length == 0) {
        seccionTareas.innerHTML += '<h3>No hay tareas pendientes</h3>';
    }
}

function recogerDatosBorrarTarea(e) {
    id = e.target.dataset.id;
    console.log(id)
    borrarTarea(listadoTareas, id);
}

// Función que se activa con el botón de crear tarea y lo que hace es comprobar si los datos se han introducido y en caso afirmativo añade la tarea al array y llama a pintarTareas.
function crearTarea(pListadoTareas, pNombre, pPrioridad) {
    if (pNombre == '' || pPrioridad == '') {
        mensajeError.innerHTML = '<p>El nombre y la prioridad son obligatorios.</p>';
    } else {
        let ultimoId = 0;
        for (tarea of pListadoTareas) {
            ultimoId = tarea.id;
        }
        let nuevaTarea = { id: ultimoId + 1, nombre: pNombre, prioridad: pPrioridad };
        pListadoTareas.push(nuevaTarea);
        pintarTareas(pListadoTareas);
        mensajeError.innerHTML = '';
    }
}

// Borra una tarea del array y llama a pintarTareas
function borrarTarea(pListadoTareas, pId) {
    let posicion = pListadoTareas.findIndex((tarea) => {
        return tarea.id == pId;
    });
    if (posicion != -1) {
        pListadoTareas.splice(posicion, 1);
        pintarTareas(pListadoTareas);
    }
}

function filtrarTareas(pListadoTareas, pPrioridad) {
    let listadoTareasFiltrado = pListadoTareas.filter((tarea) => {
        return tarea.prioridad == pPrioridad;
    });
    if (pPrioridad == 'todas') {
        pintarTareas(pListadoTareas);
    } else {
        pintarTareas(listadoTareasFiltrado);
    }
}

function buscarTareas() {

}


/* ----------------------------------------------------------------------------------------------------------
LLAMADA A LAS FUNCIONES
------------------------------------------------------------------------------------------------------------*/

// Cuando se inicia el programa, se pintan todas las tareas del array
pintarTareas(listadoTareas);

// Cuando creo tareas y borro tareas, el programa pinta todas las tareas del array, pese a que en el momento de crear o borrar el array estuviera filtrado