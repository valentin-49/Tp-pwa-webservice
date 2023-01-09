import React, {useEffect, useState} from 'react';
import axios from "axios";

import '../global.css';

function Pilote() {

  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })  
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <h1>PILOTE</h1>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Pilote;