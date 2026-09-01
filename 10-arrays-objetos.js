console.log("=== EJERCICIO 1 ===");

let personajes = [
    {
        nombre: "Yoser",
        vida: 100,
        ataque: 20
    },
    {
        nombre: "Goblin",
        vida: 50,
        ataque: 10
    },
    {
        nombre: "Lobo",
        vida: 70,
        ataque: 15
    }
];

console.log(personajes);

//----

console.log("");
console.log("=== EJERCICIO 2 / Nombre y Vida===");

console.log(personajes[1].nombre)
console.log(personajes[1].vida)

//----

console.log("");
console.log("=== EJERCICIO 3 / Nombres ===");

for (let i = 0; i < personajes.length; i++) {
    console.log(personajes[i].nombre);
}

//----

console.log("");
console.log("=== EJERCICIO 4 / Vida > 60 ===");

for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].vida > 60) {
        console.log(personajes[i].nombre);
    }
}

//----

console.log("");
console.log("=== EJERCICIO 5 / Actualizar Vida ===");

personajes[1].vida = personajes[1].vida - personajes[1].vida ;
console.log(personajes[1].vida);

//----

console.log("");
console.log("=== EJERCICIO 6 / Atacar ===");

function atacar(atacante, enemigo) {
    enemigo.vida = enemigo.vida - atacante.ataque;
}

atacar(personajes[0], personajes[1]);

console.log("Nueva vida:", personajes[1].vida);

//----

console.log("");
console.log("=== EJERCICIO 7 / Reinicio de vida ===");

personajes[0].vida = 100;
personajes[1].vida = 50;
personajes[2].vida = 70;

console.log(personajes);

//----

console.log("");
console.log("=== EJERCICIO 8 / Ataques dobles===");

atacar(personajes[1], personajes[2]);

console.log("Nueva vida:", personajes[2].vida);

//----

console.log("");
console.log("=== EJERCICIO 9 / Reto Final ===");

atacar(personajes[0], personajes[1]);
console.log("Nueva vida:", personajes[1].vida);

atacar(personajes[0], personajes[1]);
console.log("Nueva vida:", personajes[1].vida);

if (personajes[1].vida > 0) {
    console.log("Goblin sigue vivo");
} else {
    console.log("Goblin ha muerto");
}