console.log("== EJERCICIO 1 / JavaScript aplicado a páginas web ==");

let boton = document.querySelector("#boton");
let botonDespedir = document.querySelector("#botonDespedir");
let mensaje = document.querySelector("#mensaje");

console.log(boton);

console.log("== EJERCICIO 2 / 3 / Eventos ==");

boton.addEventListener("click", function() {
    mensaje.textContent = "¡Hoy estoy aprendiendo JavaScript!";
});

botonDespedir.addEventListener("click", function() {
    mensaje.textContent = "¡Hasta luego, YoseR!";
});

//----

console.log("== EJERCICIO 4 / Crear un contador de clics ==");

let numero = 0; 

let textoContador  = document.querySelector("#contador");

let botonContador = document.querySelector("#botonContador");

botonContador.addEventListener("click", function() {
    numero = numero + 1;

        // EJERCICIO 6 / Singular y plural
    if (numero === 1) {
        textoContador.textContent = "Has hecho clic " + numero + " vez";
    } else {
        textoContador.textContent = "Has hecho clic " + numero + " veces";
    }
});

//----

console.log("== EJERCICIO 5 / Reiniciar contador ==");

let botonReiniciar = document.querySelector("#botonReiniciar");

botonReiniciar.addEventListener("click", function() {
    numero = 0;
    textoContador .textContent = "Has hecho clic " + numero + " veces";
});

//----

console.log("== EJERCICIO 7 / Sistema de vida ==");

let vida = 100;

let textoVida = document.querySelector("#vidaPersonaje");

let botonDamage = document.querySelector("#botonDamage");

botonDamage.addEventListener("click", function() {
    vida = vida - 10;
    textoVida.textContent = "Vida: " + vida + " HP";

    if (vida <= 0) {
        textoVida.textContent = "¡Has muerto!";
    }
});

//----

console.log("== EJERCICIO 8 / Poción de curacióna ==");

let botonCurar = document.querySelector("#botonCurar");

botonCurar.addEventListener("click", function () {
    if (vida > 0 && vida < 100) {
        vida = vida + 10;
        textoVida.textContent = "Vida: " + vida + " HP";
    }
});