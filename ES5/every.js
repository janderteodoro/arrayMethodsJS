/*
o método every é predicado de array, ou seja, ele vai aplicar uma função em cada elemento do array. 
Essa função que ele irá aplicar também é um predicado. E então (no caso do every) se todos os elementos do array 
retornarem true para essa função. Ele retorna true como Predicado do Array. 
*/

const a = [1, 2, 3, 4, 5]; 
const b = a.every(value => value < 10); // true 

// -------------------------------------------------------

const c = [11, 2, 3, 4, 5]; 
const d = c.every(value => value < 10) // false

// TODOS valores de dentro do array precisam retornar true no predicado passado para every 

