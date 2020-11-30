import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';


export const DashboardRoutes = () => {

    return(
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } /> 
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } /> 
                    <Route exact path="/dc/" component={ DcScreen } /> 
                    
                    {/* Redirect se usa para redireccionar en caso de no estar en las otras rutas */}
                    <Redirect to="/marvel" />  
                </Switch>
            </div>
        
        </>
    )
}