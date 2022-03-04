import { guardarContacto, cargarContactos } from "./funciones.js";
const d = document;
const $nombre = d.getElementById("nombre");
const $numero = d.getElementById("numero");
const $direccion = d.getElementById("direccion");
const btnAgregarTarea = d.querySelector(".btn-agregar-tarea");

const listadoTareas = d.querySelector(".listado-tareas");

const storage = window.localStorage;

btnAgregarTarea.addEventListener("click", () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: $nombre.value,
    numero: $numero.value,
    direccion: $direccion.value,
  };
  guardarContacto(storage, contacto);
});
cargarContactos(storage, listadoTareas);
