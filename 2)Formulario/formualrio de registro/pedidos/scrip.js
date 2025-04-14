// Obtiene la parte de la URL que contiene los parámetros (todo lo que está después del "?")
const paramsString = window.location.search; 

// Crea un objeto URLSearchParams para trabajar con los parámetros
const searchParams = new URLSearchParams(paramsString); 

// Selecciona los divs donde deseas mostrar los valores
const datosDiv = document.getElementById("datos");
const pedidoDiv = document.getElementById("pedido");
const pagosDiv = document.getElementById("pagos");

const nameMapping = {
    'inputNombre': 'Nombre',
    'inputTelefono': 'Teléfono',
    'inputDireccion': 'Dirección',
    'inputFechaHora': 'Fecha de Entrega',
    'inputObservaciones': 'Observaciones',
    'inputSalsaAgridulce': 'Salsa Agridulce',
    'inputSalsaPicante': 'Salsa Picante',
    'cantidadCarne': 'Carne',
    'cantidadPollo': 'Pollo',
    'cantidadJyQ': 'J y Q',
    'combo': 'Combo',
    'pago': 'Método de Pago'
};

// Limpiar el contenido de los divs antes de añadir nuevos valores
datosDiv.innerHTML = '';
pedidoDiv.innerHTML = '';
pagosDiv.innerHTML = '';

searchParams.forEach((value, key) => {
  let displayName = nameMapping[key] || key;

  if (key.includes("input")) {
    datosDiv.innerHTML += `<p><strong>${displayName}:</strong> ${value}</p>`;
  } else if (key.includes("cantidad")|| key.includes("combo")) {
    pedidoDiv.innerHTML += `<p><strong>${displayName}:</strong> ${value}</p>`;
  } else if (key.includes("pago") || key === "retiro") {
    pagosDiv.innerHTML += `<p><strong>${displayName}:</strong> ${value}</p>`;
  }
});