import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUser } from '../../axios/user'
import { useFormik } from "formik";
import * as yup from "yup";
import { Checkbox, Input } from "@material-tailwind/react";
import BodyAuthPage from './layout/BodyAuthPage';

const SignUpPage = ({ loginCbHandler }) => {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [name, setName] = useState(false);
    const [age, setAge] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const handlefocus = (cek) => {
        switch (cek) {
            case 'name':
                setName(true)
                break;
            case 'age':
                setAge(true)
                break;
            case 'email':
                setEmail(true)
                break;
            case 'password':
                setPassword(true)
                break;
            default:
                break;
        }
    }

    const submitHandler = () => {
        createUser(formik.values, loginCbHandler);
        navigate('/')
    };

    const showPassword = () => {
        setShowPass(!showPass);
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0,
            email: "",
            password: "",
            roleId: 2,
        },
        onSubmit: submitHandler,
        validationSchema: yup.object().shape({
            name: yup.string().required().min(3).max(10),
            age: yup.number().required(),
            email: yup.string().required().email(),
            password: yup.string()
                .required()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
                ),
        }),
    });

    const handleForm = (event) => {
        const { target } = event;
        formik.setFieldValue(target.name, target.value);
    };
    return (
        <BodyAuthPage>
            <form onSubmit={formik.handleSubmit}>
                <div className='space-y-4'>
                    <Input
                        variant='outlined'
                        label='Name'
                        name='name'
                        onChange={handleForm}
                        onBlur={() => handlefocus('name')}
                    />
                    {
                        name ?
                            <span className='text-pink-600 font-light text-sm mt-1'>{formik.errors.name}</span> : null
                    }
                    <Input
                        variant='outlined'
                        label='Age'
                        name='age'
                        onChange={handleForm}
                        onBlur={() => handlefocus('age')}
                    />
                    {
                        age ?
                            <span className='text-pink-600 font-light text-sm mt-1'>{formik.errors.age}</span> : null
                    }
                    <Input
                        variant='outlined'
                        label='Email'
                        name='email'
                        onChange={handleForm}
                        onBlur={() => handlefocus('email')}
                    />
                    {
                        email ?
                            <span className='text-pink-600 font-light text-sm mt-1'>{formik.errors.email}</span> : null
                    }
                    <Input
                        variant='outlined'
                        label='Password'
                        type={`${showPass ? 'text' : 'password'}`}
                        name='password'
                        onChange={handleForm}
                        onBlur={() => handlefocus('password')}
                    />
                </div>
                <div className='flex flex-col'>
                    <Checkbox
                        onChange={showPassword}
                        label="Show"
                        color='teal'
                        className='text-sm'
                    />
                    {
                        password ?
                            <span className='text-pink-600 font-light text-sm mt-1'>{formik.errors.password}</span> : null
                    }
                </div>
                <button type="submit" className="mt-5 w-full text-white bg-[#019267] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                <p className="mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                </p>
            </form>
        </BodyAuthPage>
    )
}

export default SignUpPage