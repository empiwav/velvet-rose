let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function render() {
    let lista = document.getElementById("resumen");
    let total = document.getElementById("total");

    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach(item => {
        suma += item.precio;
        lista.innerHTML += `<li>${item.nombre} - $${item.precio}</li>`;
    });

    total.innerText = suma;
}

function pagar() {
    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Completa tus datos");
        return;
    }

    alert("Compra realizada con éxito 🛍️✨");

    localStorage.removeItem("carrito");
    window.location.href = "index.html";
}

render();