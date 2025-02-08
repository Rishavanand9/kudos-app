// frontend/src/pages/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { LOGIN_URL } from '../../constants/endpoints';
import './styles.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        setLoading(true)
        try {
            const response = await axios.post(LOGIN_URL, {
                username,
                password,
            });

            // Store the token in session storage
            sessionStorage.setItem('userDetails', JSON.stringify(response.data));

            // Redirect to the dashboard or another page
            window.location.href = '/dashboard'; // Adjust the redirect as needed
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        } finally{
            setLoading(false)
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Kudos App</h2>
            <form onSubmit={handleLogin} className='form-div'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="input-field" // Applied new class for styling
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field" // Applied new class for styling
                />
                <button type="submit" className='submit' disabled={loading}>Submit</button>
            </form>
            <p className="error">{error || ""}</p>
        </div>
    );
};

export default Login;