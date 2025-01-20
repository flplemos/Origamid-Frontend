//Exercícios 

//Remova o erro 


const priceNumber = (n) => { 
    return +n.replace('R$', '').replace(',', '.')
};
console.log(priceNumber('R$ 99,99'));

//Crie uma IIFE e isole o escopo de qualquer código JS. 
var time = 'Brasil';
(function(){
       //código isolado do escopo global
       var time = 'Sport';
       console.log(time); 
    })();

console.log(time);
//Como podemos utilizar a função abaixo. 
// const active = callback => callback()