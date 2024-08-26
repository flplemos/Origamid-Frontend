//[].forEach()
//Função callback é executada para cada item da array. Ela possui funcção de callback é executada para cada item da array. Ela possui três argumentos, itemAtual(valor do item da array), index (index do valor na array) e array (array original).
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array){
    console.log(item.toUpperCase(), index, array);
});

// com Arrow Function
carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
});
//O método sempre retorna undefined

//Arrow function
const li = document.querySelectorAll('li');

li.forEach((i) => i.classList.add('ativa'));
// li.forEach(function(item){
//     item.classList.add('ativa')
// })

//Modificar a Array original
//O terceiro argumento do callback é uma referêncai direta a se modificado irá também modificar a array original. 
const carros1 = ['Ford', 'Fiat', 'Honda'];
carros1.forEach((item, index, array) => {
    array[index] = 'Carro ' + item;
})
carros1; //['Carro Ford', 'Carro Fiat', 'Carro Honda']
//É melhor utilizarmos o map para isso. 

//[].mao()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
const carros2 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros2.map((item) => {
    return 'Carro ' + item;
})
carros;  //[ "Ford", "Fiat", "Honda" ]
newCarros; //[ "Carro Ford", "Carro Fiat", "Carro Honda" ]

//Valor retornardo 
//Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined. 
const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros3 = carros.map((item) => {
    const novoValor = 'Carro ' + item;
});
newCarros3; //[ undefined, undefined, undefined ]

//Arrow Function e [].map()
//Uma arrow function de linha única e sem chaves irá retoranr o valor após a fat arrow =>
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);
numerosX3; // [ 6, 12, 18, 24, 30, 36, 42 ]

//[].map() vs [].forEach()
//Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim, uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
const numeros1 = [2, 4, 6, 8, 10, 12, 14];
const numerosx3 = numeros1.map(n => n * 3);
numerosx3; // [6, 12, 18, 24, 30, 36, 42];

//[].map() com objetos 
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto. 
const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const tempoAulas = aulas.map(aula => aula.min);

// function nomeAulas(aula){
//     return aula.nome;
// }
//Tanto passando a funcao direto no map, criando fora, ou atribuindo a uma váriavel, da certo.
const nomeAulas = function(aula){
    return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas);

// [].reduce()
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
//Executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior. 
const aulas1 = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
    return acumulador + atual;
});
total1; //65
const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165

// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior. 

//Maior valor com [].reduce()
const numeros2 = [10, 25, 60, 5, 35, 10];
const maiorValor = numeros2.reduce((anterior, atual) =>{
    return anterior < atual ? atual : anterior; 
}); 

//Podemos retornar outros valores com reduce.
const aulas2 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]
const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {})

//[].reduceRight()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita. 
const frutas = ['Banana', 'Pêra', 'Uva'];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // "Uva Pêra Banana"
frutasLeft; // "Banana Pêra Uva" 

//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const frutas1 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
}); //True

function maiorQue100(numero) {
    return numero > 100;
}

const numeros3 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true

//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false. 
const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
//False pois pelo menos uma fruta está vázia '', o que é um valor falsy. 
const arrayCheias = frutas2.every((fruta) => {
    return  fruta; //false
})

const numeros4 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros4.every(x => x > 3); // true

//[].find() e [].findIndex()
//[].find(), retrona o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao incés de retornar o valor, retorna o index deste valor na array. 
const frutas3 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === "Uva";
}); // 2

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros5.find(x => x > 45); // 88

//[].filter()
//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
const frutas4 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas4.filter((frutas) => {
    return frutas;
}) // [ "Banana", "Uva", "Maçã" ]

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaiorr45 = numeros6.filter(x => x > 45); // [ 88, 101 ]

//Filter em objetos 
const aulas3 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]
const maiores15 = aulas.filter((aula) => {
    return aula.min > 15;
})

//Exercícios 
//Selecione cada curso e retorne uma array com objetos contendo o título, descrição, aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const  arrayCursos = Array.from(cursos)

const objetoCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo, descricao, aulas, horas
    }
})

//Retorne uma lista com os números maiores que 100
const numeros7 = [3, 44, 333, 23, 122, 322, 33];
const numeroMaiorQue100 = numeros7.filter((x) => x > 100);

//Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos1 = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const instrumentosBaixo = instrumentos1.some((x) => {
    return x == 'Baixo';
})

//Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
 ]

 const valorTotal = compras.reduce((acumulador, atual) => {
    const precoNumerico = +atual.preco.replace(/[R$ r]+/g, '').replace(',', '.');
    return acumulador + precoNumerico;
}, 0)

