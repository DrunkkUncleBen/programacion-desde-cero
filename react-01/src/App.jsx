import { useState } from 'react'
import './App.css'

function Personaje({ nombre, vida, ataque, atacar }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Vida: {vida}</p>
      <p>Ataque: {ataque}</p>

      <button onClick={atacar}>
        Atacar
      </button>
    </div>
  )
}

function App() {
  const [vidaGuerrero, setVidaGuerrero] = useState(100)
  const [vidaMago, setVidaMago] = useState(80)
  const [vidaArquero, setVidaArquero] = useState(90)

  const [mensajeGuerrero, setMensajeGuerrero] = useState('')
  const [mensajeMago, setMensajeMago] = useState('')
  const [mensajeArquero, setMensajeArquero] = useState('')

  const [personajes, setPersonajes] = useState([
    { nombre: "Guerrero", vida: 100, ataque: 20 },
    { nombre: "Mago", vida: 80, ataque: 15 },
    { nombre: "Arquero", vida: 90, ataque: 25 },
    { nombre: "Ladron", vida: 70, ataque: 30 }
  ])

  function atacarMago() {
    if (vidaMago <= 0) {
      setMensajeMago("Mago ya está derrotado")
      return
    } else {
      setVidaMago(vidaMago - 20)
      setMensajeMago("Guerrero atacó a Mago")
    }
  }

  function atacarMagoArray() {
    setPersonajes(personajes.map(
      function (personaje) {
        if (personaje.nombre === "Mago") {
          return {
            ...personaje,
            vida: personaje.vida - 20
          }
        }
        return personaje
      }))
  }


  function atacarArquero() {
    if (vidaArquero <= 0) {
      setMensajeArquero("Arquero ya está derrotado")
      return
    } else {
      setVidaArquero(vidaArquero - 15)
      setMensajeArquero("Mago atacó a Arquero")
    }
  }

  function atacarGuerrero() {
    if (vidaGuerrero <= 0) {
      setMensajeGuerrero("Guerrero ya está derrotado")
      return
    } else {
      setVidaGuerrero(vidaGuerrero - 25)
      setMensajeGuerrero("Arquero atacó a Guerrero")
    }
  }

  return (
    <>
      <h1>Mi primer proyecto en React</h1>
      <p>Estoy aprendiendo React</p>

      <Personaje
        nombre="Guerrero"
        vida={vidaGuerrero}
        ataque={20}
        atacar={atacarMago}
      />
      <p>{mensajeGuerrero}</p>

      <Personaje
        nombre="Mago"
        vida={vidaMago}
        ataque={15}
        atacar={atacarArquero}
      />
      <p>{mensajeMago}</p>

      <Personaje
        nombre="Arquero"
        vida={vidaArquero}
        ataque={25}
        atacar={atacarGuerrero}
      />
      <p>{mensajeArquero}</p>

      <h2>Lista de personajes</h2>

      <div>
        {personajes.map(function (personaje) {
          return (
            <Personaje
              key={personaje.nombre}
              nombre={personaje.nombre}
              vida={personaje.vida}
              ataque={personaje.ataque}

              atacar={personaje.nombre === "Guerrero" ? atacarMago : personaje.nombre === "Mago" ? atacarArquero : atacarGuerrero}
            />
          )
        })}
      </div>
    </>
  )
}

export default App