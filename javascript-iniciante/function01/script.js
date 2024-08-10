// function areaQuadrado(lado) {
//     return lado * lado;
// }

// console.log(areaQuadrado(2));

// function pi() {
//     return 3.14;
// }  

// var total = 5 * pi(); //

// console.log(pi());

// function imc(peso, altura) {
//     var imc = peso / (altura * altura);
//     return imc
// }

// console.log(imc(60, 1.7));

// function corFavorita(cor) {
//     if(cor === 'azul') {
//         return 'é azul'
//     } else if  (cor === 'verde'){
//         return 'Its time'
//     } else {
//         return 'Eu não gosto de cores'
//     }
// }


// addEventListener('click', function(){
//     console.log('Oi');
// });

// function imc2 (peso, altura) {
//     const imc = peso / (altura ** 2);
//     console.log(imc);
// }

// imc(80, 1.8);
// console.log(imc2(80, 180));


// function terceiraIdade(idade) {
//     console.log(typeof idade)
//     if (typeof idade !== 'number'){
//         return 'Por favor preencha um número'
//     } else if (idade >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(terceiraIdade('oi'));



// function paisesFaltaVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Falta visitar ${totalPaises - paisesVisitados} países`;
// }

// console.log(paisesFaltaVisitar(30));

// var profissao = 'Designer';

// function dados() {
//     var nome = 'Felps';
//     var idade = 27;
//     function outrosDados() {
//         var endereco = 'Natal';
//         var idade = 28;
//         return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//     }
//     return outrosDados();
// }

// console.log(dados());
// outrosDados();


function truthy(element){
    return !!element
}
console.log(truthy(null))

function perimetro(lado){
    return lado * 4;
}

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
   
}

console.log(nomeCompleto('Felipe','Lemos'))

function numeroPar(numero){
    if ((numero % 2) !== 0) {
        console.log('Não é par');
    } else {
        console.log("É par");
    }
}

function tipo(e){
    return (typeof e);
}

addEventListener('scroll', () => {
    console.log('Felps Lemos');
})
