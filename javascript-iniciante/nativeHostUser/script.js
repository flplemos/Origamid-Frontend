//Native
//Objetos nativos são aqueles definidos na especificação da linguagem e são implementados indpendente do host.
//Construtores de objetos nativos
Object
String
Array
Function
//Host 
//Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
//Objetos do browser
NodeList
HTMLCollection
Element
//User
//Objetos do user, são objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.
const Pessoa = {
  nome: 'Felps',
}
//API
//Application Programming Interface, é uma interface de software criada para a interação com os outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser. 