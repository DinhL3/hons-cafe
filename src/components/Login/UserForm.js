import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Button from "../UI/Button/Button";
import styles from "./UserForm.module.scss";
import { UserContext } from "../../contexts/user-context";

const UserForm = ({
    type,
    handleSubmit,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
}) => {


    const formTitle = type === "login" ? "Welcome back" : "Create an account";
    const submitButtonText = type === "login" ? "Login" : "Register";
    const hasUserNameInputField = type === "register";

    const { isLoading, errorMessage, setErrorMessage } = useContext(UserContext);

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
            (!hasUserNameInputField || userName) &&
            !userNameError &&
            !emailError
        );
    };

    // Clear error message from ctx when re-render
    useEffect(() => {
        setErrorMessage("");
    }, [setErrorMessage, type, email]);

    return (
        <div className={styles["user-form"]}>
            <h1>{formTitle}</h1>
            {type === "login" && (
                <p className={styles.subtitle}>Log in with your account below</p>
            )}
            {type === "register" && errorMessage && (
                <p className={styles.error}>{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
                {hasUserNameInputField && (
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
                )}
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
                    {submitButtonText}
                </Button>
            </form>
            {type === "login" ? (
                <p>
                    Need an account? <Link to="/register">Register</Link>
                </p>
            ) : (
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            )}
        </div>
    );
};

export default UserForm;
