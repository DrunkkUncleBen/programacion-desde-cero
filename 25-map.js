let personajes = [
    {
        nombre: "Guerrero",
        vida: 100,
        nivel: 5
    },
    {
        nombre: "Arquero",
        vida: 80,
        nivel: 4
    },
    {
        nombre: "Mago",
        vida: 60,
        nivel: 6
    }
];

console.log("=== EJERCICIO 1 / MAP ===");

let nombres = personajes.map(function(personaje) {
    return personaje.nombre;
});

console.log(nombres);

//----

console.log("=== EJERCICIO 2 / MAP Aumentar el nivel ===");

let nivelesNuevos = personajes.map(function(personaje) {
    return personaje.nivel + 1;
});

console.log(nivelesNuevos);

//----

console.log("=== EJERCICIO 2 / MAP Modificar una característica ===");

let vidasRestantes = personajes.map(function(personaje) {
    return personaje.vida - 20;
});

console.log(vidasRestantes);

//----

console.log("=== EJERCICIO 4 / MAP Crear un nuevo objeto ===");

let mensajes = personajes.map(function(personaje) {
    return personaje.nombre + " tiene " + personaje.vida +" de vida";
});

console.log(mensajes);