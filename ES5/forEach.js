// esse método vai basicamente fazer um "for" dentro de cada elemento. 

// somando valores do array
let data = [1, 2, 3, 4, 5, 6]; 
let sum = 0; // começa em 0

data.forEach(value => sum += value) // agora sum = 21

// incrementano cada elemento do array 
data.forEach((value, index, array) => array[index] = value + 1) // data = [ 2, 3, 4, 5, 6, 7 ]


/*
A principal dirença entre forEach e for eh que eu nao consigo para o forEach, o for, utilizamos o break. No forEach nao tem nada equivalente

Para conseguirmos este resultado temos que colocar o forEach dentro de um blobo try
*/

function foreach (a, f, t) {
    try { a.forEach(f, t)}
    catch(e) {
        if (e === foreach.break ) return; 
        throw e;
    }
}

foreach.break = new Error('StopIteration')
