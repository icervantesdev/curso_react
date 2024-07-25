const ola = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre )  => `ola, ${ nombre }`;

const getUser = () =>(
    {
        uid: '1441ASZ',
        user: 'ola'
    })

console.log(saludar2('q ace'));
console.log(getUser);

const getActiveUser = ( nombre ) => ( 
    {
        uid: 'ASC88999',
        user: nombre
    }
);

console.log( getActiveUser( 'Mi Mismo' ));