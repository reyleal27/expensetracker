import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SharedLayout = lazy(() => import('../pages/SharedLayout'));

const PagesRoute = () => {
    return (
       
            <Suspense fallback='Loading..'>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<HomePage />}/>
                    <Route path='/login'></Route>
                </Route>
                </Routes>
                </Suspense>
      
    )
};

export default PagesRoute;
