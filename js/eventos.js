btnCrearTarea.addEventListener('click', recogerDatosNuevaTarea);

function recogerDatosNuevaTarea(e) {
    e.preventDefault();
    let nombreTarea = document.getElementById('nombreTareaCrear').value;
    let prioridadTarea = document.getElementById('prioridadTareaCrear').value;
    crearTarea(listadoTareas, nombreTarea, prioridadTarea);
    formulario.reset();
}