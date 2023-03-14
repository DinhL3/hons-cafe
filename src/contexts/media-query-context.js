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
    isMediumScreen: false,
    isLargeScreen: false,
});

const MediaQueryProvider = ({ children }) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <MediaQueryContext.Provider value={{ isSmallScreen, isMediumScreen, isLargeScreen }}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export { MediaQueryContext, MediaQueryProvider };