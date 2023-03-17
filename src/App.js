import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { MediaQueryProvider } from './contexts/media-query-context';
import { MenuProvider } from './contexts/menu-context';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import DrinksMenu from './components/DrinksMenu/DrinksMenu';
import DrinksInGroup from './components/DrinksMenu/DrinksInGroup';

function BasicLayout() {
  return (
    <MediaQueryProvider>
      <MenuProvider>
        <React.Fragment>
          <Navigation />
          <Outlet />
          {/* <Footer /> */}
        </React.Fragment>
      </MenuProvider>
    </MediaQueryProvider>
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
