import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  const [usersInfo, setUsersInfo] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/users')
      .then(res => res.json())
      .then(datas => setUsersInfo(datas))
  }, [])

  function formHandler(event) {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email }
    fetch('http://localhost:2000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        const newUser = [...usersInfo,data]
        setUsersInfo(newUser)
        console.log(data)
      })

    event.target.reset()
  }

  return (
    <div>
      <h2>Send Client Data To Server</h2>
      <form onSubmit={formHandler}>
        <input type="text" placeholder='name' name='name' required /> <br /> <br />
        <input type="text" placeholder='email' name='email' required /> <br /> <br />
        <input type="submit" value='Submit' />
      </form>
      <div>
        {
          usersInfo?.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.id} . {user.name} - {user.email}</p>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default App;
