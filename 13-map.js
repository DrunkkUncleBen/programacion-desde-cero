console.log("=== EJERCICIO 1 / map ===");

let numeros = [5, 10, 15, 20];

const dobles = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobles);

//----

console.log("=== EJERCICIO 2 / map ===");

let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 50, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 }
];

const nombres = personajes.map((personaje) => {
    return personaje.nombre;
});

console.log(nombres);

//----

console.log("=== EJERCICIO 3 / map - Aumentar la vida ===");

const personajesMejorados = personajes.map((personaje) => {
    return {
        nombre: personaje.nombre,
        vida: personaje.vida + 10
    };
});

console.log(personajesMejorados);

//----

console.log("=== EJERCICIO 4 / map() + condición ===");

const personajesEstado = personajes.map((personaje) => {

    let estado;

    if (personaje.vida > 60) {
        estado = "Fuerte";
    } else {
        estado = "Débil";
    }

    return {
        nombre: personaje.nombre,
        estado: estado
    };
});

console.log(personajesEstado);

//----

console.log("=== EJERCICIO 5 / map() + cálculo de Damage ===");

const personajesDamage = personajes.map((personaje) => {
    return {
        nombre: personaje.nombre,
        ataque: personaje.ataque,
        Dobledamage: personaje.ataque * 2
    };
});

console.log(personajesDamage);

//----

console.log("=== EJERCICIO 5 / Reto final ===");

const personajesPoder = personajes.map((personaje) => {
    return {
        nombre: personaje.nombre,
        vida: personaje.vida,
        ataque: personaje.ataque,
        poder: personaje.vida + personaje.ataque
    };
});

console.log(personajesPoder);