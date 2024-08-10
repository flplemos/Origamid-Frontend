//Objetos
//Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas carcaterísticas do anterior?

// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

//Constructor Functions
//Para isso existem as Constructor Functions, ou seja, Funções construtoras, que são responsáveis por construir novos objetos sempre que chamamos a mesma. 
// function Carro(){
//   this.marca = 'Marca';
//   this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 4000;
// const fiat = new Carro();
// fiat.marca = 'Fiat';
// fiat.preco = 3000;
//Usar Pascal Case

//new Keyword
//A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela. 
// const honda = new Carro();
// 1 Cria um novo objeto 
// honda = {};
// 2 Define o protótipo 
// honda.prototype = Carro.prototype;
// 3 Aponta a variável this para o objeto
// this = honda; 
// 4 Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;
//5 Retorna o novo objeto 
// return honda = {
//     marca: 'Marca',
//     preco: 0,
// }

//Paramêtros e Argumentos
//Podemos passar argumentos que serão utilizados no momento da criação do objeto. 
// function Carro(marcaAtribuida, precoAtribuido) {
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', 4000);
// const fiat = new Carro('Fiat', 3000)

//this Keyword
// O this faz referência ao próprio objeto construído com a Constructor Function
// function Carro(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
//   console.log(this);
// }
// const honda = new Carro('Honda', 2000)
//variáveis dentro do Constructor estarão protegidas. 

//Exemplo Real 
//Quando mudamos a propriedade seletor, o oobjeto Dom irá passar a selecionar o novo seletor em seus métodos
// const Dom = {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }
// Dom.ativo(); 
// Dom.seletor = 'ul';
// Dom.ativo(); 

// function Dom(seletor){

//   this.element = function(){
//     return document.querySelector(seletor);
//   }
//   this.ativo = function(classe){
//     this.element().classList.add(classe);
//   }
// }

// const li = new Dom('li')

//Exercícios 
//Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(nome + ' andou');
  }
}

const felps = new Pessoa('Felps', 27);




//Crie uma constructor function (Dom) para manipulação de listas de elementos do DOM. Deve conter as seguintes propriedades e métodos:

//elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element){
  this.element = function(){
    return document.querySelectorAll(element);
  }
  this.addClass = function(classe){
    this.element().forEach((item) => {
        item.classList.add(classe);
        return classe;
    })
  }
  this.removeClass = function(remover){
    this.element().forEach((item) => {
       item.classList.remove(remover)
    })
  }
}
const li = new Dom('li');
