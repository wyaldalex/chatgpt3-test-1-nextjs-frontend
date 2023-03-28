import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', { username, password });
      const token = response.data.token;
      Cookies.set('jwtToken', token); // Store the JWT token in a cookie
      // Your code to handle the JWT token goes here
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form className="p-5 border rounded" onSubmit={handleSubmit}>
        <h2 className="mb-4">Login</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;

