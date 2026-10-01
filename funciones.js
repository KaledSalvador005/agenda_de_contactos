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

  mostrarContactos();

  alert("Contacto agregado correctamente.");

  formulario.reset();

  console.log(contactos);
});

function mostrarContactos() {
  const lista = document.getElementById("listaContactos");

  lista.innerHTML = "";

  if (contactos.length === 0) {
    lista.innerHTML = "<p>No hay contactos registrados.</p>";
    return;
  }

  contactos.forEach(function (contacto) {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("contacto");

    tarjeta.innerHTML = `
            <h3>${contacto.nombre}</h3>
            <p><strong>Teléfono:</strong> ${contacto.telefono}</p>
            <p><strong>Correo:</strong> ${contacto.correo}</p>

            <button onclick="verContacto(${contacto.id})">
                Ver información
            </button>

            <button onclick="eliminarContacto(${contacto.id})">
                Eliminar
            </button>
        `;

    lista.appendChild(tarjeta);
  });
}
function eliminarContacto(id) {
  const confirmar = confirm("¿Está seguro de eliminar este contacto?");

  if (confirmar) {
    contactos = contactos.filter(function (contacto) {
      return contacto.id !== id;
    });

    mostrarContactos();

    alert("Contacto eliminado correctamente.");
  }
}
function verContacto(id) {
  const contacto = contactos.find(function (contacto) {
    return contacto.id === id;
  });

  if (contacto) {
    alert(
      "Información del contacto\n\n" +
        "Nombre: " +
        contacto.nombre +
        "\n" +
        "Teléfono: " +
        contacto.telefono +
        "\n" +
        "Correo: " +
        contacto.correo,
    );
  }
}
