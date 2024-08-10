
//Exercicios

//Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
    console.log(item.classList);
})


//Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
    console.log(item.classList)
})

const primeiroItem = document.querySelector('.menu a')
primeiroItem.classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo)
})

// modifique o href do link externo do menu

const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'https://google.com.br')