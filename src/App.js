import logo from './logo.svg';
import './Styles/reset.css';
import './Styles/globalStyles.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home';
import Error from './Containers/Error';
import PaletteDemo from './Containers/PaletteDemo';
import { GlobalProvider } from './Context/globalContext';

function App() {

    return (
        <GlobalProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/palette_demo" element = {<PaletteDemo />} />
                </Routes>
            </Router>
        </GlobalProvider>
    );
}

export default App;