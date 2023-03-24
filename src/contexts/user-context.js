import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({
    user: null,
    isLoading: false,
    errorMessage: "",
    registerUser: () => { },
    loginUser: () => { },
});

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const token = localStorage.getItem("token");

    const fetchUser = async (token) => {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:5000/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIsLoading(false);
            setUser(response.data);
        } catch (error) {
            setIsLoading(false);
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
            setIsLoading(false);
            setUser(response.data);
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
            setIsLoading(false);
            setUser(response.data);
            localStorage.setItem("token", response.data.token);
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
        localStorage.removeItem("token");
    };

    const userContextValue = {
        user,
        token,
        isLoading,
        errorMessage,
        registerUser,
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