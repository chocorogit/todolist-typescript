import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './../redux/components/Header/Header';
import Footer from './../redux/Footer/Footer';
import Main from './../pages/Main.tsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
