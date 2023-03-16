import React from 'react';
import styles from './DrinkCard.module.scss';
import dummy from "../../assets/img/dummy1.png";
import Button from '../UI/Button/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const DrinkCard = ({ drink }) => {
    const { name, description, price, image } = drink;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={image || dummy} alt={name} />
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>€{price.toFixed(2)}</p>
            </div>
            <Button className='dark text-and-icon'><AddShoppingCartIcon />Add to Cart</Button>
        </div >
    );
};

export default DrinkCard;