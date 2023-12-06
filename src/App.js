import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Avatar from './components/Avatar';
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);

  const handleUser = (e) => {
    setUser(e.target.value);
  }

  const loadApi = () => {
    const userUrl = `https://api.github.com/users/${user}`;  

    fetch(userUrl)
      .then(response => response.json())
      .then(userData => {
        setUserData(userData);
      });

      console.log (userData)

  }

  return (
    <div className='container'>
      <h1>GitHub username</h1>
      <br />

      <input
        placeholder="e.g. facebook"
        value={user}
        onChange={handleUser}
      />
      <br />
      <br />
        <button className='button' 
          onClick={loadApi}> 
        GO!
        </button>

      {userData && (
        <div>
          <h2>User Information</h2>
          <Stack gap={4}>
          {userData && <Avatar userData={userData} />}
          <div className="p-2">Name: {userData.name}</div>
          <div className="p-2">Location: {userData.location}</div>
          <div className="p-2">Bio: {userData.bio}</div>
          </Stack>
        </div>
      )}

    </div>
  );
}

export default App;