import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { MediaQueryProvider } from './contexts/media-query-context';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';

function BasicLayout() {
  return (
    <MediaQueryProvider>
      <React.Fragment>
        <Navigation />
        <Outlet />
        <Footer />
      </React.Fragment>
    </MediaQueryProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
