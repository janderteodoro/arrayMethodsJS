/*
Ele funciona exatamente como o reduce. a única diferença é que ele processa o array, da direita para a esqurda. 
*/

//vamos calcular 2^(3^4)
const a = [2, 3, 4]; 

const res = a.reduceRight((acc, value) => Math.pow(acc, value));
