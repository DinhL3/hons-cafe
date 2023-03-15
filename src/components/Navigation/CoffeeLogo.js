import coffeeLogo from "../../assets/icons/coffee.svg";
import styles from './CoffeeLogo.module.scss';
import { Link } from "react-router-dom";


const CoffeeLogo = (props) => {
    const handleClick = () => {
        props.handleMenuClose();
    }

    const classNames = [styles['coffee-logo']];

    if (props.isSmallScreen) {
        classNames.push(styles['small']);
    }

    if (props.className) {
        const additionalClasses = props.className.split(' ').map((className) => styles[className]);
        classNames.push(...additionalClasses);
    }

    return (
        <Link to="/" className={classNames.join(' ')}>
            <img src={coffeeLogo} alt="coffee logo" />
        </Link>
    );
};

export default CoffeeLogo;
