import React, {useEffect, useState} from 'react';
import './style.css';
import API from './utils/API';
import Table from './components/Table'
import Header from './components/Header'
import Login from './components/Login'

function App() {
  const [users,setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(()=> {
    API.getUsers().then(({data})=>{
    setUsers(data.results)
    setFilteredUsers(data.results)
  })} ,[])
  console.log(users)

  const handleLogin =({email,password})=>{
    API.login(password, email).then(data=> setCurrentUser(data)).catch(err=> alert(err))
  }

  const handleFilter =(val)=>{
    const filtered = users.filter(a=> a.name.first.toLowerCase().includes(val) || a.name.last.toLowerCase().includes(val) || a.email.includes(val) || a.location.state.toLowerCase().includes(val));
    setFilteredUsers(filtered)
  }

  return (

    <div className="App">
      <Header user={currentUser}/>
      {currentUser ? <><input onChange={(e)=> handleFilter(e.target.value.toLowerCase())} placeholder="Search For Employee"/>
     <Table data={filteredUsers}/></> : <Login login={handleLogin}/>}
    </div>
    
  );
}

export default App;
