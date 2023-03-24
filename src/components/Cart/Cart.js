import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import { Link, Navigate } from "react-router-dom";

import Button from '../UI/Button/Button';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import CartCard from './CartCard';

import { MediaQueryContext } from '../../contexts/media-query-context';
import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';



const Cart = () => {
    const { isExtraSmallScreen, isSmallScreen } = useContext(MediaQueryContext);
    const { user } = useContext(UserContext)
    const { cart, clearCart } = useContext(CartContext);
    console.log(cart);

    return (
        <React.Fragment>
            {!user && (
                <Navigate to="/login" replace={true} />
            )}
            <ContentWrapper theme="light-pink" flex={isSmallScreen ? 'flex-center-column' : 'flex-between'} padding={isExtraSmallScreen ? "p-top-1" : "p-1"}>
                <div className={styles['drinks-list']}>
                    <h1>Your cart</h1>
                    {cart?.drinks?.map(drink => (
                        <CartCard key={drink.drink._id} drink={drink.drink} quantity={drink.quantity} />
                    ))}
                </div>
                <div className={styles['checkout']}>
                    <h1>Total</h1>
                    <p>€ {cart?.totalPrice}</p>
                    <Button className="dark">Check out with Paypal</Button>
                </div>
            </ContentWrapper>
        </React.Fragment>
    );
}

export default Cart;