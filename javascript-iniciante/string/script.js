//String
//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2024);

//str.length
//Propriedade com o total de caracteres da String. 
const comida1 = 'Açaí';
const frase = 'A melhor comida';

comida1.length; // 4
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]//a

//str.charAt(n)
//Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript';
console.log(linguagem.charAt(0));
console.log(linguagem.charAt(2));
console.log(linguagem.charAt(linguagem.length - 1));

//str.concat(str2, str3, ...)
//Concatena as strings e retorna o resultado. 
const frase1 = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';
const fraseCompleta = frase1.concat(linguagem, '!!');

//str.includes(search, position)
//Procura pela string exata dentro de outra string. A procura é case sensitive
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // True
fruta.includes(listaFrutas); // False

//str.endsWith(search) e str.startsWith(search)
//Procura pela string exata dentro de outra string. A procura é case sensitve.
console.log(fruta.endsWith('nana'));
console.log(fruta.startsWith('Ba'));
console.log(fruta.startsWith('na'));

//str.slice(start, end)
//Corta a string de acordo com os valores de start e end. 
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));

console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

//str.substring(start, end)
//Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice
const linguagem2 = 'JavaScript';

console.log(linguagem2.substring(3,5)); 
console.log(linguagem2.substring(0,4)); 
console.log(linguagem2.substring(4)); 
console.log(linguagem2.substring(-3)); 

//str.indexOf(search) e str.lastIndexOf(search)
//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado. 
const instrumento = 'Guitarra';
instrumento.indexOf('r');
instrumento.lastIndexOf('r');
instrumento.indexOf('ta');

//str.padStart(n, str) e str.padEnd(n, str)
//Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento. 
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
    
})

listaPrecos[0].padStart(10, '.');
listaPrecos[0].padEnd(10, '.');

//str.repeat(n)
//Repete a string (n) vezes.
const frase2 = 'Ta'
frase2.repeat(5); //"TaTaTaTaTa" 

//str.replace(regexp|substr.newstr|function)
//Troca paret da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
//Veremos mais sobre Regular Expression

//str.split(padrao)
//Divide a tring de acordo com o padrão passado e retorna uma array
const listaItens1 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens1.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista </div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
//Join é um métodp de array

//str.toLowerCase() e str.toUpperCase()
//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
(sexo1.toLowerCase() === 'feminino'); //True
(sexo2.toLowerCase() === 'feminino'); //True
(sexo3.toLowerCase() === 'feminino'); //True

//str.trim(), str.trimStart(), str.trimEnd()
//Remove espaço em branco do início ou final de uma string. 
const valor = '  R$ 23.00   '
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());

//Exercícios!!
//Utilizando o forEach no array abaixo, some os valores de Taxa e os valores de recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$99'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$49'
    }
]

let totalTaxa = 0
let totalReceb = 0
transacoes.forEach((item) => {
    const valorModi = item.valor.replace(/[R$]+/g, '');
    if(item.descricao.toLowerCase().includes('taxa')){
       totalTaxa += parseInt(valorModi);
    } else {
        totalReceb += parseInt(valorModi);
    }
})
console.log(`O total de taxa foi: ${totalTaxa}`)
console.log(`O total de recebimento foi: ${totalReceb}`)

//Retorne uma array com a lista abaixo:
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')

//Substitua todos os span's por a's
const html5 = `
                <ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
                </ul>`;
const html5Modi = html5.split('span').join('a');


//Retorne o último caracter da frase
const frase5 = 'Melhor do ano!';
const ultimoCaracter = frase5.charAt(frase5.length - 1);
//Retorne o total de taxas
const transacoes5 = ['Taxa do Banco', '   TAXA DO PÃO', '   taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTax = 0
transacoes5.forEach((item) => {
    
    if(item.toLocaleLowerCase().includes('taxa')){
       console.log(item.toLocaleLowerCase().trim())
       totalTax += 1
    }
   
   
})
console.log(totalTax)