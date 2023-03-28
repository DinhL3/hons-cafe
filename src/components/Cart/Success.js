import React from 'react';
import { Link } from "react-router-dom";

import Button from '../UI/Button/Button';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import HomeIcon from '@mui/icons-material/Home';
import Barista from "../../assets/img/barista.png";


import styles from "./Success.module.scss"


const Success = () => {
    return (
        <React.Fragment>
            <ContentWrapper flex={'flex-center-column'} padding="p-top-1">
                <h1>Order placed!</h1>
                <p>We have received your order and will deliver to your door soon!</p>
                <img src={Barista} alt="barista" className={styles.img} />
                <Link to="/"><Button className="dark text-and-icon"><HomeIcon />Go back to Homepage</Button></Link>
            </ContentWrapper>
        </React.Fragment>
    );
}

export default Success;