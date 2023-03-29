import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../UI/Spinner/Spinner';

import OrderDetailsDrinkCard from './OrderDetailsDrinkCard';

import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import PaidIcon from '@mui/icons-material/Paid';
import DoneIcon from '@mui/icons-material/Done';

import { UserContext } from '../../contexts/user-context';
import { MediaQueryContext } from '../../contexts/media-query-context';

import styles from './OrderDetails.module.scss';


const OrderDetails = () => {
    const [order, setOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { isExtraSmallScreen, isSmallScreen } = useContext(MediaQueryContext);
    const { isLoggedIn, token } = useContext(UserContext);

    const orderId = useParams().orderId;


    const getOrderById = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/orders/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.order);
            setOrder(response.data.order);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (isLoggedIn) {
            getOrderById();
        }
    }, [isLoggedIn])

    if (isLoading) {
        return <Spinner loading={!isLoading} />;
    }

    if (!isLoading && !isLoggedIn) {
        return (
            <ContentWrapper flex={'flex-center'} padding="p-1">
                <h1>Please log in to see this order details</h1>
            </ContentWrapper>
        );
    }

    if (!isLoading && isLoggedIn && order) {
        return (<React.Fragment>
            <ContentWrapper flex={isSmallScreen ? 'flex-center-column' : 'flex-between'} padding={isExtraSmallScreen ? "p-top-1" : "p-1"}>
                <div className={styles.left}>
                    <h1>Order details</h1>
                    {order?.drinks.map(drink => (
                        <OrderDetailsDrinkCard key={drink.id} drink={drink} />
                    ))}
                </div>
                <div className={styles.left}>
                </div>
            </ContentWrapper>

        </React.Fragment>);
    }


}

export default OrderDetails;