import React from 'react';
import './App.css'

function App() {

  function formHandler(event){
    event.preventDefault()
    const name = event.target.name.value ;
    const email = event.target.email.value ;
    const user = {name , email}

    console.log(user)

    event.target.reset()
  }
  return (
    <>
      <h1>Practice CRUD</h1>

      <form onSubmit={formHandler}>
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
