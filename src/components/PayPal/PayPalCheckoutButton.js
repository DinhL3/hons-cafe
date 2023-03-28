import React, { useState, useContext, useEffect } from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";

import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';

const PaypalCheckoutButton = () => {
    const [isPaid, setIsPaid] = useState(false);
    const [error, setError] = useState(null);

    const { user } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    const handleApprove = (order) => {
        //backend

        //if res is success
        setIsPaid(true);

        //if error
        setError("payment successful but could not placed an order");
    }

    if (isPaid) {
        //redirect to success page
    }

    if (error) {
        return <p>{error.toString()}</p>
    }

    return (
        <PayPalButtons
            style={{
                color: "blue",
                shape: "pill"
            }}
            forceReRender={[cart]}
            createOrder={(data, actions) => {
                console.log(cart.totalPrice);
                const purchaseUnits = [{
                    reference_id: "default",
                    description: `Hon's Café order for ${user.userName}`,
                    amount: {
                        currency_code: "EUR",
                        breakdown: {
                            item_total: {
                                currency_code: "EUR",
                                value: cart.drinks.reduce((acc, drink) => acc + drink.drink.price * drink.quantity, 0).toFixed(2)
                            }
                        },
                        value: cart.totalPrice.toFixed(2),
                    },
                    items: cart.drinks.map((drink) => {
                        return {
                            name: drink.drink.name,
                            unit_amount: {
                                currency_code: "EUR",
                                value: drink.drink.price.toFixed(2),
                            },
                            quantity: drink.quantity,
                            sku: drink.drink._id
                        };
                    })
                }];
                return actions.order.create({
                    purchase_units: purchaseUnits,
                })
            }}
            onClick={(data, actions) => {
                if (!user) {
                    setError("Please log in to checkout")
                    return actions.reject();
                } else {
                    return actions.resolve();
                }
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture()
                console.log("Res from PayPal: ", order);
                handleApprove(order);
            }}
            onCancel={() => {
                // Do nothing for now
            }}
            onError={(error) => {
                setError(error);
                console.log("PayPal checkout error: ", error);
            }}
        />
    );



}

export default PaypalCheckoutButton; 