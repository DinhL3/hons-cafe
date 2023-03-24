import React, { createContext } from 'react';
import { useMediaQuery, createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 600,
            sm: 768,
            md: 992,
            lg: 1200,
        },
    },
});

const MediaQueryContext = createContext({
    isExtraSmallScreen: false,
    isSmallScreen: false,
    isMediumScreen: false,
    isLargeScreen: false,
});

const MediaQueryProvider = ({ children }) => {
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <MediaQueryContext.Provider value={{ isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen }}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export { MediaQueryContext, MediaQueryProvider };