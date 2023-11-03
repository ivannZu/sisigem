// JavaScript para manejar operaciones CRUD (frontend)

// Variables para rastrear los documentos
let listaAsistencia = [];
let actasSesion = [];

// Función para mostrar listas de asistencia
function showListasAsistencia() {
    const listContainer = document.getElementById("listContainer");
    listContainer.innerHTML = "";
    listaAsistencia.forEach((lista, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${lista.nombre} <button onclick="editLista(${index})">Editar</button> <button onclick="deleteLista(${index})">Eliminar</button>
        `;
        listContainer.appendChild(listItem);
    });
}

// Función para mostrar actas de sesión
function showActasSesion() {
    const actaContainer = document.getElementById("actaContainer");
    actaContainer.innerHTML = "";
    actasSesion.forEach((acta, index) => {
        const actaItem = document.createElement("li");
        actaItem.innerHTML = `
            ${acta.nombre} <button onclick="editActa(${index})">Editar</button> <button onclick="deleteActa(${index})">Eliminar</button>
        `;
        actaContainer.appendChild(actaItem);
    });
}

// Función para crear lista de asistencia
function createLista() {
    const nombre = prompt("Nombre de la Lista de Asistencia:");
    if (nombre) {
        listaAsistencia.push({ nombre });
        showListasAsistencia();
    }
}

// Función para editar lista de asistencia
function editLista(index) {
    const nuevoNombre = prompt("Editar Nombre de la Lista de Asistencia:", listaAsistencia[index].nombre);
    if (nuevoNombre) {
        listaAsistencia[index].nombre = nuevoNombre;
        showListasAsistencia();
    }
}

// Función para eliminar lista de asistencia
function deleteLista(index) {
    listaAsistencia.splice(index, 1);
    showListasAsistencia();
}

// Función para crear acta de sesión
function createActa() {
    const nombre = prompt("Nombre del Acta de Sesión:");
    if (nombre) {
        actasSesion.push({ nombre });
        showActasSesion();
    }
}

// Función para editar acta de sesión
function editActa(index) {
    const nuevoNombre = prompt("Editar Nombre del Acta de Sesión:", actasSesion[index].nombre);
    if (nuevoNombre) {
        actasSesion[index].nombre = nuevoNombre;
        showActasSesion();
    }
}

// Función para eliminar acta de sesión
function deleteActa(index) {
    actasSesion.splice(index, 1);
    showActasSesion();
}

// Mostrar las listas de asistencia y actas de sesión iniciales
showListasAsistencia();
showActasSesion();



