const numbers = [1, 2, 3, 4];
let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0)
console.log('rta2', rta2);

//Ejemplo con objetos, en este caso si almenos uno fue entregado, la respuesta será true

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Julien',
        total: 140,
        delivered: false
    },
    {
        customerName: 'Pierre',
        total: 90,
        delivered: true
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicol',
        total: 100,
        delivered: false
    }
]

const rta3 = orders.some(item => item.delivered);
console.log('rta3', rta3);