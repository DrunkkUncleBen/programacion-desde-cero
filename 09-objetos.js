console.log("=== EJERCICIO 1 ===");

let jugador = {
    nombre: "Yoser",
    vida: 100,
    ataque: 20
};

console.log(jugador);

//----

console.log("");
console.log("=== EJERCICIO 2 ===");

console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Ataque:", jugador.ataque);

//----

console.log("");
console.log("=== EJERCICIO 3 / Perdio Vida ===");

jugador.vida = 70;

console.log("Nueva vida:", jugador.vida);

//----

console.log("");
console.log("=== EJERCICIO 4 / Perdio Vida 2===");

jugador.vida = jugador.vida - 20;

console.log("Nueva vida:", jugador.vida);

//----

console.log("");
console.log("=== EJERCICIO 5 / Vivo o Muerto===");

if (jugador.vida > 0) {
    console.log("Jugador esta vivo");
} else {
    console.log("Jugador esta muerto");
}

//----

console.log("");
console.log("=== EJERCICIO 6 / Ataque ===");

jugador.ataque = jugador.ataque + 15;  

console.log("Nuevo ataque:", jugador.ataque);

//----

console.log("");
console.log("=== EJERCICIO 7 / Reto Final / Funcion ===");

function recibirDanio(cantidad) {
    jugador.vida = jugador.vida - cantidad;
}
recibirDanio(30)
recibirDanio(20)

console.log("Nueva vida:", jugador.vida);



