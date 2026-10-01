let contactos = [];

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;

  const contacto = {
    id: Date.now(),
    nombre: nombre,
    telefono: telefono,
    correo: correo,
  };

  contactos.push(contacto);

  formulario.reset();

  console.log(contactos);
});
