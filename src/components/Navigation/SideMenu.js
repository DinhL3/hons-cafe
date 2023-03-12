import NavLinks from './NavLinks';
import CloseIcon from '@mui/icons-material/Close';

import styles from './SideMenu.module.scss';

const SideMenu = (props) => {
    return (
        <div className={`${styles['side-menu']} ${props.isMenuOpen ? styles['open'] : ''}`}>
            <div className={styles['side-menu__top-bar']}>
                <span>Hon's Café</span>
                <CloseIcon className={styles['close-icon']} onClick={props.handleMenuClose} />
            </div>
            <NavLinks isSmallScreen={props.isSmallScreen} />
        </div>
    );
}

export default SideMenu;