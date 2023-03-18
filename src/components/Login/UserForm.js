import { Link } from "react-router-dom";
import { useState } from 'react';

import Button from "../UI/Button/Button";
import styles from "./UserForm.module.scss";

const UserForm = ({ type, handleSubmit, email, setEmail, password, setPassword }) => {
    const [emailError, setEmailError] = useState('');

    const formTitle = type === 'login' ? 'Welcome back' : 'Create an account';
    const submitButtonText = type === 'login' ? 'Login' : 'Register';

    const handleEmailBlur = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    }

    return (
        <div className={styles['user-form']}>
            <h1>{formTitle}</h1>
            {type === 'login' && <p className={styles.subtitle}>Log in with your account below</p>}
            <form onSubmit={handleSubmit}>
                <label className={emailError ? styles.error : ''}>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={handleEmailBlur}
                    />
                    {emailError && <p>{emailError}</p>}
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <Button type="submit" className="dark">{submitButtonText}</Button>
            </form>
            {type === 'login' ? (
                <p>Need an account? <Link to="/register">Register</Link></p>
            ) : (
                <p>Already have an account? <Link to="/login">Login</Link></p>
            )}
        </div>
    );
};

export default UserForm;