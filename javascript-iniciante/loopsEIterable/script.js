// Crie 4 li's na página utilizando o for...of; Adicione uma classe a cada li

const lis = document.querySelectorAll('li');

for(const li of lis){
    li.classList.add('ClasseTeste');
}

//Utilize o for...in para listar todas as propriedades e valores do objeto window

for(const propriedade in window){
    console.log(propriedade, window[propriedade])
}