// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LogIn.css';

const Login = () => {
  // Kullanıcı adı, şifre ve hata durumu için state'lerin tanımlandığı kısım
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // React Router tarafından sağlanan useHistory hook'unun kullanıldığı kısım
  const history = useHistory();

  const handleLogin = () => {
    // sadece basit bir kontrol yapmak için.
    if (username === 'demo' && password === 'demo') {
      // Başarılı giriş durumunda, ana sayfaya yönlendirir.
      history.push('/');
    } else {
      setError('Kullanıcı adı veya şifre yanlış');
    }
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
    <div>
    <div className='genel'>
      <div>
        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Giriş Yap</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
