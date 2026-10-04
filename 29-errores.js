console.log("=== EJERCICIO 1 / Try Catch ===");

try {
    console.log(nombreJugador);
} catch (error) {
    console.log("Ocurrió un error");
}

//----

console.log("=== EJERCICIO 2 / Try Catch / Con error ===");

try {
    console.log(nombreJugador);
} catch (error) {
    console.log(error);
}

//----

console.log("=== EJERCICIO 3 / Finally ===");

try {
    console.log("El jugador está jugando");
} catch (error) {
    console.log("Ocurrió un error");
} finally {
    console.log("Fin del turno");
}

//----

console.log("=== EJERCICIO 4 / Crear tu propio error ===");

function verificarVida(vida) {
    if (vida <= 0) {
        throw new Error("El jugador está muerto");
    }
    else {
        console.log("El jugador sigue vivo");
    }
}
try {
    verificarVida(0);
} catch (error) {
    console.log(error.message);
}

//----

console.log("=== EJERCICIO 5 / Reto Final ===");

function atacar(vidaEnemigo, damage) {
    if (damage <= 0) {
        throw new Error("El daño debe ser mayor que 0");
    } else {
        console.log("Damage recibido: " + damage + " Vida restante: " + (vidaEnemigo - damage));
    }
}
try {
    atacar(100, 25);
} catch (error) {
    console.log(error.message);
}