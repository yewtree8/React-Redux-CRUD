import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUser, deleteUser, updateUserName} from './features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [addedName, setAddedName] = useState("");
  const [addedUserName, setAddedUsername] = useState("");

  const [currentUserName, setCurrentUserName] = useState("");

  return (

 

    <div className="App">
     
      <div className='addUser'>
        <input type="text" value={addedName} name='name' required placeholder="Name..." 
        onChange={(val) =>{setAddedName([val.target.value])}}/>
        <input type="text" value={addedUserName} name='username' required placeholder='Username...'
        onChange={(val) => setAddedUsername([val.target.value])}/>
        <button
        onClick={() => {dispatch(addUser({id: Number([userList.length - 1].id) + 1, name: addedName, username: addedUserName}))}}>Add User</button>
      </div>

        {userList.map((user) => {
          return (
            <div className='displayUsers'>
            <h2>User: {user.name}</h2>
            <h3>UserName: {user.username} (ID:{user.id})</h3>
            <input 
            type="text" 
            onChange={(event) => {
              setCurrentUserName(event.target.value);
            }} 
            placeholder="New Username" 
            />

            <button
            onClick={() =>{ dispatch(updateUserName({id: user.id, username: currentUserName}
            ))}}
            >Update Username</button>
            
            <button
            onClick={() => {
              let userId = parseInt(user.id);
              dispatch(deleteUser({ id: userId }))
            }}>Delete User</button>

            </div>
          ) 
        })}
      </div>
  );
}

export default App;
