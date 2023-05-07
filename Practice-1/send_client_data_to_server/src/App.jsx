import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/users')
      .then(res => res.json())
      .then(datas => setUsers(datas))
  }, [])

  function formHandler(event){
    event.preventDefault()
    const Name = event.target.name.value ;
    const Email = event.target.email.value ;

    console.log(Name,Email)
  }

  return (
    <div>
      <h2>Send Client Data To Server</h2>
      <form onSubmit={formHandler}>
        <input type="text" placeholder='name' name='name' required/> <br /> <br />
        <input type="text" placeholder='email' name='email' required /> <br /> <br />
        <input type="submit" value='Submit' />
      </form>
      <div>
        {
          users?.map((user) => {
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
