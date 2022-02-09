/**
 o some, assim como o every, eh um predicado de array, ou seja, ele vai retornar true ou false

 Porém, ao contrario do every que necessita que TODOS elementos do array retornerm true para a sua função 
 de predicadp, o some retorna true, se APENAS UM dos elementos, for true. 

 Ou seja, com um caso (ou mais) ele retornará
 */

 const a = [1, 2, 3, 4, 5];
 const b = a.some(value => value < 10); // como no every, retornou true, mas veja o caso a seguir....

// --------------------------------------------------------

const c = [11, 2, 3, 4, 5];
const d = c.some(value =>  value < 10);

 console.log(d);