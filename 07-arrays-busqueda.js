console.log("=== EJERCICIO 1 / includes ===");

let frutas = ["manzana", "pera", "naranja", "uva"];

console.log(frutas.includes("pera"));

console.log(frutas.includes("sandía"));

//----

console.log("=== EJERCICIO Practica / includes ===");

console.log(frutas.includes("pera"));
console.log(frutas.includes("uva"));
console.log(frutas.includes("sandía"));

//----

console.log("");
console.log("=== EJERCICIO 2 / INCLUDES + IF ===");

frutas.push("sandía");

if (frutas.includes("pera")) {
    console.log("Tenemos pera");
}

if (frutas.includes("sandía")) {
    console.log("Tenemos sandía");
}

//----

console.log("");
console.log("=== EJERCICIO 3 ===");

if (frutas.includes("mango")) {
    console.log("Tenemos mango");
} else {
    console.log("No tenemos mango");
}

//----

console.log("");

console.log("=== EJERCICIO 4 / FOR ===");

for (let i = 0; i < frutas.length; i++) {

    if (frutas[i] === "pera") {
        console.log("Pera encontrada");
    } else if (frutas[i] === "uva") {
        console.log("Uva encontrada");
    }

}

//----

console.log("");

console.log("=== EJERCICIO 5 / FOR ===");

for (let i = 0; i < frutas.length; i++) {

    if (frutas[i].length > 5) {
    console.log(frutas[i]);
    }
}

//----

console.log("=== RETO FINAL ===");

let numeros = [3, 8, 12, 5, 20, 7, 10];

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }

}

 