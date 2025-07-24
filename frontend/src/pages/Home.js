import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ Reuse the existing styles

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (!user) navigate('/');
    else setUsername(user);
  }, []);

  return (
    <div className="login-wrapper"> {/* 👈 Reuse same background */}
      <div className="home-content">
        <h1 className="welcome-title">Welcome, {username}!</h1>
      </div>
    </div>
  );
}
