import styles from './LeftNavGroup.module.scss';

import Button from '../UI/Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LeftNavGroup = (props) => {
    const { isSmallScreen } = props;

    return (
        <div className={`${styles['left-nav-group']} ${isSmallScreen ? styles.tablet : ''}`}>
            <Button type="button" className={`light ${isSmallScreen ? 'tablet' : 'text-and-icon'}`}>
                <PersonIcon />{!isSmallScreen && "Login / Register"}
            </Button>
            <Button type="button" className={`dark ${isSmallScreen ? 'tablet' : ''}`}>
                <ShoppingCartIcon />
            </Button>
        </div>
    );
}

export default LeftNavGroup;