import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import Button from '../UI/Button/Button';
import HomeIcon from '@mui/icons-material/Home';
import Lost from "../../assets/img/lost.png";
import Error from "../../assets/img/error.png";

import styles from "./NotFound.module.scss"


import { Link } from "react-router-dom";


const NotFound = (props) => {
    const errorMsg = props.error;

    return (
        <div className={styles['not-found']}>
            <ContentWrapper flex={'flex-center-column'}>
                <h1>{errorMsg || "Page not found"}</h1>
                <img src={errorMsg ? Error : Lost} alt={errorMsg ? "error" : "lost"} />
                <Link to="/"><Button className="dark text-and-icon"><HomeIcon />Go back to Homepage</Button></Link>
            </ContentWrapper>
        </div>

    );
}

export default NotFound;