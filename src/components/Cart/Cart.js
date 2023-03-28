import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import { Link, Navigate } from "react-router-dom";

import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import CartCard from './CartCard';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PayPalCheckoutButton from '../PayPal/PayPalCheckoutButton';


import { MediaQueryContext } from '../../contexts/media-query-context';
import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';



const Cart = () => {
    const { isExtraSmallScreen, isSmallScreen } = useContext(MediaQueryContext);
    const { user, token } = useContext(UserContext)
    const { cart, clearCart, cartLoading } = useContext(CartContext);

    const handleClearCartClick = async () => {
        await clearCart();
    };

    if (cartLoading) {
        return <Spinner loading={cartLoading} />
    }

    if (!cartLoading && !user) {
        return <Navigate to="/login" replace={true} />
    }

    if (!cartLoading && cart) {
        // console.log(cart)
        return (
            <React.Fragment>
                {cart.drinks.length === 0 ?
                    <ContentWrapper flex="flex-center" padding="p-1">
                        <h1>Your cart is empty</h1>
                    </ContentWrapper>
                    :
                    <ContentWrapper theme="light-pink" flex={isSmallScreen ? 'flex-center-column' : 'flex-between'} padding={isExtraSmallScreen ? "p-top-1" : "p-1"}>
                        <div className={styles['drinks-list']}>
                            <h1>Your cart</h1>
                            {cart.drinks.map(drink => (
                                <CartCard key={drink._id} drink={drink.drink} quantity={drink.quantity} totalDrinkPrice={drink.totalDrinkPrice} />
                            ))}

                            <Button className="light" onClick={handleClearCartClick}><DeleteOutlineIcon />Clear cart</Button>
                        </div>
                        <div className={styles['checkout']}>
                            <h1>Total</h1>
                            <p className={styles['total-price']}>€ {cart.totalPrice}</p>
                            <p>Checkout with:</p>
                            <PayPalCheckoutButton />
                        </div>
                    </ContentWrapper>
                }

            </React.Fragment>
        );
    }





}

export default Cart;