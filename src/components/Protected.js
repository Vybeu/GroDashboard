import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContextProvider';

const Protected = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to='/' />;
    }
    return children;
    return (
        <div>

        </div>
    )
}

export default Protected
