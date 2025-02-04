//Destructuring
// Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis

const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
    
}

const {marca, ano} = carro;

console.log(marca); // Fiat
console.log(ano); // 2018

//Destructuring Objects 
//A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos 

// const cliente = {
//     nome: 'Felipe',
//     compras: {
//         digitais: {
//             livros: ['Livro 1', 'Livro 2'],
//             videos: ['Video JS', 'Video HTML']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {livros, videos} = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

//Nesting
//É possível aninhar uma desestruturação dentro de outra. 

const cliente1 = {
    nome: 'Felipe',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

const {digitais, fisicas, digitais: {livros, videos}} = cliente1.compras;


console.log(livros);

//Nome das variáveis 
//É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

// const cliente2 = {
//     nome: 'Felipe',
//     compras: 10,
// }

// const {nome, compras} = cliente2;
// //ou
// const {nome: nomeCliente, compras: comprasCliente} = cliente2;

// Valor inicial
//Caso a propriedade não exista o valor padrão dela será undefined. É possível modificar este valor no momento da desestruturação.

const cliente3 = {
    nome: 'Felipe',
    compras: 10,
}

const {nome, compras, email = 'flplemos@outlook.com', cpf} = cliente3;
console.log(email) //flplemos@outlook.com
console.log(cpf) //Undefined

// Destructuring Arrays
//Para desestruturar  array's você deve colocar as variáveis entre [] colchetes. 

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas; 

//Declaração de variáveis 
//A desestruturação pode servir para declararmos uma sequência de variáveis. 
const primeiro = 'Item 1';
const segundo = 'Item 2';
const terceiro = 'Item 3';
// Ou
const [primeiro1, segundo2, terceiro3] = ['Item 1', 'Item 2', 'Item 3'];

//Argumento Desestruturado 
//Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração

function handleKeyboard(event) {
    console.log(event.key)
}
// Com Destructuring
function handleKeyboard1({key, keyCode}){
    console.log(key);
    console.log(keyCode);
}
document.addEventListener('keyup', handleKeyboard)
document.addEventListener('keyup', handleKeyboard1)