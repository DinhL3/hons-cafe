import styles from './CornerNavGroup.module.scss';
import { useContext } from 'react';


import Button from '../UI/Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';


const CornerNavGroup = (props) => {
    const { isSmallScreen } = props;

    const { user } = useContext(UserContext);

    let userButtonText;
    if (isSmallScreen) {
        userButtonText = '';
    } else if (user) {
        userButtonText = user.userName;
    } else {
        userButtonText = 'Login';
    }

    return (
        <div className={`${styles['corner-nav-group']} ${isSmallScreen ? styles.small : ''}`}>
            <Link to="login"><Button type="button" className={`light ${isSmallScreen ? 'small' : 'text-and-icon'}`}>
                <PersonIcon />{userButtonText}
            </Button></Link>
            <Button type="button" className={`dark ${isSmallScreen ? 'small' : ''}`}>
                <ShoppingCartIcon />
            </Button>
        </div>
    );
}

export default CornerNavGroup;