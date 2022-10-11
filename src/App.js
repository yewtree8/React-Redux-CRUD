import './App.css';
import {useSelector} from "react-redux";

function App() {

  const userList = useSelector((state) => state.users.value);

  return (

    <div className="App">
     
      <div className='addUser'>
        <input type="text" name='name' required placeholder="Name..." />
        <input type="text" name='username' required placeholder='Username...'/>
        <button>Add User</button>
      </div>

      <div className='displayUsers'>
        {userList.map((user) => {
          return <h1>{user.name}</h1> 
        })}
      </div>

    </div>
  );
}

export default App;
