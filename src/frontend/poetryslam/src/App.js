import React, { useState, useEffect } from 'react';
import './App.css';
import { Users } from './components/Users';
import { Userform } from './components/Userform';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('users').then((res) => res.json()).then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="App">
      <Users users={users} />
      <Userform />
    </div>
  );
}

export default App;
