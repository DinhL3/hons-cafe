import styles from './Navigation.module.scss';
import Button from '../UI/Button/Button';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>MENU</li>
                <li>ABOUT US</li>
            </ul>
            <div className="login-group">
                <Button type="button" className="light">
                    Login
                </Button>
                <Button type="button" className="dark">
                    Join now
                </Button>
            </div>
        </nav>
    );
}

export default Navigation;