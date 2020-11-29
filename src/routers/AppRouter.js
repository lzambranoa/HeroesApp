import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                
                <NavBar />
               
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route exact path="/" component={ MarvelScreen } />
                </Switch>
            </div>
        </Router>
    )
}