import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from './Components/Header/Header';
import {Routes} from "./Components/ROUTES/Routes";

const App = () => {
    return (
        <HashRouter>

            <Header/>
            <Routes/>

        </HashRouter>
    );
}

export default App;
