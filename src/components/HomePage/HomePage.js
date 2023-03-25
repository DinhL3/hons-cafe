import React from 'react';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import ContentWrapperText from '../UI/Wrapper/ContentWrapperText';
import ContentWrapperImage from '../UI/Wrapper/ContentWrapperImage';
import Button from '../UI/Button/Button';

import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import coffee1 from "../../assets/img/coffee1.jpg";

import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <React.Fragment>
            <ContentWrapper theme={'light-pink'} flex={'flex-between-center'}>
                <ContentWrapperText>
                    <h1>Fresh Coffee Delivered</h1>
                    <p>Our coffee shop provides you with a selection of expertly crafted coffee blends, roasted to perfection. Indulge in the comfort of your home and experience the perfect cup every time.</p>
                    <Link to="/menu"><Button className="dark text-and-icon">
                        <DeliveryDiningIcon />Order now
                    </Button></Link>
                </ContentWrapperText>
                <ContentWrapperImage src={coffee1} alt="Latte cup" />
            </ContentWrapper >
        </React.Fragment>
    );
}

export default HomePage;