/*Sort ordena deacuerdo la tabla ASCII */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);
const words = ['révervé', 'premier', 'comuniqué', 'café', 'adieu', "éclair",
    "banana"];
words.sort((a, b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a, b) => b.total - a.total);
console.log(orders);

/*RETO, ordenar fechas con sort*/

const ordersWithDate = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2021, 3, 8, 4),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2021, 9, 12, 3),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2021, 8, 2, 2),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2021, 1, 1, 9, 30),
    },
];

ordersWithDate.sort((a, b) => a.date - b.date);
console.log(ordersWithDate);

ordersWithDate.sort((a, b) => a.date.getTime() - b.date.getTime());
console.log(ordersWithDate);

/*
Para ordenar el objeto por los nombres, se utiliza una función comparativa.


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
 console.log( orders.sort((a,b) => {
    const nameA= a.customerName.toUpperCase();
    const nameB= b.customerName.toUpperCase();
    if(nameA< nameB){
        return -1
    }else if (nameA > nameB) {
        return 1
    } else {
        return 0
    }
 } ) );
 */
console.log(('-').repeat(10));
const meses = ['Febrero', 'Julio', 'Diciembre', 'Enero'];
function monthValue(month) {
    switch (month.toUpperCase()) {
        case 'ENERO':
            return 1;
        case 'FEBRERO':
            return 2;
        case 'MARZO':
            return 3;
        case 'ABRIL':
            return 4;
        case 'MAYO':
            return 5;
        case 'JUNIO':
            return 6;
        case 'JULIO':
            return 7;
        case 'AGOSTO':
            return 8;
        case 'SEPTIEMBRE':
            return 9;
        case 'OCTUBRE':
            return 10;
        case 'NOVIEMBRE':
            return 11;
        case 'DICIEMBRE':
            return 12;
        default:
            return 13;
    }
}
meses.sort((a, b) => monthValue(a) - monthValue(b));
console.log(meses);