import { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';

import SideMenu from './SideMenu';
import LeftNavGroup from './LeftNavGroup';
import NavLinks from './NavLinks';
import CoffeeLogo from './CoffeeLogo';
import Backdrop from '../UI/Backdrop/Backdrop';

import MenuIcon from '@mui/icons-material/Menu';

import { useMediaQuery, createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
        },
    },
});

const Navigation = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (!isSmallScreen) {
            setIsMenuOpen(false);
        }
    }, [isSmallScreen]);

    return (
        <nav className={`${styles.nav}`}>
            {isSmallScreen && isMenuOpen && <Backdrop onClose={handleMenuClose} />}
            {isSmallScreen && <SideMenu isSmallScreen={isSmallScreen} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />}
            <div className={styles.wrapper}>
                <div className={styles['right-nav-group']}>
                    {isSmallScreen && <MenuIcon className={styles['burger-icon']} onClick={handleMenuOpen} />}
                    <CoffeeLogo isSmallScreen={isSmallScreen} />
                    {!isSmallScreen && <NavLinks />}
                </div>
                <LeftNavGroup isSmallScreen={isSmallScreen} />
            </div>
        </nav>
    );
}

export default Navigation;