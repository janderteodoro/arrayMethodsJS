/*
o método de array indexOf, pesquisa por um elemento em um array do início ao fim, 
retornando o íncice do primeiro valor que ele econtrar

caso ele nao encontre nenhum valor, será retornado -1 

o lastIndex of faz basicamente a mesma coisa, porém do final do array para o começo

Ambos não recebem função anônima como parâmetro, apenas um parâmetro que é obrigatório ( elemento a ser pesquisado )
O segundo parâmetro (não obrigatório) é o índice que queremos começar a pesquisa 
Caso ele seja omitido, indexOf começará pelo primeiro elemento e lastIndexof começará pelo último
*/

const a = [0, 1, 2, 1, 0];
const b = a.indexOf(1); // b = 1 ( índice do elemento 1, da esquerda para a direita ) 
const c = a.lastIndexOf(1);// c = 3 ( índice do primeiro elemento 1 encontrado da direita para a esquerda )


// ---------------------------------------------------------------------------------------------------------

// a função a seguir pesquisa um array em busca de um valor especificado e retorna um array com todos os ídices coincidentes

function findAll(array, elementSearch) {

    let results = []; 
    let len = array.length; 
    let pos = 0; 

    while ( pos < len ) {
        pos = array.indexOf( elementSearch , pos ); 
        if ( pos === -1 ) break;
        results.push(pos); 
        pos = pos + 1; 
    }

    return results;

}

const testArray = [0, 1, 2, 1, 2, 1, 2, 34, 4, 5, 6, 5, 6, 5, 9, 6, 5, 6]; 

let mySearch = findAll(testArray, 6); // [ 10, 12, 15, 17 ] todos ídices que foram encontrados 6 
