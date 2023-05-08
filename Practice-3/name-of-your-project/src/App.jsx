import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Practice CRUD</h1>

      <form >
        <input type="text" name='name' placeholder='name' required />
        <br /> <br />
        <input type="email" name='email' placeholder='email' required />
        <br /> <br />
        <input type="submit" value='add new user' required />
      </form>
    </>
  )
}

export default App
