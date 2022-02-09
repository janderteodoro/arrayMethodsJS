/*
 o método map, passa por cada elemento do array que o chama e monta um novo array com os elementos retornados pela sua função
*/

a = [1, 2, 3];
b = a.map((x) => x * x); // b = [1, 4, 9]

// Obs: o map sempre vai retornar um objeto do mesmo tamanho que o array original. 

//------------------------------------

// trablhando com objetos 

const cars = [
    {
        name: 'Gol', 
        color: 'orange', 
        year: 2002, 
        potency: 1.6
    }, 
    {
        name: 'Celta', 
        color: 'Grey', 
        year: 2016, 
        potency: 1.0
    }, 
    {
        name: 'Jetta', 
        color: 'white', 
        year: 2021, 
        potency: 2.0
    }, 
    {
        name: 'Palio', 
        color: 'black', 
        year: 1998, 
        potency: 1.0
    }
]

const fastCars = cars.map(value => {
    if (value.potency >= 1.6) return 'até que corre';
    return 'fraquiiiim'
})

// fastCars = [ 'até que corre', 'fraquiiiim', 'até que corre', 'fraquiiiim' ]
// se nossa intenção eh criar um array com outro tamanho, ou colocamos o "else", mesmo que ele esteja escondido
// ou usamos outro método