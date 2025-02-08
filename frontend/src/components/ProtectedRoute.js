import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {  // Change here: destructure children from props
    const navigate = useNavigate();

    const isAuthenticated = !!sessionStorage.getItem('userDetails');

    React.useEffect(() => {    // Add useEffect to handle navigation
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? children : null;  // Return null instead of navigate
};

export default ProtectedRoute;