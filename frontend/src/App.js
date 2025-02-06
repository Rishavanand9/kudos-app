import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KudosPage from './pages/KudosPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/kudos" element={<ProtectedRoute><KudosPage /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
