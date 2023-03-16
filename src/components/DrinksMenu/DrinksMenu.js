import React, { useState, useEffect, useCallback } from 'react';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import axios from 'axios';
import DrinkCard from './DrinkCard';

const DrinksMenu = () => {
    const [hotDrinks, setHotDrinks] = useState([]);
    const [coldDrinks, setcoldDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const hotDrinksAPI = 'http://localhost:5000/hotDrinks';
    const coldDrinksAPI = 'http://localhost:5000/coldDrinks';

    useEffect(() => {
        setIsLoading(true);

        axios.all([
            axios.get(hotDrinksAPI),
            axios.get(coldDrinksAPI)
        ])
            .then(axios.spread((hotResponse, icedResponse) => {
                setHotDrinks(hotResponse.data.slice(0, 3));
                setcoldDrinks(icedResponse.data.slice(0, 3));
                setIsLoading(false);
            }))
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <React.Fragment>
            <ContentWrapper theme='light-pink' padding='p-top-2' flex='flex-center'>
                <h1>Popular Hot Drinks</h1>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' flex='flex-center'>
                {hotDrinks.map(drink => (
                    <DrinkCard key={drink.id} drink={drink} />
                ))}
            </ContentWrapper>
            <ContentWrapper theme='light-pink' padding='p-top-2' flex='flex-center'>
                <h1>Popular Cold Drinks</h1>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' flex='flex-center'>
                {coldDrinks.map(drink => (
                    <DrinkCard key={drink.id} drink={drink} />
                ))}
            </ContentWrapper>


        </React.Fragment>
    );
}

export default DrinksMenu;