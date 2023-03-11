import styles from './LeftNavGroup.module.scss';

import Button from '../UI/Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LeftNavGroup = () => {
    return (
        <div className={styles['login-group']}>
            <Button type="button" className="light has-icon">
                <PersonIcon />Login / Register
            </Button>
            <Button type="button" className="dark">
                <ShoppingCartIcon />
            </Button>
        </div>
    );
}

export default LeftNavGroup;