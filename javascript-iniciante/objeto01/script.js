var pessoa = {
    nome: 'Felps',
    idade: 27,
}

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    }, 
    perimetro(lado) {
        // Funciona da mesma forma; do que usar perimetro(lado) 
        return this.lados * lado;
    },

}

function pi(){
    return console.log(Math.PI)
}

pi();

function aleatorio(){
    return console.log(Math.random())
}

aleatorio();

console.table(quadrado) // Organiza numa tabela visualmente o objeto.


var carro = {};
var pessoa1 = {};

console.log(typeof carro); 

//Dot Notation
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}


menu.backgroundColor = '#000';

menu.color = 'blue'; // Dessa forma adiciona no objeto menu.
menu.esconder = function(){
    console.log('Escondi')
}

var bg = menu.backgroundColor; // "#84E"

// A palavra chave "this" faz referencia ao proprio objeto. 

var height = 120;
var menu = {
    width: 800,
    height: 50,
    metadeHeight(){
        return this.height / 2;
    }
}
menu.metadeHeight(); // 25
// Sem o this, seria 60. 

// Protótipo e herança.
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo. 
var menu1 = {
    width: 800,
}

menu.hasOwnProperty('width') // True Verifica se tem essa propriedade
menu.hasOwnProperty('height') // False 

'Felps'.length; // Verifica a quantidade. 5


// Exercicios!!!!!!!!!!!!!!!
// Crie um objeto com os seus dados pessoais.
var meusDados = {
    nome: 'Felps',
    sobrenome: 'Lemos', 
    time: 'Sport',
    nascimento: 97,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

//Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4, 
    marca: 'Audi',
}
carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latido(pessoa){
       if(pessoa === 'homem'){
        return 'Latir'
       } else {
        return 'Nada'
       }
    }
}


// Tudo é objeto!!
//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos. 

var meuNome = 'Felipe';

meuNome.length; // 6
meuNome.charAt(1); // 'e'
meuNome.replace('ipe', 'ps'); // 'Felps'
meuNome; // 'Felipe
// Uma string herda propriedades e métodos do construtor String()

var altura = 1.7;

altura.toString(); //'1.7'

altura.toFixed(); // '2'
// 1.7.toFixed(); 
// Por um breve momento o número é envolvido em um objeto (coerção), tendo acesso assim as suas propriedades e métodos. 


//DOM

var btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    return window.alert('Clicasse véi')
})

btn.classList
// DOMTokenList [ "btn" ]
// 0: "btn"
// length: 1
// value: "btn"

btn.classList.add('ativo'); // Adiciona classe. 

btn.innerText; //"Clique!"

// Exercicios!!

// Nomeie 3 propriedades ou métodos de strings
meuNome.charAt(1); // 'e'
meuNome.replace('ipe', 'ps');
altura.toString(); //'1.7'

//Nomeie 5 propriedades ou métodos de elementos do DOM
document.querySelector
document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.querySelectorAll