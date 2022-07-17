const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

/*En este caso newArray copia la referencia en memoria de elements. Por lo cual, si se modifica a newArray también se modifica a elements */
/*La solución para no copiar la referencia es usar spread operator*/
const newArray = [...elements];
for (let i = 0; i < othersElements.length; i++) {
    const element = othersElements[i];
    newArray.push(element)
}
console.log('for', newArray);

const rta = elements.concat(othersElements)
console.log('concat', rta);

const rta2 = [...elements, ...othersElements]
console.log('...', rta2);

const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

/*Para cambiar el array original*/ 
elements.push(...othersElements);
console.log('elements', elements);