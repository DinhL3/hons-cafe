import React, { createContext } from 'react';
import { useMediaQuery, createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
        },
    },
});

const MediaQueryContext = createContext({
    isSmallScreen: false,
});

const MediaQueryProvider = ({ children }) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <MediaQueryContext.Provider value={{ isSmallScreen }}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export { MediaQueryContext, MediaQueryProvider };