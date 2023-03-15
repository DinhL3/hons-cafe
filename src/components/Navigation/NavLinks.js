import styles from './NavLinks.module.scss';
import { Link } from "react-router-dom";


const NavLinks = (props) => {
    const handleClick = () => {
        props.handleMenuClose();
    }

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
            <li>Menu</li>
            <li><Link to="/about" onClick={handleClick}>About us</Link></li>
        </ul>
    );
}

export default NavLinks;