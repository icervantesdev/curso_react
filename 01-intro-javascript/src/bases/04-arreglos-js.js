const arreglo = [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function cuadrado(x) {
    return x*x*x;
});

console.table(arreglo);
console.table(arreglo2);
console.table(arreglo3);