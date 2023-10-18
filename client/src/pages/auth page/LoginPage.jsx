/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import { Checkbox, Input } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../redux/authSlice';
import BodyAuthPage from './layout/BodyAuthPage';
import Loading from '../../components/Loading';

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, isLogin } = useSelector((state => state.auth))
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const submitHandler = () => {
        dispatch(login(formik.values))
    }

    const handleFocus = (e) => {
        if (e === 'email') {
            setEmail(true);
        } else {
            setPassword(true)
        }
    };

    const showPassword = () => {
        setShowPass(!showPass);
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: submitHandler,
        validationSchema: yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string()
                .required()
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
                ),
        }),
    });

    const handleForm = (event) => {
        const { target } = event;
        formik.setFieldValue(target.name, target.value);
    };

    useEffect(() => {
        if (isLogin) {
            navigate('/')
        }
    }, [isLogin])

    return (
        <BodyAuthPage>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    variant="outlined"
                    label="Email"
                    name='email'
                    onChange={handleForm}
                    onBlur={() => handleFocus('email')}
                />
                {
                    email ?
                        <span className='text-pink-600 font-light text-sm mt-1'>{formik.errors.email}</span>
                        : null
                }
                <div className='mt-5'>
                    <Input
                        variant="outlined"
                        label="Password"
                        name='password'
                        onChange={handleForm}
                        onBlur={handleFocus}
                        type={`${showPass ? 'text' : 'password'}`}
                    />
                </div>
                <div className='flex flex-col'>
                    <Checkbox
                        onChange={showPassword}
                        label="Show"
                        color='teal'
                        className='text-sm m-0'
                    />
                    {
                        password ?
                            <span className='text-pink-600 font-light text-sm'>{formik.errors.password}</span>
                            : null
                    }
                </div>
                <button type='submit' className="mt-5 w-full text-white bg-[#019267] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> {loading.login ? <Loading /> : "Login"}</button>
                <p className="mt-3 text-sm font-light text-blue-gray-500 dark:text-blue-gray-400">
                    Don’t have an account yet? <Link to={'/register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an account</Link>
                </p>
            </form>
        </BodyAuthPage>
    )
}

export default LoginPage