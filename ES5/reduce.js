/*
o reduce tem uma característica diferente de map, forEach. Utilizamos quando queremos reduzir vários valores a um único.

ele tem recebe dois argumentos, sendo uma função (que por sua vez recebe dois argumentos), e o valor inicial para um desses argumentos.

array.reduce(function(elementoAnterior, elementoAtual){
    return elementoAnterior OR elementoAtual
}, 0)

elementoAnterior = neste caso a cada chamada nosso elementoAnterior irá ter um valor. No final, basicamente seu valor que será retornado. 

elementoAtual = seria nada mais nada menos do que o elemento atual do array que estamos trabalhando. 

0 = (não obrigatório) é o valor inicial que eu quero que elementoAnterior inicie nossa chamada
*/


const a = [1, 2, 3, 4, 5]; 
const sum = a.reduce((x, y) => x+y); // soma dos valores
const product = a.reduce(function(x,y) { return x * y}, 1); // produto dos valores
const max = a.reduce((x, y) => x > y ? x : y ) // retorna o maior valor
