//setTimeout()
//setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois, o callback entra na fila e espera pela Call stack estar vazia

function espera(texto){
  console.log(texto);
}

//setTimeout(espera, 1000, 'Depois de 1s');

//Imediato 
//Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente como argumento. 
setTimeout(() => {
  console.log('Testando')
}, 1000);


//Loops e setTimeout
//Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTImeout dentro do loop, todos eles serão adicionados à web api praticcamente no mesmo tempo. Um evento de seTimeout não espera o tempo do anterior acabar para iniciar

//Essa maneira não daria certo, pois, um setTimeout não espera o outro acabar para iniciar, para corrigir, teria que multiplicar o paramentro de milisegundos pelo contador i
// for(let i = 0; i < 20; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 300);
// } 

for(let i = 0; i < 20; i++){
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
} 

//This e Window
//setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window. 
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event){
  setTimeout(() => {
    this.classList.add('active');
  }, 1000)
}


//setInterval
//setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a aquantidade de tempo passar. 

function loop(texto) {
  console.log(texto);
}

setInterval(loop, 1000, 'Passou 1s');

//Loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000)

//clearInterval
//clearInterval(var), podemos parar um intervalo com o clearInterval, para isso precisamos atribuir o setInterval a uma variável.

const contarAte10 = setInterval(callback, 1000);

let i1 = 0;
function callback(){
  console.log(i1++);
  if(i1 > 10){
    clearInterval(contarAte10);
  }
}