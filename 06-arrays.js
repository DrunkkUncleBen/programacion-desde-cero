// Nota 

//Método	Qué hace

//push()	➕ agrega al final
//pop()	    ❌ elimina del final
//unshift()	➕ agrega al principio
//shift()	❌ elimina del principio

//----

console.log("=== EJERCICIO 1 ===");

let fruits = ["manzana", "banano", "naranja", "uva"];

console.log(fruits);

//----

console.log("=== EJERCICIO 2 / Posicion ===");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//----

console.log("=== EJERCICIO 3 / length ===");

console.log(fruits.length);

//----

console.log("=== EJERCICIO 4 / for ===");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//----

console.log("=== EJERCICIO 5 / Cambio ===");

fruits[1] = "pera";

console.log(fruits);

//----

console.log("=== EJERCICIO 6 / PUSH ===");

fruits.push("piña");

console.log(fruits);
console.log(fruits.length);

//----

console.log("=== EJERCICIO 7 / POP ===");

fruits.pop();

console.log(fruits);
console.log(fruits.length);

//----

console.log("=== EJERCICIO 8 / UNSHIFT ===");

fruits.unshift("fresa");

console.log(fruits);

//----

console.log("=== EJERCICIO 9 / SHIFT ===");

fruits.shift();

console.log(fruits);

//----

console.log("=== RETO ARRAYS ===");

let frutas = ["manzana", "pera", "naranja"];

// Agregar fresa al principio

frutas.unshift("fresa");

// Agregar piña al final

frutas.push("piña");

console.log(frutas);

//----

console.log("=== EJERCICIO 10 ===");

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//----

console.log("=== RETO FINAL ===");

for (let indiceFruta = 0; indiceFruta < frutas.length; indiceFruta++) {
    console.log("Fruta:", frutas[indiceFruta]);
}