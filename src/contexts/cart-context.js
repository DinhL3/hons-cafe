import { UserContext } from "./user-context";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState(null);
    const [cartLoading, setCartLoading] = useState(true);

    const { user, token } = useContext(UserContext);

    const baseUrl = process.env.REACT_APP_BACKEND_URL;

    const getCart = async () => {
        try {
            const response = await axios.get(`${baseUrl}/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCart(response.data.cart);
            setCartLoading(false);
        } catch (error) {
            // console.log(error);
            setCart(null)
            setCartLoading(false);
        }
    };

    const addToCart = async (drinkId) => {
        try {
            const response = await axios.post(
                `${baseUrl}/cart/add-to-cart`,
                { drinkId, quantity: 1 },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCart(response.data.cart);
        } catch (error) {
            console.log(error);
        }
    };

    const increaseQuantity = async (drinkId) => {
        setCartLoading(true);
        try {
            const response = await axios.patch(
                `${baseUrl}/cart/increase-quantity/${drinkId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCart(response.data.cart);
            setCartLoading(false);

        } catch (error) {
            console.log(error);
            setCartLoading(false)
        }
    };

    const decreaseQuantity = async (drinkId) => {
        setCartLoading(true);
        try {
            const response = await axios.patch(
                `${baseUrl}/cart/decrease-quantity/${drinkId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCart(response.data.cart);
            setCartLoading(false);
        } catch (error) {
            console.log(error);
            setCartLoading(false);
        }
    };

    const removeItem = async (drinkId) => {
        setCartLoading(true);
        try {
            const response = await axios.delete(
                `${baseUrl}/cart/remove-item/${drinkId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCart(response.data.cart);
            setCartLoading(false);
        } catch (error) {
            console.log(error);
            setCartLoading(false);
        }
    };

    const clearCart = async () => {
        setCartLoading(true);
        try {
            const response = await axios.delete(
                `${baseUrl}/cart/clear-cart`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCart(response.data.cart);
            setCartLoading(false);
        } catch (error) {
            console.log(error);
            setCartLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            getCart()
        }
    }, [user]);

    const contextValue = {
        cart,
        cartLoading: cartLoading,
        getCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};
