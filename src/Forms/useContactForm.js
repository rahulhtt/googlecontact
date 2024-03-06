
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useContactForm = () => {
    const userToken = useSelector((state) => state.user.token);
    const authToken = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        phno: "",
        userid: "",
    };

    const validationSchema = Yup.object({
        fname: Yup.string().required('First name is required'),
        lname: Yup.string().required('Last name is required'),
        email: Yup.string().email("Invalid email format").required('Email is required'),
        phno: Yup.string().required("Phone Number is required"),
    });

    const onSubmit = async (values) => {
        try {
            await axios.post(`http://${process.env.REACT_APP_IP_ADD}:3000/contact`, {
                fname: values.fname,
                lname: values.lname,
                email: values.email,
                phno: values.phno,
                userid: userToken
            },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
            toast.success('Contact Added successful', { position: "top-center", autoClose: 2000 });
            setTimeout(() => {
                navigate('/contact');
            }, 3000);
        }
        catch (error) {
            toast.error("Error creating contact", { position: "top-center", autoClose: 2000 });
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return { formik };
};

export default useContactForm;