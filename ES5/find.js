/*
    O método Find vai "pesquisar" por um valor, de acordo com a condição que passamos, e irá retorná-lo. 
    Porém, se tivermos mais valores que se encaixam nessa expressão, após encontrarmos o primeiro, não será "visto", pois o método find retorna o primeiro que encontra e termina a função. 

    temos 3 parâmetros para a função:
    - value: valor do elemento atual do array que está sendo trabalhado (obrigatório)
    - index: índice do elemento atual (não obrigatório)
    - array: O próprio array em si que está sendo iterado (não obrigatório) 
*/

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = a.find(value => value % 2 === 0 ); 

/*
    evenNumber = 2

    Percebe que assim que ele encontra o primeiro elemento do array que é um número par, ou seja, 
    seu resto da divisão por 2 é igual a 0, ele já retorna. 
*/

