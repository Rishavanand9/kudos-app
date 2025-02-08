import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KudosPage from './pages/Kudos/KudosPage';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'

const App = () => {
    return (
        <div className='body-div'>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/kudos" element={<ProtectedRoute><KudosPage /></ProtectedRoute>} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;
