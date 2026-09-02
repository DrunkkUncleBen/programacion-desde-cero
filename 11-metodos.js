console.log("=== EJERCICIO 1 / Saludar ===");

let jugador = {
    nombre: "Yoser",
    vida: 100,
    ataque: 20,
    
    saludar: function() {
        console.log("Hola, soy", this.nombre);
    },

//---- ("=== EJERCICIO 2 / Vida ===")

    mostrarVida: function() {
        console.log("Vida:", this.vida);
    },

//---- ("=== EJERCICIO 3 / Daño ===");    

    recibirDanio: function(cantidad) {
        this.vida = this.vida - cantidad;
    console.log("Vida de Yoser es:",this.vida);
    },

//---- ("=== EJERCICIO 4 / atacar  ===");
//---- ("=== EJERCICIO 6 / Información del ataque  ===");

    atacar: function(enemigo) {
    enemigo.vida = enemigo.vida - this.ataque;
    console.log(this.nombre, "ataco a:",enemigo.nombre);
    console.log("Daño:", this.ataque);
    console.log("Vida restante:", enemigo.vida);

//---- ("=== EJERCICIO 7 / Final ===");

    enemigo.vida = enemigo.vida - this.ataque;
    
    console.log(this.nombre, "ataco a:",enemigo.nombre);
    console.log("Daño:", this.ataque);
    console.log("Vida restante:", enemigo.vida);

    this.vida = this.vida - enemigo.ataque;

    console.log(enemigo.nombre, "ataco a:",this.nombre);
    console.log("Daño:", enemigo.ataque);
    console.log("Vida restante:", this.vida);

    },

//---- ("=== EJERCICIO 5 / Esta vivo? Return ===");

    estaVivo: function() {
        return this.vida > 0;
    }


};

//---- 👾 Otro personaje

let goblin = {
    nombre: "Goblin",
    vida: 50,
    ataque: 10,
};

jugador.saludar();
jugador.mostrarVida();
jugador.recibirDanio(30);
jugador.recibirDanio(20);
jugador.atacar(goblin);
jugador.estaVivo();

if (jugador.estaVivo()) {
    console.log("Puedes seguir jugando");
} else {
    console.log("Game Over");
}
