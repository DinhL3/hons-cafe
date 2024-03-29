import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';

import styles from './DrinkCard.module.scss';
import dummy from "../../assets/img/dummy1.png";
import Button from '../UI/Button/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const DrinkCard = ({ drink }) => {
    const { name, description, price, image, _id: drinkId } = drink;
    const { user } = useContext(UserContext);
    const { addToCart, cartLoading } = useContext(CartContext);
    const [cartMessage, setCartMessage] = useState(null);

    const handleAddToCartClick = () => {
        if (!user) {
            setCartMessage('Please log in');
            setTimeout(() => {
                setCartMessage(null);
            }, 1000);
        } else {
            addToCart(drinkId);
            setCartMessage('Item added');
            setTimeout(() => {
                setCartMessage(null);
            }, 1000);
        }
    }


    return (
        <div className={styles.card}>
            <img className={styles.image} src={image || dummy} alt={name} />
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>€{price.toFixed(2)}</p>
            </div>
            <Button className='dark text-and-icon' onClick={handleAddToCartClick} disabled={cartLoading}><AddShoppingCartIcon />Add to Cart</Button>
            {cartMessage && (<div className={styles.message}>{cartMessage}</div>)}
        </div >
    );
};

export default DrinkCard;