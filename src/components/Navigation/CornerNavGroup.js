import styles from './CornerNavGroup.module.scss';

import React, { useContext, useEffect } from 'react';
import Button from '../UI/Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';


const CornerNavGroup = (props) => {
    const { isSmallScreen } = props;

    const { user } = useContext(UserContext);
    const { cart, getCart } = useContext(CartContext);

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
            <Link to={user ? "profile" : "login"}><Button type="button" className={`light ${isSmallScreen ? 'small' : 'text-and-icon'}`}>
                <PersonIcon />{userButtonText}
            </Button></Link>
            <Link to="cart"><Button type="button" className={`dark ${isSmallScreen ? 'small' : ''}`}>
                <ShoppingCartIcon />
                <p className="num">{user && cart?.drinks?.length}</p>
            </Button></Link>
        </div>
    );
}

export default CornerNavGroup;