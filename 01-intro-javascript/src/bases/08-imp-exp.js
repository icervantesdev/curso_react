//import { heroes } from './data/heroes';

import { heroes } from "../data/heroes";

//import { heroes } from './data/heroes'

// console.log( heroes );

export const getHeroByID = ( id ) =>  heroes.find( (heroe) => heroe.id === id);

// console.log( getHeroByID(2) );

export const getHeroByOwner = ( owner ) =>  heroes.filter( (heroe) => heroe.owner === owner);

// console.log( getHeroByOwner('Marvel') );
