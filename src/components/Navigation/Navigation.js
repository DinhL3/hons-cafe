import styles from './Navigation.module.scss';
import coffeeLogo from "../../assets/icons/coffee.svg";
import LeftNavGroup from './LeftNavGroup';

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
                </ul>
                <LeftNavGroup />
            </div>
        </nav>
    );
}

export default Navigation;