import './App.css'

function App() {

  function formHandler(event) {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email }
    console.log(user)

    event.target.reset()
  }


  return (
    <>
      <h1>Simple CRUD</h1>

      <form onSubmit={formHandler}>
        <input type="text" placeholder='name' name='name' required /> <br /> <br />
        <input type="text" placeholder='email' name='email' required /> <br /> <br />
        <input type="submit" value='Submit' />
      </form>

    </>
  )
}

export default App
