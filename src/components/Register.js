/**
 * External dependencies
 */
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";

/**
 * Internal dependencies
 */
import auth from '../services/auth';

const Register = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSetValue = (e, data) => {
        if (data === 'email') {
            setEmail(e.target.value);
        } else if (data === 'password') {
            setPassword(e.target.value)
        } else if (data === 'username') {
            setUsername(e.target.value)
        }
    }

    const hasErrors = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email) {
            setError('Email fields is required');
            return true;
        }

        if (!password) {
            setError('Password fields is required');
            return true;
        }

        if (!username) {
            setError('Username fields is required');
            return true;
        }

        if (!emailRegex.test(email)) {
            setError('Pleasse enter a valid email');
            return true;
        }

        if (password.length < 6) {
            setError('Password must be more than 7 characters');
            return true;
        }

        return false;
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        // check for errors
        setError('');

        if (hasErrors()) {
            return;
        }

        setLoading(true);

        // register
        try {
            const response = await auth.register({ email, password, username });
            // we return status 200 when user is registered
            if (response.status === 200) {
                navigate("/login");
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

            <MDBInput wrapperClass='mb-4' label='Username' id='form2' type='text'
                      onChange={(e) => handleSetValue(e, 'username')}/>

            <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password'
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
                <p><Link to="/login">Already a member?</Link></p>
            </div>

        </MDBContainer>
    );
}

export default Register;