import {useState} from "react";
import LoginMessage from "./LoginMessage";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [serverResponse, setServerResponse] = useState({})

  const _updateUsername = (userInput) => {
    setUsername(userInput)
  }

  const _updatePassword = (passwordInput) => {
    setPassword(passwordInput)
  }

  const handleClick = (e) => {
    e.preventDefault();
    const response = props.handleSubmit(username, password);
    console.log(response);
    setServerResponse(response)
  }

  return ( 
    <div>LoginForm
      <form onSubmit={handleClick}>
        <label htmlFor="">Username:
          <input type="text" value={username} onChange={e => {_updateUsername(e.target.value)}}/>
        </label>
        <br />
        <label htmlFor="">Password:
          <input type="text" value={password} onChange={e => {
            _updatePassword(e.target.value)
          }}/> 
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <LoginMessage message={serverResponse.message} isValid={serverResponse.isValid}/>
    </div>
  );
}

export default LoginForm;