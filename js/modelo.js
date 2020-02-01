/* ----------------------------------------------------------------------------------------------------------
DECLARACIÓN DE LAS VARIABLES GLOBALES
------------------------------------------------------------------------------------------------------------*/

const listadoTareas = new Array(
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
);

seccionTareas = document.getElementById('tareas');
btnCrearTarea = document.getElementById('crearTarea');
mensajeError = document.getElementById('mensajeError');
formulario = document.getElementById('formulario');
selectorTareas = document.getElementById('prioridadTareaFiltrar');
buscarTarea = document.getElementById('nombreTareaFiltrar');
