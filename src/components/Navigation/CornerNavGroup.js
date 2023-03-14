import styles from './CornerNavGroup.module.scss';

import Button from '../UI/Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CornerNavGroup = (props) => {
    const { isSmallScreen } = props;

    return (
        <div className={`${styles['corner-nav-group']} ${isSmallScreen ? styles.small : ''}`}>
            <Button type="button" className={`light ${isSmallScreen ? 'small' : 'text-and-icon'}`}>
                <PersonIcon />{!isSmallScreen && "Login / Register"}
            </Button>
            <Button type="button" className={`dark ${isSmallScreen ? 'small' : ''}`}>
                <ShoppingCartIcon />
            </Button>
        </div>
    );
}

export default CornerNavGroup;