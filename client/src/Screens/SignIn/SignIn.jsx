import "./SignIn.css";  
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = (props) => { 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin, error } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (  
    <form className="signin-form"
      onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      {
        error &&
        <p>{error}</p>
      }
      <label>
        <input 
          placeholder="username"
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input 
          placeholder="password"
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/register'>
        <button>Register</button>
      </Link> 
      <button>Enter</button>
    </form>
    
    
  )
} 

export default SignIn;