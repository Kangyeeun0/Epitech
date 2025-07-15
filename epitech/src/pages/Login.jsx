import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChangeId = (e) => {
        setId(e.target.value);
    };

    const handleChangePw = (e) => {
        setPw(e.target.value);
    };

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find((u) => u.id === id && u.password === pw);

        if (user) {
            alert(`Welcome, ${user.username}!`);
            localStorage.setItem('login', true);
            setError('');
            navigate('/');

            // 여기서 로그인 상태를 저장하거나 메인 페이지로 이동 가능
        } else {
            setError('Invalid ID or password.');
        }
    };

    return (
        <div className="login-div">
            <h1 className="title">LOGIN</h1>
            <input placeholder="ID" value={id} onChange={handleChangeId} />
            <input placeholder="Password" value={pw} onChange={handleChangePw} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="login-button" onClick={handleLogin}>
                LOGIN
            </button>
        </div>
    );
}
