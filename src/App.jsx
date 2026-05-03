import { useEffect, useState } from 'react'
import './App.css'
import { NOTAS } from './NOTAS'
import { Nota } from './compo/Nota'
import { getAll, create } from './services/notes/index'
import loginServise from './services/login'


function App() {
  const [notas, setNotas] = useState([])
  const [texto, setTexto] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPass] = useState('')
  const [user, setUser] = useState(null)


  useEffect(() => {
    getAll().then(res => setNotas(res))
  }, [])

  function handleNuevaNota(e) {
    e.preventDefault()

    const newNota = {
      content: texto,
    }

    const { token } = user

    create(newNota, {token}).then(nueva => {
      setNotas(prevNotes => prevNotes.concat(nueva))
      setTexto('')
    })
  }

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const user = await loginServise.login({
        userName,
        password
      })
      console.log(user)
      setUser(user)
      setUserName('')
      setPass('')
    } catch(e) { console.log(e) }
  }

  return (
    <main className='app'>
      <h1>Notes App</h1>
      <form onSubmit={handleLogin}>
        <legend>Login</legend>
        <input
          type="text"
          placeholder='user name'
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          type="password"
          placeholder='pass'
          onChange={(e) => setPass(e.target.value)}
          value={password}
        />
        <button>Log</button>
      </form>
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
