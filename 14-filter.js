console.log("=== EJERCICIO 1 / filter ===");

let numeros = [5, 10, 15, 20, 25];

const mayoresDe10 = numeros.filter((numero) => {
    // aquí va tu condición
    return numero > 10;
});

console.log(mayoresDe10); // [15, 20, 25]

//----

console.log("=== EJERCICIO 2 / filter ===");

let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 50, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];

const personajesVivos = personajes.filter((personaje) => {
    // aquí va tu condición
    return personaje.vida > 0;
});

console.log(personajesVivos); // [{ nombre: "Yoser", vida: 100 }, { nombre: "Lobo", vida: 70 }]

//----

console.log("=== EJERCICIO 3 / filter ===");

const personajesFuertes = personajes.filter((personaje) => {
    // aquí va tu condición
    return personaje.vida >= 50;
});

console.log(personajesFuertes); // [{ nombre: "Yoser", vida: 100 }, { nombre: "Lobo", vida: 70 }]

//----

console.log("=== EJERCICIO 4 / filter ===");

const atacantesFuertes = personajes.filter((personaje) => {
    // aquí va tu condición
    return personaje.ataque >= 15;
});

console.log(atacantesFuertes); // [{ nombre: "Yoser", ataque: 20 }, { nombre: "Lobo", ataque: 15 }, { nombre: "Orco", ataque: 25 }]

//----

console.log("=== EJERCICIO 5 / filter ===");

const personajesListos = personajes.filter((personaje) => {
    // aquí va tu condición
    return personaje.vida > 0 && personaje.ataque >= 15;
});

console.log(personajesListos); // [{ nombre: "Yoser", vida: 100, ataque: 20 }, { nombre: "Lobo", vida: 70, ataque: 15 }, { nombre: "Orco", vida: 80, ataque: 25 }]

//----

console.log("=== EJERCICIO 6 / filter ===");

const personajesElite = personajes.filter((personaje) => {
    // aquí va tu condición
    return personaje.vida > 50 && personaje.ataque >= 20;
});

console.log(personajesElite); // [{ nombre: "Yoser", vida: 100, ataque: 20 }, { nombre: "Orco", vida: 80, ataque: 25 }]
