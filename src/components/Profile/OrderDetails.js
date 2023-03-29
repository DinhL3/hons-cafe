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
import MopedIcon from '@mui/icons-material/Moped';

import styles from './OrderDetails.module.scss';


const OrderDetails = () => {
    const [order, setOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { isExtraSmallScreen, isSmallScreen } = useContext(MediaQueryContext);
    const { isLoggedIn, token } = useContext(UserContext);

    const orderId = useParams().orderId;

    const baseUrl = process.env.REACT_APP_BACKEND_URL;



    const getOrderById = async () => {
        try {
            const response = await axios.get(`${baseUrl}/orders/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrder(response.data.order)
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const date = new Date(order.created_at);
    const formattedDate = date.toLocaleString('en-GB', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        getOrderById();
    }, [])

    if (isLoading) {
        return <Spinner loading={isLoading} />;
    }

    if (!isLoading && !isLoggedIn) {
        return (
            <ContentWrapper flex={'flex-center'} padding="p-1">
                <h1>Please log in to see this order details</h1>
            </ContentWrapper>
        );
    }

    if (!isLoading && order) {
        return (<React.Fragment>
            <ContentWrapper flex={isSmallScreen ? 'flex-center-column' : 'flex-between'} padding={isExtraSmallScreen ? "p-top-1" : "p-1"}>
                <div className={styles.left}>
                    <h1>Order details</h1>
                    {order.drinks.map(drink => (
                        <OrderDetailsDrinkCard key={drink.id} drink={drink} />
                    ))}
                    <div className={styles.total}>
                        <h3>Total: </h3>
                        <p className={styles['total-price']}>€{order.totalPrice}</p>
                    </div>

                </div>
                <div className={styles.right}>
                    <p>Order ID: {order.id}</p>
                    <p>Created: {formattedDate}</p>
                    <h3>Order status</h3>
                    <div className={styles.status}>{order.status === "PAID" ? <PaidIcon color="primary" /> : <DoneIcon color="success" />}
                        <span>{order.status}</span>
                    </div>
                    <div className={styles['shipping-details']}><div />
                        <div className={styles['title-block']}><MopedIcon /><h3>Shipping address</h3></div>
                        <p>{order.shipment.full_name}</p>
                        <p>{order.shipment.address_line_1}</p>
                        <p>{order.shipment.postal_code} {order.shipment.admin_area_2}</p>
                    </div>
                </div>
            </ContentWrapper>

        </React.Fragment>);
    }


}

export default OrderDetails;