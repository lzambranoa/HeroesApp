import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [ heroeId ]);
    

    // esta linea nos regresa al root cuando enviamos un id que no exita
    // y nos reteorn un undefined
    if ( !hero ) {
        return <Redirect to="/" /> 
    }

    const handleReturn = () => {

        if( history.length <= 2 ){
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        alter_ego,
        first_appearance,
        publisher,
        characters,
    } = hero;


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8" >
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" > Alter ego: { alter_ego } </li>
                    <li className="list-group-item" > Publisher: { publisher } </li>
                    <li className="list-group-item" > First appearance: { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> {characters} </p>

                <button 
                onClick={handleReturn} 
                className="btn btn-outline-info" >
                    Return
                </button>
            </div>
            
        </div>
    )
}