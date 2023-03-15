import NavLinks from './NavLinks';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import styles from './SideMenu.module.scss';

const SideMenu = (props) => {
    const handleClick = () => {
        props.handleMenuClose();
    }

    return (
        <div className={`${styles['side-menu']} ${props.isMenuOpen ? styles['open'] : ''}`}>
            <div className={styles['side-menu__top-bar']}>
                <Link to="/" onClick={handleClick}><span>Hon's Café</span></Link>
                <CloseIcon className={styles['close-icon']} onClick={handleClick} />
            </div>
            <NavLinks isSmallScreen={props.isSmallScreen} />
        </div>
    );
}

export default SideMenu;