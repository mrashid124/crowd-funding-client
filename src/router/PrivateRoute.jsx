import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>;
    }
    if (!user) {
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
    }

    return Children;
};

export default PrivateRoute;