import styles from './LoginGroup.module.scss';

import Button from '../UI/Button/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const LoginGroup = () => {
    return (
        <div className={styles['login-group']}>
            <Button type="button" className="light">
                <LoginIcon />Login
            </Button>
            <Button type="button" className="dark">
                <PersonAddAltIcon />Sign up
            </Button>
        </div>
    );
}

export default LoginGroup;