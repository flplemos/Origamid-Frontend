//Document object model
// É uma interface que representa documentos HTML e XMKL através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos. 
console.log(window);
//Window é o objeto global do browser
//Possuí diferentes métodos e propriedades. 
window.innerHeight;
// Ao inspecionar elemento, você visualiza a representação oficial do DOM.
const href = window.location.href;
//Verica qual página atual
console.log(href);

if(href === 'http://127.0.0.1:5500/javascript-iniciante/DOM/') {
    console.log('é igual');
}//True


//Window e Document
//São objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedase. 
window.alert('Isso é um alerta');
alert('Isso é um alerta')// funciona

const h1Selecionado = document.querySelector('h1');
document.body; // Retorna o body

//Window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.


// Node 
// Toda tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node. 
const titulo = document.querySelector('h1');
titulo.innerText; // Retorna o texto.
titulo.classList; // Retorna as classes; 
titulo.id; // Retorna o ID;
titulo.offsetHeight; // Retorna a altura do elemento; 

//titulo.addEventListener('click', callback);
//Ativa a função callback ao click no título

// h1Selecionado.addEventListener('click', () => {
//     console.log('Clicou ein', h1Selecionado.innerText)
// })

function callbackh1(){
    console.log('Clicou em ', h1Selecionado.innerText);
}
h1Selecionado.addEventListener('click', callbackh1);

//Exercicios
// Retorne a url atual utilizando o objeto window
const hrefPagina = window.location.href;

//Seleciona o primeiro elemento da página que possua o classe ativo
const elementoAtivo = document.querySelector('.ativo');

//Retorna a linguagem do navegador
window.navigator.language;

//Retorna a largura da janela
window.innerWidth;


