let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 0, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];

//----

console.log("=== EJERCICIO 1 / forEach ===");

personajes.forEach((personaje) => {
    console.log(personaje.nombre);
});

//----

console.log("=== EJERCICIO 2 / forEach ===");

personajes.forEach((personaje) => {
    console.log(personaje.nombre ,"tiene", personaje.vida, "de vida");
});

//----

console.log("=== EJERCICIO 3 / forEach + if ===");

personajes.forEach((personaje) => {
    if (personaje.vida > 0) {
        console.log(personaje.nombre, "está vivo");
    }
});

//----

console.log("=== EJERCICIO 4 / forEach + if ===");

personajes.forEach((personaje) => {
    
    if (personaje.vida === 0) {
        console.log(personaje.nombre, "está derrotado");
    }
});

//----

console.log("=== EJERCICIO 5 / Estado de personajes ===");

personajes.forEach((personaje) => {
    if (personaje.vida > 0) {
        console.log(personaje.nombre, "está vivo");
    } else {
        (personaje.vida === 0)
        console.log(personaje.nombre, "está derrotado");
    }
});

//----

console.log("=== EJERCICIO 6 / Estado avanzado ===");

personajes.forEach((personaje) => {
    if (personaje.vida >= 100) {
        console.log(personaje.nombre, "está en perfecto estado");
    } else if (personaje.vida > 0) {
        console.log(personaje.nombre, "está herido");
    } else {
        console.log(personaje.nombre, "está derrotado");
    }
});