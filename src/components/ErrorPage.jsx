import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div>
            {error.message}
        </div>
    );
};

export default ErrorPage;