import { useContext } from 'react';
import { MenuContext } from '../../contexts/menu-context';

import styles from './NavLinks.module.scss';
import { Link } from "react-router-dom";

const NavLinks = (props) => {
    const { handleMenuClose } = useContext(MenuContext);

    const classNames = [styles['nav-links']];

    if (props.isSmallScreen) {
        classNames.push(styles['small']);
    }

    if (props.className) {
        const additionalClasses = props.className.split(' ').map((className) => styles[className]);
        classNames.push(...additionalClasses);
    }

    return (
        <ul className={classNames.join(' ')}>
            <li><Link to="/menu" onClick={handleMenuClose}>Menu</Link></li>
            <li><Link to="/about" onClick={handleMenuClose}>About us</Link></li>
        </ul>
    );
}

export default NavLinks;