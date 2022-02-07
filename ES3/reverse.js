// Como o próprio none di\, ele simplesmente vai reverter a ordem do array

const a = [1, 2, 3];
const b = a.reverse();

/*
valor de b = [ 3, 2, 1 ]
*/

//Podemos utilizar "reverse" com outros métodos, como por exemplo com o Join

const c = a.reverse().join(':');

/*
valor de c = 1:2:3, e neste caso C trata-se de uma string 
*/
