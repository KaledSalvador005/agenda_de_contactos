let contactos = [];

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || telefono === "" || correo === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const contacto = {
    id: Date.now(),
    nombre: nombre,
    telefono: telefono,
    correo: correo,
  };

  contactos.push(contacto);

  alert("Contacto agregado correctamente.");

  formulario.reset();

  console.log(contactos);
});
