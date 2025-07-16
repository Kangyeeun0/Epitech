import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div class="login-div">
            <h1 class="title">LOGIN</h1>
            <input placeholder="ID" />
            <input placeholder="Password" />
            <button class="login-button">LOGIN</button>
        </div>
    );
}
