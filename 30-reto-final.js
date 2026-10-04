console.log("=== ARENA DE AVENTUREROS ===");

//Nota some() → ¿hay alguno? → true / false
//every() → ¿todos cumplen? → true / false
//find() → dame el primero que cumple
//filter() → dame todos los que cumplen
//map() → transforma todos
//reduce() → combina/reduce todos

let personajes = [
    {
        nombre: "Barbaro",
        vida: 100,
        nivel: 5,
        ataque: 20
    },
    {
        nombre: "Mago",
        vida: 90,
        nivel: 3,
        ataque: 15
    },
    {
        nombre: "Pistolero",
        vida: 80,
        nivel: 6,
        ataque: 25
    }
];

personajes.forEach(function(personaje) {
    // aquí va lo que quieres mostrar
    console.log("Nombre: " + personaje.nombre);
});

let personajesResistentes = personajes.filter(function(personaje) {
    // aquí va la condición
    return personaje.vida > 80;
});

console.log(personajesResistentes);

let nombresPersonajes = personajes.map(function(personaje) {
    // ¿qué propiedad queremos devolver?
    return personaje.nombre;
});

console.log(nombresPersonajes);

let vidaTotal = personajes.reduce(function(total, personaje) {
    // aquí tienes que sumar la vida
    return total + personaje.vida;
}, 0);

console.log(vidaTotal);

let personajeNivel6 = personajes.find(function(personaje) {
    // condición
    return personaje.nivel === 6;

});

console.log(personajeNivel6);

let tieneAtaqueAlto = personajes.some(function(personaje) {
    // condición
    return personaje.ataque >= 25;
});

console.log(tieneAtaqueAlto);