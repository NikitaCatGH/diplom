import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';



const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user);
    return (

        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} Component={Component} />;
            })}
            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} Component={Component} />;
            })}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};

export default AppRouter;