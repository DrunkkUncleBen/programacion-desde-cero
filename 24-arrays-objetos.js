console.log("=== EJERCICIO 1 / Arrays y Objetos ===");


let enemigos = [
    {
        nombre: "Goblin",
        vida: 50,
        ataque: 10
    },
    {
        nombre: "Orco",
        vida: 120,
        ataque: 25
    },
    {
        nombre: "Esqueleto",
        vida: 70,
        ataque: 15
    }
];

enemigos.forEach(function(enemigo) {
    console.log("Nombre del enemigo: " + enemigo.nombre);
});

//----

console.log("=== EJERCICIO 2 / FILTER ===");

let enemigosFuertes = enemigos.filter(function(enemigo) {
    return enemigo.vida > 70;
});

enemigosFuertes.forEach(function(enemigo) {
    console.log(enemigo.nombre);
});

console.log("=== EJERCICIO 2 / FILTER ===");

//---

console.log("=== EJERCICIO 3 / FILTER ===");

let enemigosDebiles = enemigos.filter(function(enemigo) {
    return enemigo.vida <= 70;
});

enemigosDebiles.forEach(function(enemigo) {
    console.log(enemigo.nombre);
});

//----

console.log("=== EJERCICIO 4 / FILTER ===");

let enemigosPoderosos = enemigos.filter(function(enemigo) {
    return enemigo.ataque >= 20;
});

enemigosPoderosos.forEach(function(enemigo) {
    console.log(enemigo.nombre);
});
