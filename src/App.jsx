import { useState } from 'react'
import './App.css'
import { NOTAS } from './NOTAS'
import { Nota } from './compo/Nota'


function App() {
  const [notas, setNotas] = useState(NOTAS)
  const [texto, setTexto] = useState('')
  const [filtro, setFiltro] = useState(false)

  function handleNuevaNota(e) {
    e.preventDefault()

    const newNota = {
      id: notas.length +1,
      contenido: texto,
    }
    setNotas([...notas,newNota])

    setTexto('')
  }

  return (
    <main className='app'>
      <h1>Notes App</h1>
      <form onSubmit={handleNuevaNota}>
        <legend>Nueva</legend>
        <input type="text" onChange={(e) => setTexto(e.target.value)} value={texto}/>
        <button>Guardar</button>
      </form>
      <button onClick={() => setFiltro(!filtro)}>{filtro ? 'Importantes' : 'Todos'}</button>
      {
        notas.map(nota =>
          filtro 
          ? nota.importante && <Nota key={nota.id} nota={nota}/>
          : <Nota key={nota.id} nota={nota}/>
        )
      }
    </main>
  )
}

export default App
