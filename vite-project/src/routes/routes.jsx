import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from '../feature/auth/pages/login';
import Dashboard from '../feature/dashboard/dashboard';

export const RoutesModule = () => {
    return(
        <>
        <Routes>
            <Route path='/Login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        </>

    )
}
