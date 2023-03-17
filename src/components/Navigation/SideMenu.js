import { useContext } from 'react';
import NavLinks from './NavLinks';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import styles from './SideMenu.module.scss';

import { MenuContext } from '../../contexts/menu-context';

const SideMenu = (props) => {
    const { isMenuOpen, handleMenuClose } = useContext(MenuContext);

    return (
        <div className={`${styles['side-menu']} ${isMenuOpen ? styles['open'] : ''}`}>
            <div className={styles['side-menu__top-bar']}>
                <Link to="/" onClick={handleMenuClose}><span>Hon's Café</span></Link>
                <CloseIcon className={styles['close-icon']} onClick={handleMenuClose} />
            </div>
            <NavLinks isSmallScreen={props.isSmallScreen} />
        </div>
    );
}

export default SideMenu;