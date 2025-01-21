//Escopo 
//Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e tsmbém ao escopo pai. A mesma coisa acontece para funções dentro das funções.

// let item1 = 1;
// function funcao1(){
//     let item2 = 2
//     function funcao2() {
//         let item3  = 3
//         console.log(item1);
//         console.log(item2);
//         console.log(item3);
//     }
//     funcao2()
// }

// funcao1()

// func1, possui acesso à item1 e item2

// func2, possuí acesso à item1, item2 e item3


// Clojures
// A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo da acesso ao item2, esse escopo é chamado de Clojure (funcao1)(escopo de função dentro de função), O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.

// let item1 = 1;
// function funcao1(){
//     let item2 = 2;
//     function funcao2() {
//         let item3  = 3
//         console.log(item1);
//         console.log(item2);
//         console.log(item3);
//     }
//     funcao2();
// }


//Debugging
//É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possui qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.

// debugger; // Adicione a palavra debugger. 
// let item1 = 1;
// function funcao1(){
//     let item2 = 2;
//     function funcao2() {
//         let item3  = 3
//         console.log(item1);
//         console.log(item2);
//         console.log(item3);
//     }
//     funcao2();
// }

// debugger;
// function contagem() {
//     let total = 0;
//     return function incremento(){
//         total++;
//         console.log(total);
//     }
// }
// console.log(contagem)

// const ativarIncrmento = contagem();

// ativarIncrmento();

//Clojures na Real 
//Todas as funções internas da Factory Function possuem uma closure de $$. As mesmas contém uma referência à variável elements declarada dentro do escopo da função
// function $$(selectedElements) {
//     const elements = document.querySelectorAll(selectedElements);
//     function hide(){ ... }
//     function show(){ ... }
//     function on(){ ... }
//     function addClass(){ ... }
//     function removeClass(){ ... }

//     return{hide, show, on, addClass, removeClass}
// }