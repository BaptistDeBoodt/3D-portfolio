import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../consts/Routes.js';
import Intro from '../Intro/Intro.jsx';
import Main from '../Upstairs/Main.jsx';
import Down from '../Downstairs/Down.jsx';

const Authentication = () => {
    return (
        <Routes>
            <Route path={ROUTES.INTRO} element={<Intro />} />
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.DOWN} element={<Down />} /> 
        </Routes>
    );
};

export default Authentication;
