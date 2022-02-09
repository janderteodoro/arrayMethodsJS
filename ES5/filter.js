/*
o método filter, vai formar um subconjunto de elementos, com elementos do array original 

geralmante ele forma um array menor. por isso ele "filtra" dados do array original 

a função passada para filter, deve ser um predicado, ou seja, deve retornar true ou false (como no map, forEach)
*/


const a = [5, 4, 3, 2, 1];
const smallValues = a.filter(value => value < 3); // vou colocar dentro dos arrays, apenas numeros menores que 3, logo smallValues = [2, 1]
const everyOther = a.filter((value, index) => index % 2 === 0 ) // retorna numeros que estao em índice de numero par

// --------------------------------------------------

/*
Filter vai sempre pula elementos ausentes (ao contrário do map)

vamos ver com objetos 
*/

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

//posso utilizar filter para criar um array com carros deste século 

const newCars = cars.filter(value => value.year > 1999); 

/*
newCars = [
  { name: 'Gol', color: 'orange', year: 2002, potency: 1.6 },
  { name: 'Celta', color: 'Grey', year: 2016, potency: 1 },
  { name: 'Jetta', color: 'white', year: 2021, potency: 2 }
]
*/

// posso utilizar filter para criar um array com carros com potência maior que 1.5 

const fastCars = cars.filter(value => value.potency > 1.5);


/*
fastCars = [
  { name: 'Gol', color: 'orange', year: 2002, potency: 1.6 },
  { name: 'Jetta', color: 'white', year: 2021, potency: 2 }
]
*/
