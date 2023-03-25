import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({
    user: null,
    isLoading: false,
    errorMessage: "",
    fetchUser: () => { },
    registerUser: () => { },
    loginUser: () => { },
    logoutUser: () => { }
});

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"))

    const fetchUser = async (token) => {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:5000/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
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
            fetchUser(token);
        }
    }, [token]);

    const registerUser = async (userName, email, password) => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            const response = await axios.post("http://localhost:5000/api/users/register", {
                userName,
                email,
                password,
            });
            setUser(response.data);
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
        try {
            setIsLoading(true);
            setErrorMessage("");
            const response = await axios.post("http://localhost:5000/api/users/login", {
                email,
                password,
            });
            setUser(response.data);
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
        setToken(null)
        localStorage.removeItem("token");
    };

    const userContextValue = {
        user,
        token,
        isLoading,
        errorMessage,
        registerUser,
        fetchUser,
        loginUser,
        logoutUser,
        setErrorMessage,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;