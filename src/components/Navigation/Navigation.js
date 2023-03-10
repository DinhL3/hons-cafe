import styles from './Navigation.module.scss';
import coffeeLogo from "../../assets/icons/coffee.svg";
import LoginGroup from './LoginGroup';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                <ul>
                    <div className={styles.logo}>
                        <img src={coffeeLogo} alt="coffee logo" />
                    </div>
                    <li>Menu</li>
                    <li>About us</li>
                    <li>Orders</li>
                </ul>
                <LoginGroup />
            </div>
        </nav>
    );
}

export default Navigation;