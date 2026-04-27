import { useEffect, useState } from 'react'
import './App.css'
import { NOTAS } from './NOTAS'
import { Nota } from './compo/Nota'
import { getAll, create } from './services/notes/index'


function App() {
  const [notas, setNotas] = useState([])
  const [texto, setTexto] = useState('')

  useEffect(() => {
    getAll().then(res => setNotas(res))
  }, [])

  function handleNuevaNota(e) {
    e.preventDefault()

    const newNota = {
      content: texto,
    }

    create(newNota).then(nueva => {
      setNotas(prevNotes => prevNotes.concat(nueva))
    })

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
      <ol>
        {
          notas.map(nota =>
            <li key={nota.id}>
              <Nota nota={nota}/>
            </li>
          )
        }
      </ol>
    </main>
  )
}

export default App
