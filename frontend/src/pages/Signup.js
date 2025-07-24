import { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ Reuse the same CSS styles

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('register/', form);
      navigate('/');
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Signup</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={e => setForm({ ...form, username: e.target.value })}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
          className="login-input"
        />
        <button type="submit" className="login-button">Register</button>
      </form>
    </div>
  );
}
