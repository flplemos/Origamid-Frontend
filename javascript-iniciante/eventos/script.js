// addEventListener 
//Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento. 
// const img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
// img.addEventListener('click', function(){
//     console.log('Clicou');
// })
//O terceiro parâmetro é opcional. 

//Calback
// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima. 
// function callback(){
//     console.log('Clicou');
// }
// img.addEventListener('click', callback); // 🚀
// img.addEventListener('click', callback()); // Undefined
// img.addEventListener('click', function(){
//     console.log('Clicou');
// })
// img.addEventListener('click', () => {
//     console.log('Clicou');
// })

// Event 
// O primeiro parâmetro do callback é referente ao evento que ocorreu
// function callback(event){
//     console.log(event);
// }
// img.addEventListener('click', callback)
//Geralmente utilizam "e" como nome do parâmetro. 

//Propriedades do Event
// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event){
//     const currentTarget = event.currentTarget; // This
//     const target = event.target; // Onde o clique ocorreu
//     const type = event.type; // tipo de evento
//     const path = event.path;
//     console.log(currentTarget, target, type, path);
// }
// animaisLista.addEventListener('click', executarCallback);

// event.preventDefault()
// Previne o comportamento padrão do evento no browser. No caso de um link externo. por exemplo, irá previnir que o link seja ativado. 
// const linkExterno = document.querySelector('a[href^="http"]');
// function clickNoLink(event){
//     event.preventDefault();
//     console.log(event.currentTarget.href);
   
// }
// linkExterno.addEventListener('click', clickNoLink)

//this
// A palavra chave this é uma palavra especial de JavaScript, que pode fazer referêncai a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento que addEventListener foi adicionado. 
// function callback1(event){
//     console.log(this); // Retorna a imagem
//     console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback1)

// Diferentes Eventos
// Existem diversos eventos como: click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também 

// const h1 = document.querySelector('h1');
// function callback(event){
//     console.log(event.type, event);
// }
// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);

//Keyboard
//Você pode adicionar atalhos para facilitar a navegação no seu site. através de eventos do keyboard.
// function handleKeyboard(event){
//     if(event.key === 'a')
//         document.body.classList.toggle('azul');
//     else if(event.key === 'v') {
//         document.body.classList.toggle('vermelho');
//     }
// }
// window.addEventListener('keydown', handleKeyboard);

 //forEach e Eventos
 // O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles:
// const imgs = document.querySelectorAll('img');

// function imgSrc(event){
//     const src = event.currentTarget.getAttribute('src');
//     console.log(src);
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', imgSrc);
// });

 //Exercicios!! 
 //Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links:
 const linkInternos = document.querySelectorAll('a[href^="#"');

 function clickInterno(event){
    event.preventDefault();
    linkInternos.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo');
   
    
 }

 linkInternos.forEach((link) => {
    link.addEventListener('click', clickInterno)
   
 })

// Selecione todos os elementos do site começando a partir do body ao clique mostre exatamete quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')

function localizacao(element){
      element.target.remove();
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', localizacao);

})


//

function handleKeyboard(event){
        if(event.key === 't') {
           document.body.style.fontSize = '100px';
        }
       
    }
window.addEventListener('keydown', handleKeyboard);
