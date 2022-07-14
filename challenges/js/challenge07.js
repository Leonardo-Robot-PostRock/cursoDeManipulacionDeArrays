// Tu desafio es crear un buscador usando funciones como filter y
// includes, vas a tener array con palabras e tienes que retomar un array
// con solo las que cumplan con la condicién de tener el parametro de busqueda
// La solucién deberia tener un input y output como los siguientes:
// solution([“ana”, "santi”, "nico”, "anastasia"], "an"); 
// solution([“ana”, "santi”, "nico”, "anastasia”], "xyz"); 
// Output
// [“ana”, "santi", "anastasia"]
// []
function solution(words, query) {
    const rta = words.filter(item => item.includes(query));
    return rta;
}