// const h1 = document.querySelector('h1');
// console.log(Object.prototype.toString.call(h1));

// console.log(h1.dataset);

//Dataset
//dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento HTML que começarem com data-.

// const div = document.querySelector('div');
// console.log(div.dataset.cor);
// div = document.querySelector('[data-cor]');
// div = document.querySelector('[data-cor="azul"]');

// div.dataset; //DOMStringMap { cor → "azul", width → "500" }
// div.dataset.cor; //azul
// div.dataset.width; // 500
// div.dataset.tempo = 1000; // DOMStringMap(3) { cor → "azul", width → "500", tempo → "1000" }

//Data Atributes
//Os atributos e valore que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM/JS

// const divs = document.querySelectorAll('[data-anima]');
// console.log(divs)
// divs.forEach((div) => {
//     div.classList.add(div.dataset.anima);
// });

//Data vs Class
//A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrtura da tag mais organizada.

//Nomenclatura
//Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear as propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula. 
//<div data-anima-scroll="left">Div 1</div>
//div.dataset.animaScroll
//div.dataset.tempoTotal = 1000
//Na div vira data-tempo-total="1000"
//delete.div.dataset.animaScroll; // remove o atributo

//Exercícios 
//Adicione um atributo data-anime="show-down" e data-anime="show-right" a todas as section's com descrição dos animais. 

//Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab)

//No css faça com que show-down anime de cima para baixo e show-right contine com a mesma animação da esquerda para a direita. 

//Substitua todas as classes js- por data atributes. 