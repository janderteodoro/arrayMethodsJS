// Esse método basicamente vair realizar o fatiamento de um array de acordo com a expressão que eu passar como argumento 


const a = [1, 2, 3, 4, 5, 6];
const b = a.slice(0, 3) // b = [ 1, 2, 3 ] ele pegou o índice da posição 0 até a posição 3
const c = a.slice(3); // [ 4, 5, 6 ] quando passo apenas um argumento, ele pega desse elemento até o fim da array
const d = a.slice(-5, -3); // [ 2, 3 ] se quisermos pegar os dados do final do array, podemos trabalhar tambem com números negativos.
