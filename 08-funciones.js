console.log("=== EJERCICIO 1 ===");

function saludar() {
    console.log("Hola Yoser");
}

saludar();

//----

console.log("=== EJERCICIO 2 ===");

function saludo() {
    console.log("Estoy aprendiendo JavaScript");
}

saludo();

//----

console.log("=== EJERCICIO 3 ===");

function saludarPersona(nombre) {
    console.log("Hola", nombre);
}

saludarPersona("Yoser");
saludarPersona("Carlos");

//----

console.log("=== EJERCICIO 4 ===");

function presentar(nombre, edad) {
    console.log("Hola", nombre, "tienes", edad, "años");
}

presentar ("Yoser", 35);
presentar ("Carlos", 38);

//----

console.log("=== EJERCICIO 5 ===");

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);

console.log(resultado);

//----

console.log("=== EJERCICIO 6 ===");

function esMayorDeEdad(edad) {
    return edad >= 18;
}

console.log(esMayorDeEdad(25));
console.log(esMayorDeEdad(15));

//----

console.log("=== RETO FINAL ===");

function calcular(numero1, numero2) {
    return numero1 + numero2;

}

let resultadoFinal = calcular(10, 15);

console.log("Resultado:", resultadoFinal);