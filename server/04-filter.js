const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
/*FILTRAR PALABRAS QUE SEAN MAYORES O IGUALES A 6 LETRAS DE LONGITUD*/
const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray: ', newArray);
console.log('original: ', words);

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
]

const rta3 = orders.filter(item => item.delivered)

console.log('rta3: ', rta3);