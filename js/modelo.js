/* ----------------------------------------------------------------------------------------------------------
DECLARACIÓN DE LAS VARIABLES
------------------------------------------------------------------------------------------------------------*/

var listadoTareas = [
    {
        id: 1,
        nombre: 'estudiar javascript',
        prioridad: 'urgente',
    },
    {
        id: 2,
        nombre: 'ir a neoland a las 9:00h',
        prioridad: 'diaria',
    },
    {
        id: 3,
        nombre: 'viajar al pueblo el fin de semana',
        prioridad: 'mensual',
    },
];

/* ----------------------------------------------------------------------------------------------------------
DECLARACIÓN DE LAS FUNCIONES
------------------------------------------------------------------------------------------------------------*/

function pintarTareas(pListadoTareas) {
    seccionTareas = document.getElementById('tareas');
    seccionTareas.innerHTML = '';
    for (tarea of pListadoTareas) {
        seccionTareas.innerHTML += '<article class="' + tarea.prioridad + '"><div><h2>' + tarea.nombre + '</h2></div><div><a href="#"><i class="fas fa-trash-alt"></i></a></div></article>';
    }
    if (listadoTareas.length == 0) {
        seccionTareas.innerHTML += '<h3>No hay tareas pendientes</h3>';
    }
}

function crearTarea(pListadoTareas, pNombre, pPrioridad) {
    let ultimoId = 0;
    for (tarea of pListadoTareas) {
        ultimoId = tarea.id;
    }
    let nuevaTarea = { id: ultimoId + 1, nombre: pNombre, prioridad: pPrioridad };
    pListadoTareas.push(nuevaTarea);
    pintarTareas(pListadoTareas);
}

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
