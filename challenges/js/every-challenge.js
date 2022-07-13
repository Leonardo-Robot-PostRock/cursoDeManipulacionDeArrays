/*Excluye a los equipos con integranes mayores o igual a 15 años*/
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    }
]

function solution(array) {
    const rta = array
        .map(item => item.age)
        .every(age => age < 15)
    return rta === true ? "team admitido" : "Hay un juegador de 15 años o más, team no admitido"

}

console.log(solution(team));