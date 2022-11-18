import { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [user, setUser] = useState({ 
    credentials: {
      username: 'HarryPotter',
      password: "password"
    }
  });

  const checkCredentials = (username, password) => {
    console.log("checking credentials");
    const formUser = user.credentials.username;
    const formPass = user.credentials.password;

    if(formUser === username && formPass === password){
      return{
        isValid: true,
        message: "Login successful"
      }
    }else{
      return{
        isValid: false,
        message: "Bad username or password"
      }
    }
  }

  return (
    <div className="App">
      <h1>Hello React Form</h1>
      <LoginForm handleSubmit={checkCredentials} />
    </div>
  );
}

export default App;
