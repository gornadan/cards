import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTE} from "../ROUTES/Routes";

export const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={ROUTE.LOGIN}>LOGIN</NavLink></li>
                <li><NavLink to={ROUTE.REGISTRATION}>REGISTRATION</NavLink></li>
                <li><NavLink to={ROUTE.PROFILE}>PROFILE</NavLink></li>
                <li><NavLink to={ROUTE.ERROR}>ERROR</NavLink></li>
                <li><NavLink to={ROUTE.PAS_RECOVERY}>PAS_RECOVERY</NavLink></li>
                <li><NavLink to={ROUTE.PAS_ENTER}>PAS_ENTER</NavLink></li>
                <li><NavLink to={ROUTE.TEST}>TEST</NavLink></li>
            </ul>
        </div>
    )
}