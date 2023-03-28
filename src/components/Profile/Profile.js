import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

import Button from "../UI/Button/Button";
import Spinner from '../UI/Spinner/Spinner';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';

import { UserContext } from '../../contexts/user-context';


const Profile = () => {
    const [orders, setOrders] = useState([]);

    const { logoutUser, user, token, isLoading } = useContext(UserContext);

    const getOrders = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/orders", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrders(response.data.orders);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const loadPage = () => {
            if (user) {
                getOrders();
            }
        };
        loadPage();
    }, [])

    if (isLoading) {
        return <Spinner loading={!isLoading} />;
    }

    if (!isLoading && !user) {
        return (
            <ContentWrapper flex={'flex-center'} padding="p-1">
                <h1>Please log in to see your profile</h1>
            </ContentWrapper>
        );
    }

    if (!isLoading && user) {
        return (
            <React.Fragment>
                <ContentWrapper flex={'flex-between'} padding="p-1">
                    <h1>Your order history</h1>
                    <Button type="button" className="light text-and-icon" onClick={logoutUser}>
                        <LogoutIcon />Log out
                    </Button>
                </ContentWrapper>
                <ContentWrapper padding="p-1">
                    {orders.length === 0 ? <p>You don't have any orders</p> : ""}
                </ContentWrapper>

            </React.Fragment>
        );
    }


}

export default Profile;