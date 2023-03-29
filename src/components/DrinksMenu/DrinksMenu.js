import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
import DrinkCard from './DrinkCard';
import NotFound from '../NotFound/NotFound';


import { Link } from "react-router-dom";

import Breadcrumbs from '@mui/material/Breadcrumbs';

const DrinksMenu = () => {
    const [hotDrinks, setHotDrinks] = useState([]);
    const [coldDrinks, setcoldDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseUrl = process.env.REACT_APP_BACKEND_URL;


    const hotDrinksAPI = `${baseUrl}/drinks/hot`;
    const coldDrinksAPI = `${baseUrl}/drinks/cold`;

    useEffect(() => {
        setIsLoading(true);

        axios.all([
            axios.get(hotDrinksAPI),
            axios.get(coldDrinksAPI)
        ])
            .then(axios.spread((hotResponse, coldResponse) => {
                setHotDrinks(hotResponse.data.drinks);
                setcoldDrinks(coldResponse.data.drinks);
                setIsLoading(false);
            }))
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Spinner loading={isLoading} />;
    }

    if (error) {
        return <NotFound error={error.message}></NotFound>;
    }

    return (
        <React.Fragment>
            <ContentWrapper theme='light-pink' padding='p-top-1'>
                <Breadcrumbs sx={{ mx: '0.5rem' }} aria-label="breadcrumb">
                    <Link to="/menu">
                        Menu
                    </Link>
                </Breadcrumbs>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' padding='p-top-2' flex='flex-center'>
                <h1>Popular Hot Drinks</h1>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' flex='flex-center-x-top-y'>
                {hotDrinks.slice(0, 3).map(drink => (
                    <DrinkCard key={drink.id} drink={drink} />
                ))}
            </ContentWrapper>
            <ContentWrapper theme='light-pink' padding='p-top-2' flex='flex-center'>
                <Link to="hot"><Button className="light">View all hot drinks ({hotDrinks.length})</Button></Link>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' padding='p-top-2' flex='flex-center'>
                <h1>Popular Cold Drinks</h1>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' flex='flex-center-x-top-y'>
                {coldDrinks.slice(0, 3).map(drink => (
                    <DrinkCard key={drink.id} drink={drink} />
                ))}
            </ContentWrapper>
            <ContentWrapper theme='light-pink' padding='p-top-bottom-2' flex='flex-center'>
                <Link to="cold"><Button className="light">View all cold drinks ({coldDrinks.length})</Button></Link>
            </ContentWrapper>
        </React.Fragment>
    );
}

export default DrinksMenu;