import './App.css';
import AddNewUser from './components/AddNewUser';
import UsersDataTable from './components/UsersDataTable';
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        console.log("Fetching users from express server")
        fetch('http://34.76.62.170:8080/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log("error", err))
    }
    useEffect(() => {
        fetchUsers()
    }, [])

  return (
    <div className='w-full h-screen justify-center items-center flex flex-col bg-blue-900'>
      <UsersDataTable users={users}/>
      <AddNewUser fetchUsers={fetchUsers}/>
    </div>
  );
}

export default App;
