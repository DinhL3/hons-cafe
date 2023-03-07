import styles from './Navigation.module.scss';

import LoginGroup from './LoginGroup';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>MENU</li>
                <li>ABOUT US</li>
            </ul>
            <LoginGroup />
        </nav>
    );
}

export default Navigation;