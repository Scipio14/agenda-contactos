export const guardarContacto = (storage, contacto) => {
  storage.setItem(contacto.id, JSON.stringify(contacto));
  //Redireccionamos
  window.location.href = "/";
};

export const cargarContactos = (storage, parentNode) => {
  let claves = Object.keys(storage);
  //console.log(claves);
  claves.map((clave) => {
    let contacto = JSON.parse(storage.getItem(clave));
    //console.log(contacto.numero);
    crearContacto(parentNode, contacto, storage);
  });
};

const crearContacto = (parentNode, contacto, storage) => {
  let divContacto = document.createElement("div");
  let nombreContacto = document.createElement("h3");
  let numeroContacto = document.createElement("p");
  let direccionContacto = document.createElement("p");
  let iconoBorrar = document.createElement("span");

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.numero;
  direccionContacto.innerHTML = contacto.direccion;
  iconoBorrar.innerHTML = "delete_forever";

  iconoBorrar.onclick = () => {
    storage.removeItem(contacto.id);
    window.location.href = "/";
  };

  divContacto.classList.add("tarea");
  iconoBorrar.classList.add("material-icons", "icono");

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);

  parentNode.appendChild(divContacto);
};
