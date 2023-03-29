import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({
    user: null,
    isLoggedIn: false,
    isLoading: false,
    errorMessage: "",
    fetchUser: () => { },
    registerUser: () => { },
    loginUser: () => { },
    logoutUser: () => { }
});

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"))

    const baseUrl = process.env.REACT_APP_BACKEND_URL;

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${baseUrl}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
            setIsLoggedIn(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsLoggedIn(false);
            setToken(null)
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Something went wrong. Please try again later.");
            }
        }
    };

    useEffect(() => {
        if (token) {
            fetchUser();
        }
        if (!token) {
            setIsLoading(false);
        }
    }, [isLoggedIn]);

    const registerUser = async (userName, email, password) => {
        setIsLoading(true)
        try {
            setErrorMessage("");
            const response = await axios.post(`${baseUrl}/users/register`, {
                userName,
                email,
                password,
            });
            setUser(response.data);
            setIsLoggedIn(true);
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Something went wrong. Please try again later.");
            }
        }
    };

    const loginUser = async (email, password) => {
        setIsLoading(true)
        try {
            setErrorMessage("");
            const response = await axios.post(`${baseUrl}/users/login`, {
                email,
                password,
            });
            setUser(response.data);
            setIsLoggedIn(true);
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Something went wrong. Please try again later.");
            }
        }
    };

    const logoutUser = () => {
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        setIsLoading(false);
    };

    const userContextValue = {
        user: user,
        token: token,
        isLoading: isLoading,
        errorMessage,
        registerUser,
        fetchUser,
        loginUser,
        logoutUser,
        setErrorMessage,
        isLoggedIn: isLoggedIn,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;