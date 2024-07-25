const ola = {
    ke: 'ke',
    edad: 45,
    clave: 'a1b2'
};


const getUser1 = ({ clave, edad }) => {
    return {
        nombreClave: clave,
        anios : edad,
        casa : {
            lat: 12.4343,
            lng: 9.9992
        }
    }
};

const {nombreClave, anios, casa: {lat, lng}} = getUser1( ola );

console.log(nombreClave, anios);
console.log(lat, lng);