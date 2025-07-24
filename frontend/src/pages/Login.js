import { useState } from 'react';
import axios from '../api';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // ⬅️ Link the CSS file

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('login/', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      navigate('/home');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="text"
          placeholder="username"
          onChange={e => setForm({ ...form, username: e.target.value })}
          className="login-input"
        />
        <input
          type="password"
          placeholder="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
          className="login-input"
        />
        <button type="submit" className="login-button">LOGIN</button>
        <p className="login-footer">
          Not registered? <Link to="/signup" className="signup-link">Create an account</Link>
        </p>
      </form>
    </div>
  );
}
