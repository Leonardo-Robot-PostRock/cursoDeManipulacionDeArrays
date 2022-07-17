const matriz = [
    [1, 2, 3], //0
    [4, 5, 6],
    [7, 8, 9, [10, 11, 12, [86, 99]]]
];

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    console.log(array);
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        // console.log(element);
        newArray.push(element);
    }
}

// console.log('for', newArray);

/*Solución con recursividad*/
function flatten2(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        debugger;
        const element = arr[i];
        console.log('Posicion de matriz', i); 
        if (Array.isArray(element)) {
            flatten2(element, result)
            console.log('Para aplanar', element);
        } else {
            result.push(element);
            console.log('Plano', result); 
        }
    }
    return result;
}
console.log('flatten2', flatten2(matriz));


/*Solución, aplanar matriz multidimencional concat y recursividad*/

function flatten(arr) {
    debugger;
    return arr.reduce((flat, toFlatten) => {
        console.log('Para aplanar', toFlatten);
        console.log('Plano', flat);
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, [])
}

console.log('flatten', flatten(matriz));

const rta = matriz.flat(3);
console.log('flat', rta);