const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const listaPendientes = document.getElementById("listaPendientes");
const listaHechas = document.getElementById("listaHechas");



boton.addEventListener("click", agregarTarea);

function agregarTarea() {
    const texto = input.value;

    if (texto === ""){
        alert("Escribe una tarea ❤️");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    const botonHecho = document.createElement("span");
    botonHecho.textContent = "✔️";
    botonHecho.style.cursor = "pointer";

    botonHecho.addEventListener("click", ()=> {
        li.removeChild(botonHecho);
        li.classList.add("completada");
        listaHechas.appendChild(li);
    });

    
li.appendChild(botonHecho);
listaPendientes.appendChild(li);

input.value = "";
}