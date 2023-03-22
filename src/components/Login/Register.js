import { Link, Navigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/user-context';
import Button from "../UI/Button/Button";
import styles from "./UserForm.module.scss";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const { registerUser, isLoading, errorMessage, setErrorMessage, user } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await registerUser(userName, email, password);
    };

    const validateEmail = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email");
        } else {
            setEmailError("");
        }
    };

    const validateUserName = () => {
        const userNameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (userName.trim().length === 0) {
            setUserNameError("Please enter a username");
        } else if (!userNameRegex.test(userName)) {
            setUserNameError(
                "Username must be between 3 and 16 characters long and may only contain letters, numbers, underscores, and dashes."
            );
        } else {
            setUserNameError("");
        }
    };

    const isFormValid = () => {
        return (
            email &&
            password &&
            userName &&
            !userNameError &&
            !emailError
        );
    };

    useEffect(() => {
        setErrorMessage("");
    }, [setErrorMessage, email]);

    return (
        <div className={styles["user-form"]}>
            {user && (
                <Navigate to="/" replace={true} />
            )}
            <h1>Create an account</h1>
            {errorMessage && (
                <p className={styles.error}>{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
                <label className={userNameError ? styles.error : ""}>
                    Username
                    <input
                        type="text"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        onBlur={validateUserName}
                    />
                    {userNameError && <p>{userNameError}</p>}
                </label>
                <label className={emailError ? styles.error : ""}>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={validateEmail}
                    />
                    {emailError && <p>{emailError}</p>}
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <Button type="submit" className="dark" disabled={!isFormValid || isLoading}>
                    Register
                </Button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Register;