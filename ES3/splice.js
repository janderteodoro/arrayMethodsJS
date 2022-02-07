/*
Diferente dos métodos que vimos anteriormente, o splice pode excluir ou adicionar elementos no array original. 
*/

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = a.splice(4); // [ 5, 6, 7, 8 ] como nao passamos o segundo argumento, ele pegou do valor 4 em diante
const c = a.splice(2, 4); // [ 3, 4 ] ele fez o fatiamento do índice 2 até o 4
const d = a.splice(1, 1); // [2]... Não interferimos no array original pois chamamos outra constante para armazenar os dados 

