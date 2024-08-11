//Number
//É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos
const ano = 2018;
const preco = new Number(99);
//Number.isNaN() e Number.isInteger();
//isNaN() é um método de Number, oyu seja, não faz parte do protótipo.isInteger() verifica se é uma integral. 
Number.isNaN(NaN); // True
Number.isNaN(4 + 5); // False

Number.isInteger(20); // True
Number.isInteger(23.6); // False

//Number.parseFloat() e Number.parseInt()
//parseFloat() serve para retornarmos um número a partir de uma string. A string deve começar com um número. parseInr recebe também um segundo parâmetro que é o Radix, 10 e para decimal.
parseFloat('99.50'); // Mesma funfção sem o Number
Number.parseFloat('99.50'); // 99.50
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.4343455, 10); //5
Number.parseInt('100 Reais', 10); // 100
//Float possui decimal, Integer não.

//n.toFixed(decimais)
//Arredonda o número com base no total de casas decimais do argumento.
//Sai como string
const preco1 = 2.99;
preco1.toFixed(); // '3'

const preco2 = 1000.455;
preco2.toFixed(2); // '1000.46'

const preco3 = 1499.49;
preco3.toFixed(); // '1499'

//n.toString(radix)
//Transforma o número em uma string com base no radix. Use o 10 para o sistema decimal.
const preco4 = 2.99;
preco4.toString(10); // '2.99'

//n.toLocaleString(lang, options);
//Formata o número de acordo com a língua e opções passadas. 
const preco5 = 59.49;
preco5.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco5.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

//Math
//É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns. 
Math.PI; // 3.14159...
Math.E; //  2.718...
Math.LN10; // 2.303...

//Math.abs(), Math.ceil(). Math.floor() e Math.round()
//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo, ceil() arredonda para cima, retornando sempre uma integral e floor para baixo, round() arredonda para o número integral mais próximo.
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

//Math.max(), Math.min() e Math.random();
//max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.
Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2
Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // Entre 0 e 100
Math.floor(Math.random() * 500); // Entre 0 e 500
//Número random entre 72 e 32 
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
//Math.floor(Math.random() * (max - min + 1)) + min;

//Exercícios!!
//Retorne um número aleatório entre 1050 e 200
// console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

//Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosModi = numeros.split(',');
let maiorNumero = 0;
for(let c = 0; c < numerosModi.length; c++){
    if (maiorNumero < parseInt(numerosModi[c])){
       maiorNumero = parseInt(numerosModi[c]);
    }
}

//Crie uma função para limpar os preços e retornar os números com centavos arredondados, depois retorne a soma total
const listaPrecos = ['R$ 59, 99', ' R$ 100,222', 'R$ 230  ', 'r$ 200'];
let somaTotal = 0;
listaPrecos.forEach((preco) => {
    const valorModi = preco.replace(/[R$ r]+/g, '').replace(',', '.');
    let arredondado = Math.round(valorModi);
    somaTotal = somaTotal + arredondado
    return somaTotal
})
console.log(somaTotal)