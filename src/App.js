import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
// import Footer from './components/Footer/Footer';
import { MediaQueryProvider } from './contexts/media-query-context';
import { MenuProvider } from './contexts/menu-context';
import { CartProvider } from './contexts/cart-context';
import UserProvider from './contexts/user-context';

import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import DrinksMenu from './components/DrinksMenu/DrinksMenu';
import DrinksInGroup from './components/DrinksMenu/DrinksInGroup';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Profile from './components/Profile/Profile';

function BasicLayout() {
  return (
    <UserProvider>
      <CartProvider>
        <MediaQueryProvider>
          <MenuProvider>
            <React.Fragment>
              <Navigation />
              <Outlet />
              {/* <Footer /> */}
            </React.Fragment>
          </MenuProvider>
        </MediaQueryProvider>
      </CartProvider>
    </UserProvider>
  )
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="menu" element={<DrinksMenu />} />
        <Route path="menu/:drinkGroup" element={<DrinksInGroup />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
