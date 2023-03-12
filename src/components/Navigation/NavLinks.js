import styles from './NavLinks.module.scss';

const NavLinks = (props) => {
    const classNames = [styles['nav-links']];

    if (props.isSmallScreen) {
        classNames.push(styles['tablet']);
    }

    if (props.className) {
        const additionalClasses = props.className.split(' ').map((className) => styles[className]);
        classNames.push(...additionalClasses);
    }

    return (
        <ul className={classNames.join(' ')}>
            <li>Menu</li>
            <li>About us</li>
        </ul>
    );
}

export default NavLinks;