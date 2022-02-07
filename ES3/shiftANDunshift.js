/*
os métodos unshift e shift, faz basicamente a mesma coisa que pop e push 

porém ao invés de adicionar e remover elementos do final do array, realiza as operações no comeõ 
*/


//o unshif adiciona um ou mais elementos no começo do array, moficando o índice de todos os demais, retornando o novo valor do cumprimento do array 

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.unshift(0); // se eu der concole.log aqui ele irá retornar 10. Novo valor do array
console.log(a); // se eu der um console.log aqui irá retornar o novo valor do array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//---------------------------------------------------------------------------------------------------------

// o método shift, assim como o pop, vai retornar o ítem removido, porém vai remover do começo 
const b = ['a', 'b', 'c', 'd', 'e', 'f'];
b.shift(); //  se eu der um console.log aqui irá retormar 'a', que foi o item que foi removido
console.log(b); // aqui irá retornar o valor do array, ou seja [ 'b', 'c', 'd', 'e', 'f' ] (sem a letra 'a')


//---------------------------------------------------------------------------------------------------------
