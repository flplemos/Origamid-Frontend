// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const {backgroundColor, color, margin} = btnStyles

console.log(btnStyles)


//Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

//Corrija o erro abaixo

const cachorro = {
    nome: 'Apolo',
    raca: 'Border Colie',
    cor: 'Branco e laranja',
}

const {nome, raca, cor: apoloCor} = cachorro;