/*
    O método Filter vai criar um novo array com base na condição que eu passar 
    temos 3 parâmetros para a função:
    - value: valor do elemento atual do array que está sendo trabalhado (obrigatório)
    - index: índice do elemento atual (não obrigatório)
    - array: O próprio array em si que está sendo iterado (não obrigatório) 
*/


const a = [ 1, 23, 4, 5, 78];
const b = a.filter(myFilter);

function myFilter (value, index, array ) {
    return value > 10;
}

// b [ 23, 78 ]

//-------------------------------------------------------------------------------------


/*
    Podemos utilizar uma função anônima para callback, e normalmente utliziamos assim
*/

const teams = ['Santos', 'Corithans', 'São Paulo', 'Palmeiras'];
const theBestTeam = teams.filter((value) => {
    if (value === 'Santos') return value;
})

/*
    theBestTeam = [ 'Santos' ]
    
    Obs: Perceba que mesmo com apenas um ítem, ele retorna o valor dentro de um array para a constante, 
    ou seja, o método filter retorna um array.
*/