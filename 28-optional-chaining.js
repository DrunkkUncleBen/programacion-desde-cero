console.log("=== EJERCICIO 1 / Optional Chaining ===");

let jugador = {
    nombre: "Aventurero",
    vida: 100,
    arma: {
        nombre: "Espada",
        daño: 25
    }
};

console.log(jugador.arma?.nombre);

//----

console.log("=== EJERCICIO 2 / Nullish Coalescing ===");

let jugador2 = {
    nombre: "Guerrero",
    vida: 100
};

console.log(jugador2.arma?.nombre ?? "Sin arma equipada");

//----

console.log("=== EJERCICIO 3 / ?? ===");

let jugador3 = {
    nombre: "Mago",
    vida: 0
};

console.log(jugador3.vida ?? 100);

//----

console.log("=== EJERCICIO 4 / Jugador ===");

let jugador4 = {
    nombre: "Guerrero",
    vida: 80,
    inventario: {
        objeto: "Poción"
    }
};

console.log(jugador4.nombre, jugador4.vida, jugador4.inventario?.objeto ?? "Sin objeto");
