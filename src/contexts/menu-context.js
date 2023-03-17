import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, handleMenuOpen, handleMenuClose }}>
            {props.children}
        </MenuContext.Provider>
    );
};


