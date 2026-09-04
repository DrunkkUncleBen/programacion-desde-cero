console.log("=== EJERCICIO 1 / Función flecha ===");

const saludar = () => {
    console.log("Hola Yoser");
};

saludar();

//----

console.log("=== EJERCICIO 2 / Función flecha ===");

const saludarPersona = (nombre) => {
    console.log("Hola, " + nombre);
};

saludarPersona("Yoser");
saludarPersona("Carlos");

//----

console.log("=== EJERCICIO 3 / Función flecha ===");

const sumar = (a, b) => {
    return a + b;
};

let resultado = sumar(10, 5);

console.log("Resultado:", resultado);

//----

console.log("=== EJERCICIO 4 / Función flecha / Edad ===");

const esMayorDeEdad = (edad) => {
    return edad >= 18;
};

let edad1 = 25;
let edad2 = 15;

console.log("Edad 1:", edad1, "Mayor de edad:", esMayorDeEdad(edad1));
console.log("Edad 2:", edad2, "Mayor de edad:", esMayorDeEdad(edad2));

//----

console.log("=== EJERCICIO 46/ Función flecha de una sola línea ===");

const doble = (numero) => numero * 2;

console.log(doble(5));
console.log(doble(8));
console.log(doble(10));

//----

console.log("=== EJERCICIO 46/ Reto final ===");

let numeros = [5, 10, 15, 20];

const duplicar = (numero) => numero * 2;

for (let i = 0; i < numeros.length; i++) {
    console.log( "numero original:", numeros[i], "→","numero duplicado:", duplicar(numeros[i]) );
}

