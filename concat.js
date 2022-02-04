// Esse metódo irá fazer a concatenação de dois ou mais arrays.

const a = [1, 2, 3, 4, 5]
const b = ['um', 'dois', 'três', 'quatro', 'cinco'];
const c = a.concat(b);

/*
c => [
  1,        2,
  3,        4,
  5,        'um',
  'dois',   'três',
  'quatro', 'cinco'
]
*/

// Posso colocar outro valor que nao necessariamente seja um array

const d = ['Gol', 'Palio', 'Celta'];
const e = ['VW', 'Fiat', 'Chevrolet'];
const f = d.concat(e, 'Todos são carros populares'); 

/*
f = [
    'Gol',
    'Palio',
    'Celta',
    'VW',
    'Fiat',
    'Chevrolet',
    'Todos são carros populares'
]
*/