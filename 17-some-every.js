let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 0, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];

console.log("=== EJERCICIO 1 / some ===");

const hayAtacanteFuerte = personajes.some((personaje) => {
    return personaje.ataque > 20;
});

console.log(hayAtacanteFuerte);

//----

console.log("=== EJERCICIO 2 / some ===");

const hayPersonajeMuerto = personajes.some((personaje) => {
    return personaje.vida === 0;
});

console.log(hayPersonajeMuerto);

//----

console.log("=== EJERCICIO 3 / every ===");

const todosEstanVivos = personajes.every((personaje) => {
    return personaje.vida > 0;
});

console.log(todosEstanVivos);

//----

console.log("=== EJERCICIO 4 / every ===");

const todosTienenAtaque = personajes.every((personaje) => {
    return personaje.ataque >= 10;
});

console.log(todosTienenAtaque);

//----

console.log("=== EJERCICIO 4 / Final ===");

const equipoListo = personajes.every((personaje) => {
    return personaje.vida > 0 && personaje.ataque >= 10;
});

console.log(equipoListo);