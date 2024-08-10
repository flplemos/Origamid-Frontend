//classList
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém. 
//const menu = document.querySelector('.menu');

menu.className; // String
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // Duas classes 
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // Adiciona / remove a classe.
menu.classList.contains('ativo'); //True ou False
menu.classList.replace('ativo', 'inativo');


//attributes
//Retorna uma array-like com os atributos do elemento.
const animais = document.querySelector('.animais');
animais.attributes; // Retorna todos os atributos.
animais.attributes[0]; // Retorna o primeiro atributo. 

//getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado. 
const img = document.querySelector('img');

img.getAttribute('src'); // Valor do src
img.setAttribute('alt', 'Texto Alternativo'); //Muda o alt
img.hasAttribute('id'); //True / false
img.removeAttribute('alt'); // Remove alt

img.hasAttributes(); //true/ false se tem algum atributo. 
