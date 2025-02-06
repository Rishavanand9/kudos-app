// frontend/src/pages/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { LOGIN_URL } from '../constants/endpoints';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await axios.post(LOGIN_URL, {
                username,
                password,
            });

            // Store the token in session storage
            sessionStorage.setItem('token', response.data.token);

            // Redirect to the dashboard or another page
            window.location.href = '/dashboard'; // Adjust the redirect as needed
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;