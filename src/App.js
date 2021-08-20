import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import InitialSection from './components/InitialSection/InitialSection';
import Navbar from './components/Navbar/Navbar';
import SecondSection from './components/SecondSection/SecondSection';
import Shorter from './components/Shorter/Shorter';

const App = () => {
    return (
        <div className='container'>
            <Navbar/>
            <InitialSection/>
            <Shorter/>
            <SecondSection/>
            <Footer/>
        </div>
    )
}

export default App;
