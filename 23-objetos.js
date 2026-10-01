console.log("=== EJERCICIO 1 / objeto gato ===");

let gato = {
    nombre: "Michi",
    vida: 100,
    velocidad: 15,
    travieso: true,
}

console.log(gato.nombre);
console.log(gato.velocidad);
gato.vida = gato.vida - 25;
console.log("La vida del gato es: " + gato.vida);

//----

console.log("=== EJERCICIO 2 / objeto aventurero ===");

let jugador = {
    nombre: "Aventurero",
    vida: 100,
    monedas: 0,

    recibirDamage: function (cantidad) {
        this.vida = this.vida - cantidad;
        console.log("Vida del jugador es:",this.vida);
    }
}

jugador.recibirDamage(20);
jugador.recibirDamage(20);

//----

console.log("=== EJERCICIO 3 / 4 / El repartidor y la comida para gatos ===");

let repartidor = {
    nombre: "Repartidor",
    vida: 100,
    comidaGato: 2,

    usarComida: function (cantidadComida) {
        if (this.comidaGato >= cantidadComida) {
            this.comidaGato = this.comidaGato - cantidadComida;
            console.log("Comida restante: " + this.comidaGato);
        } else {
            console.log("No queda suficiente comida");

        }
    }
}

repartidor.usarComida(1);
repartidor.usarComida(1);
repartidor.usarComida(1);



