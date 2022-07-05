const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
/*FILTRAR PALABRAS QUE SEAN MAYORES O IGUALES A 6 LETRAS*/
const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray: ', newArray);
console.log('original: ', words);

/*______________________________________*/

const rta = words.filter(item => item.length >= 6);
console.log('rta: ', rta);
console.log('original: ', words);

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

const rta3 = orders.filter(item => item.delivered && item.total >= 100);

console.log('rta3: ', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));