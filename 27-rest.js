console.log("=== EJERCICIO 1 / Rest ===");

function mostrarNumeros(...numeros) {
    console.log(numeros);
}

mostrarNumeros(10, 20, 30, 40);

//----

console.log("=== EJERCICIO 2 / Rest + reduce ===");

function sumarTodos(...numeros) {

    let resultado = numeros.reduce(function(total, numero) {
        return total + numero;
    });
    return resultado;
}

console.log(sumarTodos(10, 20, 30));

//----

console.log("=== EJERCICIO 3 / Rest + juego ===");

function recibirDamage(...damages) {
    let resultado = damages.reduce(function (total, damage) {
        return total + damage;
    });
    return resultado;
}

console.log(recibirDamage(15, 5, 20, 10));

//----

console.log("=== EJERCICIO 4 / Rest + juego ===");

function crearEquipo(...personajes) {
    console.log(personajes);
}

crearEquipo("Guerrero", "Mago", "Arquero");