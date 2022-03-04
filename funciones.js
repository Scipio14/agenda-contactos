export const guardarContacto = (storage, contacto) => {
  storage.setItem(contacto.id, JSON.stringify(contacto));
  //Redireccionamos
  window.location.href = "/";
};

export const cargarContactos = (storage) => {
  let claves = Object.keys(storage);
  console.log(claves);
  claves.map((clave) => {
    let contacto = JSON.parse(storage.getItem(clave));
    console.log(contacto.numero);
  });
};
