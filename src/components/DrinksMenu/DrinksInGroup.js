import React, { useState, useEffect } from 'react';
import ContentWrapper from '../UI/Wrapper/ContentWrapper';
import axios from 'axios';
import DrinkCard from './DrinkCard';
import NotFound from '../NotFound/NotFound';
import Spinner from '../UI/Spinner/Spinner';
import { useParams } from "react-router-dom"

import styles from './DrinksInGroup.module.scss';

import { Link } from "react-router-dom";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import { spacing } from '@mui/system';


const DrinksInGroup = () => {
    let { drinkGroup } = useParams()
    const capitalizedDrinkGroup = drinkGroup.charAt(0).toUpperCase() + drinkGroup.slice(1);

    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortType, setSortType] = useState('default');
    const [filterType, setFilterType] = useState('all');
    const hotDrinksAPI = 'http://localhost:5000/hotDrinks';
    const coldDrinksAPI = 'http://localhost:5000/coldDrinks';

    useEffect(() => {
        setIsLoading(true);
        let apiURL = '';
        if (drinkGroup === 'hot') {
            apiURL = hotDrinksAPI;
        } else if (drinkGroup === 'cold') {
            apiURL = coldDrinksAPI;
        }
        axios.get(apiURL)
            .then(response => {
                setDrinks(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [drinkGroup]);

    const handleSortTypeChange = (event) => {
        setSortType(event.target.value);
    }

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    }

    const filteredDrinks = filterType === 'all' ? drinks : drinks.filter(drink => drink.type === filterType);

    const sortedDrinks = () => {
        switch (sortType) {
            case 'name':
                return [...filteredDrinks].sort((a, b) => a.name.localeCompare(b.name));
            case 'price':
                return [...filteredDrinks].sort((a, b) => a.price - b.price);
            default:
                return filteredDrinks;
        }
    }


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
                    <Link to={`/menu/${drinkGroup}`}>
                        {capitalizedDrinkGroup}
                    </Link>
                </Breadcrumbs>
            </ContentWrapper>

            <ContentWrapper theme='light-pink' padding='p-top-2' flex='flex-center'>

                <h1>All {drinkGroup} drinks</h1>
                <ContentWrapper theme='light-pink' flex='flex-center'>
                    <div className={styles.filter}>
                        <label htmlFor="sortType">Sort by:</label>
                        <select id="sortType" value={sortType} onChange={handleSortTypeChange}>
                            <option value="default">Default</option>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div className={styles.filter}>
                        <label htmlFor="filterType">Filter by:</label>
                        <select id="filterType" value={filterType} onChange={handleFilterTypeChange}>
                            <option value="all">All</option>
                            <option value="coffee">Coffee</option>
                            <option value="tea">Tea</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </ContentWrapper>
            </ContentWrapper>
            <ContentWrapper theme='light-pink' flex='flex-center-x-top-y'>
                {sortedDrinks().map(drink => (
                    <DrinkCard key={drink.id} drink={drink} />
                ))}
            </ContentWrapper>
        </React.Fragment >
    );
}

export default DrinksInGroup;