/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
}
    from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


import AuthService from '../services/auth';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSetValue = (e, data) => {
        if (data === 'email') {
            setEmail(e.target.value);
        } else if (data === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        setError('');
        setLoading(true);

        if (!email) {
            setError('Email field is required');

            return false;
        }

        if (!password) {
            setError('Password fields is required');

            return false;
        }

        try {
            const response = await AuthService.login({email, password});
            if (response.data?.token) {
                window.localStorage.setItem('jwt', response.data.token);

                navigate("/");
                window.location.reload();
            } else {
                setError('Error.')
            }
        } catch (e) {
            if (e.response?.data?.message) {
                setError(e.response.data.message)
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
                      onChange={(e) => handleSetValue(e, 'email')}/>

            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
                      onChange={(e) => handleSetValue(e, 'password')}/>

            {error && (<MDBContainer>
                    <div className="alert alert-dark">
                        {error}
                    </div>
                </MDBContainer>
            )}

            {!loading ? (<MDBBtn className="mb-4" style={{ maxHeight: '38px' }} onClick={handleLogin}>Sign in</MDBBtn>)
                : (
                    <div>Loading</div>
                )
            }

            <div className="text-center">
                <p>Not a member? <Link to="/register">Register</Link></p>
            </div>

        </MDBContainer>
    );
}

export default Login;