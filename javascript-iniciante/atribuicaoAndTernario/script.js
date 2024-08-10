let x = 5;
let y = 10;
x += y; //x = x + Y
x -= y; // x = x - y
x *= y; // x = x * y 
x /= y; // x = x / y 
x %= y; // x = x % y
x **=y; // x = x ** y 

// Operador ternário
// Abreviação de condicionais com if e else. 
let idade = 27;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)
//Condição ? true : false
//Geralmente utilizando quando precisamos atribuir um valor para uma variável, dependendo de uma condição.
let idade1 = 27;
let naoPossuiDiabetes = false;
var podeBeber1 = (idade1 >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
// o operador && sempre busca o 'false' essa expressão daria false.
console.log(podeBeber1)

// If abreviado
// Não é necessário abrir e fechar chaves {} quando retornamos apenas uma linha de código. 
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
//Ou
if (possuiFaculdade)
    console.log('Possui faculdade.');
else
    console.log('Não possui faculdade.');


// Exercicio !!!!!!!!!!!!!

//Some 500 ao valor de scroll abaixo. 
//Atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

//Atribua true para a varáivel darCredito,
//caso o cliente possua carro e casa
// e false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito; 

darCredito = (possuiCarro && possuiCasa);

