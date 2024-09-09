// Mude a cor da tela para azul e depois para vermelho a cada 2s.


// function mudarClasse(){
//     document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível

// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

tempo.innerHTML = 0
let cronometro; 
let t = 0;

function play() {
    tempo.innerHTML = t++
}

iniciar.addEventListener('click', () => {
    if (!cronometro) { 
        cronometro = setInterval(play, 1000); 
    }
});

pausar.addEventListener('click', () => {
    clearInterval(cronometro);
    cronometro = null;
})

pausar.addEventListener('dblclick', () => {
    t = 0;
    tempo.innerHTML = 0;
})