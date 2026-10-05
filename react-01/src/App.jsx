import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
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
  const [count, setCount] = useState(10)
  const [vidaGuerrero, setVidaGuerrero] = useState(100)
  const [vidaMago, setVidaMago] = useState(80)
  const [vidaArquero, setVidaArquero] = useState(90)

  const [mensajeGuerrero, setMensajeGuerrero] = useState('')
  const [mensajeMago, setMensajeMago] = useState('')
  const [mensajeArquero, setMensajeArquero] = useState('')

  function atacarMago() {
    if (vidaMago <= 0) {
      setMensajeMago("Mago ya está derrotado")
      return
    } else {
      setVidaMago(vidaMago - 20)
      setMensajeMago("Guerrero atacó a Mago")
    }
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
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Mi primer proyecto en React</h1>
          <p>Estoy aprendiendo React</p>
          <Personaje nombre="Guerrero" vida={vidaGuerrero} ataque={20} atacar={atacarGuerrero} />
          <p>{mensajeGuerrero}</p>
          <Personaje nombre="Mago" vida={vidaMago} ataque={15} atacar={atacarMago} />
          <p>{mensajeMago}</p>
          <Personaje nombre="Arquero" vida={vidaArquero} ataque={25} atacar={atacarArquero} />
          <p>{mensajeArquero}</p>

          <button>Haz clic</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
