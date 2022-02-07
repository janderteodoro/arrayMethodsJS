/*
o método sort() organiza o array. Quando este método é invocado sem nenhum argumento, ele classifica em ordem alfabética

Para poder fazer isso ele converte os elementos temporariamente em string para se for necessário
*/

const fruits = ['banana', 'cherry', 'apple']; 
const a = fruits.sort();
/*
valor de a = [ 'apple', 'banana', 'cherry' ]

Como dito anteriormente, quando chamamos sem método algum ele automaticamente vai organizar de forma alfabética;
*/

//-----------------------------------------------------------------------------------------------------------------

/*
Caso tenhamos elementos "undefined" dentro do nosso array, eles serão jogados para a posição final.
*/

//-----------------------------------------------------------------------------------------------------------------
/*
Classificando elementos numéricos de um array.

Para orngaizar de uma forma diferente da numérica, precisamos passar uma função de comparação como argumento.
Se o primeiro argumento deve aparecer antes do segundo, essa função deve retornar um número menor que 0.
Se o primeiro argumento deve aparecer após o segundo, nossa função de comparação deve retornar um número maior que 0.
*/

const numbers = [222, 1111, 33, 4];
const n = numbers.sort((a, b) => b - a );
 /*
 Valor de n [ 1111, 222, 33, 4 ]
 */

const m = numbers.sort((a, b) => b -a);
/*
valor de m = [ 1111, 222, 33, 4 ]
*/