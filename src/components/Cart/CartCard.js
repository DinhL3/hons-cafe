import styles from './CartCard.module.scss';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { MediaQueryContext } from '../../contexts/media-query-context';


import Button from '../UI/Button/Button';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import dummy from "../../assets/img/dummy1.png";



const CartCard = ({ drink, quantity }) => {
    const { name, description, price, image, _id: drinkId } = drink;
    const { increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);
    const { isExtraSmallScreen } = useContext(MediaQueryContext);

    const handleRemoveClick = async () => { await removeItem(drinkId) };
    const handleIncreaseClick = async () => { await increaseQuantity(drinkId) };
    const handleDecreaseClick = async () => { await decreaseQuantity(drinkId) };


    return (
        <div className={`${styles.card} ${isExtraSmallScreen && styles.xsmall}`}>
            <div className={styles['image-and-info']}>
                <img className={styles.image} src={image || dummy} alt={name} />
                <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.price}>€{(price * quantity).toFixed(2)}</p>
                </div>
            </div>
            <div className={styles['quantity-and-remove']}>
                <div className={styles['quantity-controls']}>
                    <Button className="light" onClick={handleDecreaseClick}><RemoveIcon /></Button>
                    <span>{quantity}</span>
                    <Button className="dark" onClick={handleIncreaseClick}><AddIcon /></Button>
                </div>
                <button className={styles.remove} type="button" onClick={handleRemoveClick}><DeleteOutlineIcon /></button>
            </div>
        </div>);
}

export default CartCard;