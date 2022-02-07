/*
Esse método basicamente irá juntar os dados dentro de uma string, de acordo com o parâmetro que eu lhe passar.
Se eu passar uma vírgula, ele irá juntar os ítems, separando com vírgula;
*/

const a = [1, 2, 3];
const b = a.join(',');

/*
const b = 1,2,3 

Vale lembrar que b é um STRING
*/

//---------------------------------------------------------------

/*
Também posso criar um array vazio e preencher ele com join (na verdade iremos serparar os elementos que ainda nao criamos nele)
 */

const c = new Array(10);
const d = c.join('-');

/*
valor de d = ---------

note que para separar um array de 10 elementos, precisamos de 9 separadores, no caso o hífem. 
*/