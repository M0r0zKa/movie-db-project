import React from 'react';
import {Outlet} from "react-router";
import Pagination from "../Pagination/Pagination";
import {Link} from "react-router-dom";
import  "./Layout.css"

function Layout() {
    return (
        <div className={'wrapper'}>
            <header>
                <div className={'logo'}>LOGO</div>
                <menu className={'menu'}>
                    <Link to={'/'}>Главная страница</Link>
                    <Link to={'movie'}>Фильмы</Link>
                    <Link to={'tv'}>ТВ</Link>
                </menu>
                <div className={'searchAndUserBlock'}>

                </div>
            </header>
            <Outlet/>
            <Pagination/>
            <footer>
                2023
            </footer>
        </div>
    );
}

export default Layout;