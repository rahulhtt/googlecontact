import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = `http://${process.env.REACT_APP_IP_ADD}:3000`;



const fetchContactByUserId = async (id, authToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/contact?userid=${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        // Display error toast notification
        toast.error('Error fetching Contact list', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};

const fetchContactById = async (id, authToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/contact/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        // Display error toast notification
        toast.error('Error fetching Contact list', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};




const updateContactById = async (id, contactDetails, authToken) => {
    try {
        await axios.put(`${BASE_URL}/contact/${id}`, contactDetails, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        // Display success toast notification
        toast.success('Blog Updated successfully', { position: "top-center", autoClose: 2000 });
    } catch (error) {
        // Display error toast notification
        toast.error('Error fetching blog ', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};

const deleteContactById = async (id, authToken) => {
    try {
        await axios.delete(`${BASE_URL}/contact/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        // Display success toast notification
        toast.success('Contact deleted successfully', { position: "top-center", autoClose: 2000 });
    } catch (error) {
        // Display error toast notification
        toast.error('Error deleting Contact', { position: "top-center", autoClose: 2000 });
        throw error;
    }
};

export { fetchContactByUserId, fetchContactById, deleteContactById, updateContactById };

