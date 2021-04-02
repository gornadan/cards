import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {Error} from "../Error/Error";
import {PassRecovery} from "../PassRecovery/passRecovery";
import {PassEnter} from "../PassEnter/PassEnter";
import {Test} from "../Test/test";


export const ROUTE = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    ERROR: '/404',
    PAS_RECOVERY: '/pas-recovery',
    PAS_ENTER: '/pas-enter',
    TEST: '/test'
};

export const Routes = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path={ROUTE.LOGIN} render={() => <Login/>}/>
                    <Route path={ROUTE.REGISTRATION} render={() => <Registration/>}/>
                    <Route path={ROUTE.PROFILE} render={() => <Profile/>}/>
                    <Route path={ROUTE.ERROR} render={() => <Error/>}/>
                    <Route path={ROUTE.PAS_RECOVERY} render={() => <PassRecovery/>}/>
                    <Route path={ROUTE.PAS_ENTER} render={() => <PassEnter/>}/>
                    <Route path={ROUTE.TEST} render={() => <Test/>}/>
                </Switch>
            </HashRouter>
        </div>
    )}
