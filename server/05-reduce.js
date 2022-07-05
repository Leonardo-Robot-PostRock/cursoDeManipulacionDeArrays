const totals = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < totals.length; i++) {
    const element = totals[i];
    // sum += element;
    sum = sum + element;
}

console.log(sum);

/*REDUCE*/
/*En reduce se debe enviar dos parametros. El primero es un arrow function y el segundo es el estado inicial del acumulador*/
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta: ', rta);