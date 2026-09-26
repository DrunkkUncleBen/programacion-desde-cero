let personajes = [
    { nombre: "Yoser", vida: 100, ataque: 20 },
    { nombre: "Goblin", vida: 0, ataque: 10 },
    { nombre: "Lobo", vida: 70, ataque: 15 },
    { nombre: "Orco", vida: 80, ataque: 25 }
];

console.log("=== EJERCICIO 1 / sort ===");

const personajesOrdenados = [...personajes];

personajesOrdenados.sort((a, b) => {
    return a.ataque - b.ataque;
});

console.log(personajesOrdenados);

//----

console.log("=== EJERCICIO 2 / sort ===");

const personajesPorAtaque = [...personajes];

personajesPorAtaque.sort((a, b) => {
    return b.ataque - a.ataque;
});

console.log(personajesPorAtaque);

//----

console.log("=== EJERCICIO 3 / sort por vida ===");

const personajesPorVida = [...personajes];

personajesPorVida.sort((a, b) => {
    return a.vida - b.vida;
});

console.log(personajesPorVida);

//----

console.log("=== EJERCICIO 4 / filter + sort ===");

const vivosPorAtaque = personajes
    .filter((personaje) => {
        return personaje.vida > 0;
    })
    .sort((a, b) => {
        return b.ataque - a.ataque;
    });

console.log(vivosPorAtaque);

