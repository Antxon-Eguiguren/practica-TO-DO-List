/* ----------------------------------------------------------------------------------------------------------
DECLARACIÓN DE LOS EVENTOS
------------------------------------------------------------------------------------------------------------*/

// Función que recoge los datos necesarios para crear una nueva tarea y llama a crearTarea. Después resetea los campos a su valor inicial.
btnCrearTarea.addEventListener('click', recogerDatosNuevaTarea);
function recogerDatosNuevaTarea(e) {
    e.preventDefault();
    let nombreTarea = document.getElementById('nombreTareaCrear').value;
    let prioridadTarea = document.getElementById('prioridadTareaCrear').value;
    crearTarea(listadoTareas, nombreTarea, prioridadTarea);
    formulario.reset();
    selectorTareas.value = 'todas';
    buscarTarea.value = '';
}

// Función que recoge los datos necesarios para filtrar tareas y llama a filtrarTareas. Después resetea los campos a su valor inicial.
selectorTareas.addEventListener('change', recogerDatosFiltroTareas);
function recogerDatosFiltroTareas(e) {
    prioriad = e.target.value;
    filtrarTareas(listadoTareas, prioriad);
    buscarTarea.value = '';
}

// Función que recoge los datos necesarios para buscar una tarea y llama a buscarTareas y pintarTareas.
buscarTarea.addEventListener('keyup', recogerDatosBuscarTarea);
function recogerDatosBuscarTarea(e) {
    let busqueda = e.target.value;
    let listaFiltrada = buscarTareas(listadoTareas, busqueda);
    pintarTareas(listaFiltrada);
}