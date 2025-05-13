import React from 'react';
import Header from './components/Header';
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <LandingScreen />
      <About />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
