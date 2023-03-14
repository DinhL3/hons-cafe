import React from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import { MediaQueryProvider } from './contexts/media-query-context';

function App() {
  return (
    <MediaQueryProvider>
      <React.Fragment>
        <Navigation />
        <LandingPage />
        <Footer />
      </React.Fragment>
    </MediaQueryProvider>
  );
}

export default App;
