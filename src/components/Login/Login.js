import { Link, Navigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/user-context';
import Button from "../UI/Button/Button";
import styles from "./UserForm.module.scss";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");

    const { loginUser, isLoading, errorMessage, setErrorMessage, user } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser(email, password);
    };

    const validateEmail = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email");
        } else {
            setEmailError("");
        }
    };

    const isFormValid = () => {
        return (
            email &&
            password &&
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
            <h1>Log in with your account</h1>
            <p className={styles.error}>{errorMessage}</p>
            <form onSubmit={handleSubmit}>
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
                    Log in
                </Button>
            </form>
            <p>
                Need an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;