
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setToken } from "../Feature/authSlice";
import { setUser } from "../Feature/userSlice";

// Assuming you have defined this slice
const useLoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const IP_ADD = process.env.REACT_APP_IP_ADD;
    console.log(IP_ADD)

    const initialValues = {
        email: "",
        password: "",
    };

    //validate initial values
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email Address").required('Email is required'),
        password: Yup.string().required("Password is required"),
    });

    //check user credentials
    const onSubmit = async (values) => {
        try {
            const response = await axios.post(`http://${IP_ADD}:3000/login`, {
                email: values.email,
                password: values.password,
            });
            toast.success('Login successful', { position: "bottom-center", autoClose: 2000 });
            const data = response.data;
            const authToken = data.accessToken;
            const userToken = data.user.id
            dispatch(setToken(authToken));//user token
            dispatch(setUser(userToken));//user id 
            localStorage.setItem('token', authToken);
            localStorage.setItem('user', userToken);
            setTimeout(() => {
                navigate('/contact');
            }, 2000);
        } catch (error) {
            console.log(error);
            toast.error('Login failed. Please try again.', { position: "bottom-center", autoClose: 2000 });
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    //return formik data
    return { formik };
};

export default useLoginForm;
