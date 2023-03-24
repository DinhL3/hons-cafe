import { UserContext } from "./user-context";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState(null);
    const [cartLoading, setCartLoading] = useState(false);

    // const token = localStorage.getItem("token");

    const { user, token } = useContext(UserContext);

    const getCart = async () => {
        try {
            setCartLoading(true);
            const response = await axios.get("http://localhost:5000/api/cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCart(response.data.cart);
            setCartLoading(false);
        } catch (error) {
            console.log(error);
            setCartLoading(false);
        }
    };

    const addToCart = async (drinkId) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/cart/add-to-cart",
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
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/cart/increase-quantity/${drinkId}`,
                null,
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

    const decreaseQuantity = async (drinkId) => {
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/cart/decrease-quantity/${drinkId}`,
                null,
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

    const removeItem = async (drinkId) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/cart/remove-item/${drinkId}`,
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

    const clearCart = async () => {
        try {
            const response = await axios.delete(
                "http://localhost:5000/api/cart/clear-cart",
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

    useEffect(() => {
        if (user) {
            getCart();
        }
    }, [user, token]);

    const contextValue = {
        cart,
        cartLoading,
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
