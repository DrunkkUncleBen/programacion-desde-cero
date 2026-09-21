let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 0, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];

console.log("=== EJERCICIO 1 / find ===");

const personajeEncontrado = personajes.find((personaje) => {
    return personaje.nombre === "Lobo";
});

console.log(personajeEncontrado);

//----

console.log("=== EJERCICIO 2 / find ===");

const atacante = personajes.find((personaje) => {
    return personaje.ataque >= 20;
});

console.log(atacante);

//----

console.log("=== EJERCICIO 3 / find ===");

const personajeVivo = personajes.find((personaje) => {
    return personaje.vida > 0;
});

console.log(personajeVivo);

//----

console.log("=== EJERCICIO 4 / find ===");

const orco = personajes.find((personaje) => {
    return personaje.nombre === "Orco";
});

console.log(orco);

//----

console.log("=== EJERCICIO 5 / find ===");

const personajeFuerte = personajes.find((personaje) => {
    return personaje.vida > 0 && personaje.ataque >= 20;
});

console.log(personajeFuerte);

//----

console.log("=== EJERCICIO 6 / find ===");

const personajeEspecial = personajes.find((personaje) => {
    return personaje.vida > 0 && personaje.ataque > 20;
});

console.log(personajeEspecial);