import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUser} from './features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [addedName, setAddedName] = useState("");
  const [addedUserName, setAddedUsername] = useState("");

  return (

 

    <div className="App">
     
      <div className='addUser'>
        <input type="text" value={addedName} name='name' required placeholder="Name..." 
        onChange={(val) =>{setAddedName([val.target.value])}}/>
        <input type="text" value={addedUserName} name='username' required placeholder='Username...'
        onChange={(val) => setAddedUsername([val.target.value])}/>
        <button
        onClick={() => {dispatch(addUser({id: Number([Number((userList.length)-1)].id) + Number(1), name: addedName, username: addedUserName}))}}>Add User</button>
      </div>

        {userList.map((user) => {
          return (
            <div className='displayUsers'>
            <h2>User: {user.name}</h2>
            <h3>UserName: {user.username} (ID:{user.id})</h3>
            <input 
            type="text" 
            value="" 
            name='new_username' 
            placeholder="New Username" 
            onChange={(val) =>{
              setAddedName([val.target.value])}
            }/>

            <button>Update Username</button>
            <button>Delete User</button>

            </div>
          ) 
        })}
      </div>
  );
}

export default App;
