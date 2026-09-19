console.log("=== EJERCICIO 1 / reduce ===");

let numeros = [10, 20, 30, 40];

const total = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(total);

//----

console.log("=== EJERCICIO 2 / Vida total ===");

let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 0, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];


const vidaTotal = personajes.reduce((acumulador, personaje) => {
    return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

//----

console.log("=== EJERCICIO 3 / Ataque total ===");

const ataqueTotal = personajes.reduce((acumulador, personaje) => {
    return acumulador + personaje.ataque;
}, 0);

console.log(ataqueTotal);

//----

console.log("=== EJERCICIO 4 / Contar personajes vivos ===");

const personajesVivos = personajes.reduce((acumulador, personaje) => {
    if (personaje.vida > 0) {
        return acumulador + 1;
    }
    return acumulador;
}, 0);

console.log(personajesVivos);

//----

console.log("=== EJERCICIO 5 / Encontrar el ataque más alto ===");

const ataqueMasAlto = personajes.reduce((acumulador, personaje) => {

    if (personaje.ataque > acumulador) {
        return personaje.ataque;
    }

    return acumulador;

}, 0);

console.log(ataqueMasAlto);

//----

console.log("=== EJERCICIO 6 / Poder total del equipo ===");

const poderTotal = personajes.reduce((acumulador, personaje) => {

    return acumulador + (personaje.vida + personaje.ataque);

}, 0);

console.log(poderTotal);

