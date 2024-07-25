const ola = ['ola', 'ke', 'ace'];

const [] = ola;

const [ , , olas ] = ola;

console.log( olas );

const dameArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = dameArreglo();

console.table(letras);

const funcionArreglo = ( valor ) => {
    return [valor, ()=>{ console.log('ola k ace?') } ]
}


const [ nombre, setNombre ] = funcionArreglo( 'ola' );


console.log (nombre);

setNombre();