import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

// Esta linea de código me perimte ver su existe el item user en el 
// localStarage, de lo contrario me regresa un logged en false
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    /* Establecemos los valores cuando el user cambia*/
    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user));
    }, [user])

    return (

        <AuthContext.Provider value={{user, dispatch}} >
            <AppRouter />
        </AuthContext.Provider>
    )
}