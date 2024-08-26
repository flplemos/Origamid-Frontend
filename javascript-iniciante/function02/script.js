//Function 
//Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos. 
function areaQuadrado(lado) {
    return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4') //nunca vai criar assim

//Propriedades
//Function.length retorna o total de argumentos da função.
//Function.name retorna uma string com o nome da função.
function somar(n1, n2) {
    return n1 + n2;
}

somar.length; // 2 total de argumentos
somar.name; // 'somar' retorna exatamente o nome da função (string)

//function.call()
//function.call(this, arg1, arg2, ...) executa a função. Sendo possível passarmos uma nova referência ao this da mesma. 
const carro = {
    marca: 'Ford',
    ano: 2018
}

function descricaoCarro(velocidade) {
    console.log(this.marca + ' ' + this.ano + velocidade);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call((carro), 300) // Ford 2018

//This
//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call()

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
    console.log(item);
}); //Log de cada Carro

carros.forEach.call(carros, (item) => {
    console.log(item);
}); // Log de cada carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
    console.log(item)
}); // Log de cada fruta


//Exemplo real
//O objeto atribuido a lista será o substituido pelo primeiro argumento de call()
function Dom(seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
};

// const lista = new Dom('ul');
// lista.ativo('ativar');
// console.log(lista);

//O objeto deve ser parecido
//O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this. 
const novoSeletor = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar')

//Array's e Call
//É comum utilizarmo o call() nas funções do protótipo do construtor Array. Assim podemos entender todos os métodos de Array à objetos que se parecem com uma Array (Array like)
Array.prototype.mostreThis = function() {
    console.log(this);
}
const frutas1 = ['Uva', 'Maçã', 'Banana'];
frutas1.mostreThis(); // [ "Uva", "Maçã", "Banana" ]

Array.prototype.pop.call(frutas1); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima. 

//Array-like
//HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
    return item.classList.contains('ativar');
});

filtro; // Retrona os itens que possuem ativo. 