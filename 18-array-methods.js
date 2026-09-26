let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 0, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];

console.log("=== EJERCICIO 1 / map() + filter() ===");

const nombresVivos = personajes
    .filter((personaje) => {
        return personaje.vida > 0;
    })
    .map((personaje) => {
        return personaje.nombre;
    });

console.log(nombresVivos);

//----

console.log("=== EJERCICIO 2 / map() + filter() ===");

const nombresAtacantes = personajes
    .filter((personaje) => {
        return personaje.ataque >= 15
    })
    .map((personaje) => {
        return personaje.nombre;
    });

console.log(nombresAtacantes);

//----

console.log("=== EJERCICIO 3 / filter() + map() + cálculo ===");

const ataquesVivos = personajes
    .filter((personaje) => {
        return personaje.vida > 0;
    })
    .map((personaje) => {
        return {
            nombre: personaje.nombre,
            ataqueDoble: personaje.ataque * 2
};
    });

console.log(ataquesVivos);

//----

console.log("=== EJERCICIO 4 / filter() + map() + reduce() ===");

const ataqueTotalVivos = personajes
    .filter((personaje) => {
        return personaje.vida > 0;
    })
    .reduce((acumulador, personaje) => {
        return acumulador + personaje.ataque;
    }, 0);

console.log(ataqueTotalVivos);