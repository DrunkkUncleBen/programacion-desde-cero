console.log("=== EJERCICIO 1 / Destructuring de objetos ===");

let personaje = {
    nombre: "Guerrero",
    vida: 100,
    ataque: 25
};

let enemigo = {
    nombre: "Orco",
    vida: 150,
    ataque: 30,
    nivel: 10
};

let { nombre, vida, ataque } = personaje;

console.log(nombre);
console.log(vida);
console.log(ataque);

//----

console.log("=== EJERCICIO 2 / Destructuring de objetos ===");

let { nombre: nombreEnemigo, vida: vidaEnemigo, nivel: nivelEnemigo } = enemigo;

console.log(nombreEnemigo);
console.log(vidaEnemigo);
console.log(nivelEnemigo);

//----

console.log("=== EJERCICIO 3 / Destructuring de arrays ===");

let armas = ["Espada", "Arco", "Báculo"];

let [arma1, arma2, arma3] = armas;

console.log(arma1);
console.log(arma2);
console.log(arma3);

//----

console.log("=== EJERCICIO 4 / Spread de arrays ===");

let equipo1 = ["Guerrero", "Mago"];
let equipo2 = ["Arquero", "Ladrón"];

let equipoCompleto = [...equipo1, ...equipo2];

console.log(equipoCompleto);

//----

console.log("=== EJERCICIO 5 / Spread de objetos ===");

let jugador = {
    nombre: "Aventurero",
    vida: 100,
    nivel: 5
};

let jugadorMejorado = {... jugador,
    nombre: "Aventurero Mejorado",
    vida: 100, 
    nivel: 6
};

console.log(jugadorMejorado);