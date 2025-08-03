import React from 'react';
import './styles/index.scss';
import { Header } from './sections/Header';
import { HistoryDam } from "./sections/HistoryDam";
import {AfterDam} from "./sections/AfterDam ";
import {FirstRoute} from "./sections/FirstRoute";
import {BingoSection} from "./sections/BingoSection";
import {FAQ} from "./sections/FAQ";
import {Footer} from "./sections/Footer";

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="page-container">
                <Header/>
                <main>
                    <HistoryDam/>
                    <AfterDam/>
                    <FirstRoute/>
                    <BingoSection/>
                    <FAQ/>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
