import styles from './OrderDetailsDrinkCard.module.scss';
import dummy from "../../assets/img/dummy1.png";



const OrderDetailsDrinkCard = ({ drink }) => {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <img className={styles.image} src={drink.drink.image || dummy} alt={drink.drink.name} />
                <div className={styles.info}>
                    <h3 className={styles.name}>{drink.drink.name}</h3>
                    <p className={styles.price}>{drink.quantity}x €{drink.drink.price.toFixed(2)}</p>
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles['total-drink-price']}>€{drink.totalDrinkPrice.toFixed(2)}</span>
            </div>
        </div>);
}

export default OrderDetailsDrinkCard;