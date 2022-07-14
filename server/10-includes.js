const pets = ['cat', 'dog', 'bat'];

includeArray = false;
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'dog') {
        includeArray = true;
        break;
    }
}
console.log('for', includeArray);
const rta = pets.includes('dog')
console.log('includes', rta);