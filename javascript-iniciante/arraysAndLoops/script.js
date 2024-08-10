// Array
// É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável. 
var videoGames = ['Switch', 'PS4', 'Xbox'];
videoGames[0]; // Switch
videoGames[2]; // Xbox

//Acesse um elemento da array utilizando [n]

var ultimoItem = videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
// Existem diversos outros métodos, como map, reduce, forEach e mais...

// For Loop
// Fazer algo repetidamente até que uma condição seja atingida. 

for (let numero = 0; numero <= 10; numero++){
    console.log(numero);
}

// While loop
var i = 0;
while (i < 10){
    console.log(i);
    i++;
}

// Arrays e Loops

var videoGames1 = ['Switch', 'PS4', 'Xbox', '3DS'];
for (let i = 0; i < videoGames1.length; i++){
    console.log(videoGames1[i]);
}

// O loop irá parar caso encontre a palavra "break"

var videoGames2 = ['Switch', 'PS4', 'Xbox', '3DS'];
for (let i = 0; i < videoGames2.length; i++){
    console.log(videoGames2[i]);
    if(videoGames2[i] === 'PS4'){
        break;
    }
}

// forEach
// forEach é um método de array que executa uma função para cada item da array. é uma forma mais simples de utilizarmos um loop com arrays (ou array-like). 
var frutas =  ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array)
})
//Podemos passar os seguintes parâmetros item, index e array. 


// Exercicios 
// Crie uma array com os anos que o Brasil ganhou a copa: 
let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com array utilizando um loop para mostrar no console a seguinte mensagem, 'O brasil ganhou a copa de ${ano}

brasilCampeao.forEach(function(ano){
    console.log(`O brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em pera
let frutas1 = ['Banana', 'Maçã', 'Pera', 'Abacaxi', 'Uva'];
for(let i = 0; frutas1.length > 0; i++){
    console.log(frutas1[i])
    if (frutas1[i] === "Pera") {
        break;
    }
}



// Coloque a útlima fruta da array acima em uma váriavel, sem remover o mesmo da array
let ultimaFruta = frutas1[frutas1.length - 1]