const persona = {
    nombre: 'Mi',
    apellido: 'Mismo',
    edad: '65',
    direccion : {
        ciudad: 'Villa Miseria',
        zip : 6969,
        lat: 12.33334,
        lot: -9.22222,
    }
};

const persona2 = { ...persona };

persona2.nombre = 'Cachito';

console.table( {
    persona
} );

console.log( {
    persona2
} );