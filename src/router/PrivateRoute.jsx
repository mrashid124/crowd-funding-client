import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <div className="flex justify-center items-center min-h-screen mx-auto">
                <span className="loading loading-spinner text-secondary"></span>
            </div>
        );
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;


    // const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    // if (loading) {
    //     return <Loader></Loader>;
    // }
    // if (!user) {
    //     return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
    // }

    // return Children;



};

export default PrivateRoute;