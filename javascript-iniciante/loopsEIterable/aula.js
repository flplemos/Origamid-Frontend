// Iterable 
// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros. 

// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript'

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(({headers}) => console.log(headers));

//for...of
//É possível fazermos um loop para cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.

const frutas1 = ['Banana', 'Morango', 'Uva'];
const frase1 = 'Isso é JavaScript'

for(const fruta of frutas1) {
    console.log(fruta);
}

for(const char of frase1){
    console.log(char);
}

//Spread e for...of
//Com o for loop podemos manipular cada um dos elementos do objeto iterável. 

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
    btn.style.background = 'blue';
}

console.log(...buttons);

//for...in
//Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

const carro = {
    marca: 'Honda', 
    ano: 2018,
}

for (const propriedade in carro){
    console.log(propriedade, carro[propriedade]);
}

// Do / While
// Outro tipo de loop é o Do / While. Não é muito utilizado
// let i = 0
// do {
//     console.log(i++);
// } while (i <= 5);