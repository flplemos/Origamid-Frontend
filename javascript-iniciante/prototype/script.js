//Prototype
//A propriedade protoype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}
const felps = new Pessoa('Felps', 27);
console.log(Pessoa.prototype); // Retorna o objeto
console.log(felps.prototype); // Undefined

//funcao.prototype 
//É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function(){
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); //Retorna o objeto

//Acesso ao Protótipo 
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade e funções apenas
const joao = new Pessoa('João', 28);
joao.nome;
joao.idade;
joao.andar();
joao.nadar();

//Construtores Nativos
//Objetos, Funções, Números, Strings, e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades, e métodos, que poderão ser acessadas pelo tipo de dado. 
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R
String.prototype;

//É possível acessar a função do protótipo
//É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array. 
const lista = document.querySelectorAll('li');
//Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
//Existe o método Array.from()

//Método do Objeto vs Protótipo 
//Nos Objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo. 
Array.prototype.slice.call(lista);
Array.from(lista);

//Retorna uma lista com os métodos / propriedades
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));
//dado.constructor.name, retorna o nome do construtor

//Entenda o que está sendo retornado 
//Os métodos e propriedades acessado com o . são referentes ao tipo de dado que é retornado antes desse .
const Carro = {
    marca: 'Ford',
    preco: 2009,
    acelerar() {
      return true;
    }
}
Carro // Object 
Carro.marca // String
Carro.preco // Number
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0)// String
//Verifique o nome do construtor com .constructor.name

//Exercícios!!
//Cria uma função construtora de pessoas, deve conter nome, sobrenome e idade, crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa1(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoa1.prototype.nomeCompleto = function(){
  return this.nome + " " + this.sobrenome;
}

const felps1 = new Pessoa1('Felps', 'Lemos', 27);

//Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
//usa o .prototype

//Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();
//Usa o .constructor.name

//Qual o construtor do dado abaixo
li.hidden.consstructor.name;
