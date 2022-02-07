/*
Esses dois métodos: pop() e push() permite que utlizamos o array como pilha de dados.

Push: Anexa um ou mais elementos no final do nosso array, retornando o valor do cumprimento do array 

Pop: é o Inverso do push. Remove o último elemento do array e retorna o valor do cumprimento do mesmo.
*/

const a = []; // cria um array vazio 
a.push(1, 2); // adiciona esses dois elementos dentro do array | a = [1, 2]
a.pop(); // excluo o útimo elemento do array. | a = [ 1 ]
a.push(['Barcelona', 'Real Madrid']); // [ 1, [ 'Barcelona', 'Real Madrid' ] ] Posso colocar outro array dentro do mesmo sem problema algum
a.pop(); // O último elemento do array eh outro array entao, ele exclui o array por completo. Voltando a = [ 1 ]
