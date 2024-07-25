const nombre = 'ivan';
const apellido = 'cervantes';

const nombreCompleto = `${nombre}`;


console.log(nombreCompleto);

function saludo(nombre) {
    return 'ke ace ' + nombre;
}

console.log(`${saludo(nombreCompleto)}`);