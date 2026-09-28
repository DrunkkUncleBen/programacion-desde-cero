let personajes = ["Yoser", "Goblin", "Lobo", "Orco"];

//----

console.log("=== EJERCICIO 1 / includes ===");

const existeLobo = personajes.includes("Lobo");

console.log(existeLobo);

//----

console.log("=== EJERCICIO 2 / includes ===");

const existeDragon = personajes.includes("Dragon");

console.log(existeDragon);

//----

console.log("=== EJERCICIO 3 / indexOf ===");

const posicionLobo = personajes.indexOf("Lobo");

console.log(posicionLobo);

//----

console.log("=== EJERCICIO 4 / indexOf ===");

const posicionDragon = personajes.indexOf("Dragon");

console.log(posicionDragon);

//----

console.log("=== EJERCICIO 5 / indexOf + if ===");

const posicionOrco = personajes.indexOf("Orco");

if (posicionOrco !== -1) {
    console.log("El Orco existe");
} else {
    console.log("El Orco no existe");
}

//----

console.log("=== EJERCICIO 6 / Reto final ===");

const posicionHydra = personajes.indexOf("Hydra");

if (posicionHydra !== -1) {
    console.log("La Hydra existe");
} else {
    console.log("La Hydra no existe");
}

