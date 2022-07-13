const randomList = [];
for (let i = 0; i <= 20; i++) {
    randomList.push(Math.floor(Math.random() * 11));
}
console.log(randomList);

const rta = randomList.reduce((acc, num) => {
    if (num >= 1 && num <= 5) {
        acc['1-5'] += 1;
    } else if (num >= 6 && num <= 8) {
        acc['6-8'] += 1;
    } else if (num >= 9 && num <= 10) {
        acc['9-10'] += 1;
    }
    return acc;
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
})

console.log(rta);