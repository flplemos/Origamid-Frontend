//outerHTML, innerHTML e innerText
//Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'
const menu = document.querySelector('.menu');

menu.outerHTML; // Todo HTML do elemento
menu.innerHTML; // html interno
menu.innerText; // Texto, sem tagas

menu.innerText = '<p>Texto</p>'; // A tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // A tag é renderizada

//Transversing 
//Como navegar pelo DOM, utilizando suas propriedades e métodos
const lista = document.querySelector('.animais-lista');
lista.parentElement; // Pai
lista.parentElement.parentElement; // Pai do pai
lista.previousElementSibling; // Elemento acima
lista.nextElementSibling; // Elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // Primeiro filho
lista.children[--lista.children.length]; // Último filho
lista.querySelectorAll('li'); // Todas as LI's
lista.querySelector('li:last-child'); // Ultimo filho

//Element vs Node
//Element's representam um elemento HTML, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element). Texto, comentário, quebra de linha e mais. 
lista.firstChild; // Primeiro node child
lista.childNodes; // Todos os node child
// Geralmente estamos atrás de um elemento e não de qualquer node em si. 

//Manipulando Elementos
//É possível mover elementos no dom com métodos de Node. 
// const lista já foi declarada acima.
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // Move lista para o final de contato
// contato.insertBefore(lista, titulo); // Insere a lista antes do título 
// contato.removeChild(titulo); // Remove título de contato.
// contato.replaceChild(lista, titulo); // Substitui titulo por lista. 

//Novos elementos
//Podemos criar novos elementos com o método createElement()
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1)

//Clonar Elementos
//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// Titulo, titulo2 e novo titulo são iguais.

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
//True sinaliza para incluir os filhos

//Exercicios!!!!

//Duplique o menu e adicione ele em copy 
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);

//Selecione o primeiro DT da dl Faq

const faqLista = document.querySelector('.faq-lista');
const primeiroDt = faqLista.querySelector('dt');

//Selecione o DD referente ao primeiro DT
const ddSelecionado = primeiroDt.nextElementSibling;

//Substitua o conteúdo HTML de .faq pelo de .animais

const faq = document.querySelector('.faq')
faq.innerHTML = animais.innerHTML