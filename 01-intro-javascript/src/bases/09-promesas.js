import { getHeroByID } from "./bases/08-imp-exp.js";
import { heroes } from "./data/heroes.js";



// const promesa = new Promise( (resolve, reject) => {

//     const hero = getHeroByID(1);
//     resolve(hero);
// } );

// promesa.then( (heroe) => {
//     console.table(heroe)
// })
// .catch( err =>console.warn( err ));

const getHeroByIDAsync = (id) => {

    return new Promise( (resolve, reject) => {

        const hero = getHeroByID(id);
        if(hero){
            resolve(hero);
        } else {
            reject('not found....');
        }
        
    } );

}

getHeroByIDAsync(1).then( console.table )
.catch( console.warn);