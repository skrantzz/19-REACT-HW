import React, {useEffect, useState} from 'react';
import './App.css';
import API from './utils/API';
import Table from './components/Table'

function App() {
  const [users,setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([])
  useEffect(()=> API.getUsers().then(({data})=>{
    setUsers(data.results)
    setFilteredUsers(data.results)
  }) ,[])
  console.log(users)

  const handleFilter =(val)=>{
    const filtered = users.filter(a=> a.name.first.toLowerCase().includes(val) || a.name.last.toLowerCase().includes(val));
    setFilteredUsers(filtered)
  }

  return (
    <div className="App">
      <input onChange={(e)=> handleFilter(e.target.value.toLowerCase())} placeholder="Search For Employee"/>
     <Table data={filteredUsers}/>
    </div>
  );
}

export default App;
