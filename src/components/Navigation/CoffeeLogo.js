import coffeeLogo from "../../assets/icons/coffee.svg";
import styles from './CoffeeLogo.module.scss';

const CoffeeLogo = (props) => {
    const classNames = [styles['coffee-logo']];

    if (props.isSmallScreen) {
        classNames.push(styles['tablet']);
    }

    if (props.className) {
        const additionalClasses = props.className.split(' ').map((className) => styles[className]);
        classNames.push(...additionalClasses);
    }

    return (
        <div className={classNames.join(' ')}>
            <img src={coffeeLogo} alt="coffee logo" />
        </div>
    );
};

export default CoffeeLogo;
