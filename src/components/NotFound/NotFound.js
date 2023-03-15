import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import Button from '../UI/Button/Button';
import HomeIcon from '@mui/icons-material/Home';
import Lost from "../../assets/img/lost.png";

import styles from "./NotFound.module.scss"


import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className={styles['not-found']}>
            <ContentWrapper flex={'flex-center-column'}>
                <h1>Page not found</h1>
                <img src={Lost} alt="Lost" />
                <Link to="/"><Button className="dark text-and-icon"><HomeIcon />Go back to Homepage</Button></Link>
            </ContentWrapper>
        </div>

    );
}

export default NotFound;