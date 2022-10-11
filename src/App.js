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
        onClick={() => {dispatch(addUser({id: 0, name: addedName, username: addedUserName}))}}>Add User</button>
      </div>

      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <>
            <h1>User: {user.name}</h1>
            <h2>UserName: {user.username}</h2>
            </>
          ) 
        })}
      </div>

    </div>
  );
}

export default App;
