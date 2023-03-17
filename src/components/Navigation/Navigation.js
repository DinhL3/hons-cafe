import { useEffect, useState, useContext } from 'react';
import styles from './Navigation.module.scss';

import SideMenu from './SideMenu';
import CornerNavGroup from './CornerNavGroup';
import NavLinks from './NavLinks';
import CoffeeLogo from './CoffeeLogo';
import Backdrop from '../UI/Backdrop/Backdrop';

import MenuIcon from '@mui/icons-material/Menu';

import { MediaQueryContext } from '../../contexts/media-query-context';
import { MenuContext } from '../../contexts/menu-context';

const Navigation = () => {
    const { isSmallScreen } = useContext(MediaQueryContext);
    const { isMenuOpen, handleMenuOpen, handleMenuClose } = useContext(MenuContext);

    useEffect(() => {
        if (!isSmallScreen) {
            handleMenuClose();
        }
    }, [isSmallScreen, handleMenuClose]);

    return (
        <nav className={`${styles.nav}`}>
            {isSmallScreen && isMenuOpen && <Backdrop onClose={handleMenuClose} />}
            {isSmallScreen && <SideMenu isSmallScreen={isSmallScreen} isMenuOpen={isMenuOpen} />}
            <div className={styles.wrapper}>
                <div className={styles['right-nav-group']}>
                    {isSmallScreen && <MenuIcon className={styles['burger-icon']} onClick={handleMenuOpen} />}
                    <CoffeeLogo isSmallScreen={isSmallScreen} />
                    {!isSmallScreen && <NavLinks handleMenuClose={handleMenuClose} />}
                </div>
                <CornerNavGroup isSmallScreen={isSmallScreen} />
            </div>
        </nav>
    );
}

export default Navigation;