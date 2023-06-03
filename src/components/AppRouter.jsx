import React, {useContext} from 'react';
import {privateRoutes, publicRoutes, routes} from "../router/routes";
import {Route, Routes} from "react-router-dom";
import Loader from "./UI/loader/Loader";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>
                )}
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>
                )}
            </Routes>
            // <Routes>
            //     {routes.map((route) =>
            //         <Route key={route.path} path={route.path} element={route.element}/>
            //     )}
            // </Routes>
    );
};

export default AppRouter;