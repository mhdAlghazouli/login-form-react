
const LoginMessage = (props) => {
  const {message, isValid} = props
  if(message){
    return ( 
      <h1 className={isValid ? "success" : "error"}>{message}</h1>
    );
  }else{
    return null;
  }
}

export default LoginMessage;