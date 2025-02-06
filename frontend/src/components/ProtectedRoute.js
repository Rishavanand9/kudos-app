import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (children) => {
    const navigate = useNavigate();

    const isAuthenticated = !!sessionStorage.getItem('token'); // Check if token exists

    return isAuthenticated ? children : navigate('/');
};

export default ProtectedRoute;
