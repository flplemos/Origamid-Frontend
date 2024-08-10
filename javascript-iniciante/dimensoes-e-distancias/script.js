//Height e Width
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.
const section = document.querySelector('.animais-lista');
console.log(section.clientHeight); // Height + padding
console.log(section.offsetHeight); // Height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro do scroll
// Mesma coisa para o width. clientWidth ....

//offsetTop e offsetLeft
//Distância entre o topo do elemento e o topo da página.
console.log(section.offsetTop);
//Distância entre o canto esquerdo do elemento e o canto esquerdo da página.
console.log(section.offsetLeft);

//getBoundingClientReact()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const primeiroh2 = document.querySelector('h2');
const rect = primeiroh2.getBoundingClientRect();
console.log(rect.height); // Height do elemento
console.log(rect.width); // Width do elemento
console.log(rect.top); // Distância entre o topo do elemento e o scroll

//Window
window.innerWidth; // Width da janela.
window.outerWidth; // Soma dev tools também
window.innerHeight; // Height da janela
window.outerWidth; // Soma a barra de endereço

window.pageYOffset; // Distância total do scroll horizontal.
window.pageXOffset; // Distância total do scroll vertical. 

if(window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}

// matchMedia();
// Utilize um media-querie como no CSS para verificar a largura do browser.
const small = window.matchMedia('(max-width: 600px)');
if(small.matches){
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}

//Selecione o elemento no inspetor (dom)

//Abra o console e digite $0 para selecionar o mesmo

//Os elementos selecionados anteriormente são $1, $2

//Exercicios
//Verifique a distância da primeira imagem em relação ao topo da página.

const img = document.querySelector('img');
console.log(img.offsetTop);

//Retorne a soma da largura de todas as imagens.
function somaImagens(){
  const imgs = document.querySelectorAll('img');
  let soma = 0
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma)
}

window.onload = function(){
  somaImagens();
}

//Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const linksDaPagina = document.querySelectorAll('a');

linksDaPagina.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    return console.log(link, 'Possui acessibilidade')
  } else {
    return console.log(link, 'Não possui boa acessibilidade')
  }
})

//Se o browser for menor que 720px, adicione a classe menu-mobile ao menu. 

const menu = document.querySelector('.menu');
if (window.innerWidth < 720) {
    menu.classList.add('menu-mobile');
}


//Outra forma de responder o exercicio anterior
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall){
  menu.classList.add('menu-mobile1');
}
console.log(menu.classList);