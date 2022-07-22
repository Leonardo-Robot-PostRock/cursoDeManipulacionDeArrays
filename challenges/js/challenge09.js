// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//     "Beautiful is better than ugly",
//     "Explicit is better than implicit",
//     "Simple is better than complex",
//     "Complex is better than complicated",
// ]);

// Output

// 20

function solution(lines) {
    return lines.flatMap(line => line.split(' ')).length;
}

console.log(solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]));

/*Solución sin flatMap*/

function solution2(lines) {
    let count = 0;
    lines.map(item => count += item.split(' ').filter(a => a !== '').length);
    return count;
}
console.log(solution2([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]));