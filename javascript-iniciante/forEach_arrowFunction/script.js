//forEach
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//     console.log(item);
// });

//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros:
//valorAtual, index e array.

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
    console.log(item); //O item atual no loop
    console.log(index); // O número do index
    console.log(array); // o Array completo.
});

//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transforma-los em uma array:
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
    console.log(item);
}) ;

//Arrow Function
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos. 
const imgs1 = document.querySelectorAll('img');
imgs1.forEach((item) => {
    console.log(item); 
});

// argumento único não precisa de parênteses
imgs1.forEach(item => {
    console.log(item);
});

// Múltiplos argumentos precisam de parênteses. 
imgs1.forEach((item, index) => {
    console.log(item, index);
});

//Sem argumentos precisa dos parênteses, mesmo vazio. 
let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

// Se for apenas uma linha de código pode ser assim:
let c = 0;
// Omitindo o {}
imgs1.forEach((item) => console.log(c++));

// Exercicios!!!

console.log('Exercicios:');
//Mostre no console cada parágrafo do site. 
psTotal = document.querySelectorAll('p');
psTotal.forEach((p) => console.log(p));

//Mostre o texto dos parágrafos no console:
textoDosP = document.querySelectorAll('p');

textoDosP.forEach((p, index) => {
    console.log(p.innerText, index);
})

//Como corrigir os erros abaixo:
const  imgs2 = document.querySelectorAll('img');
imgs2.forEach((item, index) => {
    console.log(item, index);
});

let t = 0; 
imgs2.forEach(() => console.log(t++));

