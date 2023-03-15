import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './Navigation.module.scss';

import SideMenu from './SideMenu';
import CornerNavGroup from './CornerNavGroup';
import NavLinks from './NavLinks';
import CoffeeLogo from './CoffeeLogo';
import Backdrop from '../UI/Backdrop/Backdrop';

import MenuIcon from '@mui/icons-material/Menu';

import { MediaQueryContext } from '../../contexts/media-query-context';

const Navigation = () => {
    const { isSmallScreen } = useContext(MediaQueryContext);

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
                    {!isSmallScreen && <NavLinks handleMenuClose={handleMenuClose} />}
                </div>
                <CornerNavGroup isSmallScreen={isSmallScreen} />
            </div>
        </nav>
    );
}

export default Navigation;