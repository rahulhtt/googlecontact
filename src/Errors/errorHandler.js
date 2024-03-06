// errors/errorHandler.js

import { toast } from 'react-toastify';

const handleApiError = (error, navigate) => {
    if (error.response && error.response.status === 401) {
        toast.warning('Session expired. Please log in again.', { position: "top-center" });
        setTimeout(() => {
            navigate('/login');
        }, 4000);
    } else {
        toast.error('An error occurred while processing your request.', { position: "top-center", autoClose: 2000 });
    }
};

const handleAuthenticationError = (navigate) => {
    toast.warning('Session expired. Please log in again.', { position: "top-center" });
    console.log("Invalid authentication")
    setTimeout(() => {
        navigate('/login');
    }, 1000);
};


export { handleApiError, handleAuthenticationError };
