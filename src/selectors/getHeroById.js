import { heroes } from "../data/heroes";

export const getHeroesById = ( id ) => {

    // Retorna el primer item encontrado
    return heroes.find( hero => hero.id === id);

}