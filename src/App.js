import React from 'react';

import {Route, Routes} from "react-router";


import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import TvPage from "./Pages/TvPage";

function App() {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie'} element={<MoviesPage/>}/>
                    <Route path={'tv'} element={<TvPage/>}/>
                </Route>
            </Routes>

        </>
    );
}

export default App;