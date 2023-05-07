import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/users')
      .then(res => res.json())
      .then(datas => setUsers(datas))
  }, [])
  return (
    <div>
      <h2>Send Client Data To Server</h2>
      {
        users?.map((user) => {
          return (
            <div>
              <p>{user.id}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default App;
