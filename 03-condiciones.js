let age = 25;

if (age >= 18) {
    console.log("Puede entrar");
}


console.log("");

console.log("=== EJERCICIO 1 ===");

let temperature = 30;

if (temperature >= 25) {
    console.log("Hace calor");
} else {
    console.log("No hace calor");
}

console.log("");

console.log("=== EJERCICIO 2 ELSE===");

let height = 5.6;

if (height >= 5.7) {
    console.log("Estatura aceptada");
} else {
    console.log("Estatura no aceptada");
}

console.log("");

console.log("=== EJERCICIO 3 EDAD ===");

let personAge = 25;

if (personAge < 13) {
    console.log("Niño");
} else if (personAge >= 13 && personAge <= 17) {
    console.log("Adolescente");
} else if (personAge >= 18 && personAge <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto Mayor");
}


console.log("");

console.log("=== EJERCICIO 4 DESCUENTOS ===");

let customerAge = 25;

if (customerAge < 12) {
    console.log("Descuento del 50%");
} else if (customerAge >= 12 && customerAge <= 17) {
    console.log("Descuento del 20%");
} else if (customerAge >= 18 && customerAge <= 59) {
    console.log("Sin descuento");
} else {
    console.log("Descuento del 30%");
}


console.log("");

console.log("=== EJERCICIO 5 ENVÍO ===");

let purchaseTotal = 30000;

if (purchaseTotal < 10000){
    console.log("Envío: ₡2.500");
} else if (purchaseTotal >= 10000 && purchaseTotal <= 24999){
    console.log("Envío: ₡1.500");
} else if (purchaseTotal >= 25000 && purchaseTotal <= 49999){
    console.log("Envío: ₡500");
} else {
    console.log("Envío gratis");
}

