//Regular Expression
//Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split()

//Procura: J
const padraoRegexp = /J/;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'B')
//ou texto.replace(/J/, 'B')

//BavaScript

//Literal
//Utiliza um caracter literal irá realizar uma busca específica deste caracter. 
//Procura: J seguido de a, v, e a
const regexp1 = /Java/;

'JavaScript'.replace(regexp1, 'Type');
//TypeScript


//Flag:g
//As flags irão modificar como a expressão é interpreta. Uma das mais utilizadas é a 'g', que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

//Procura: Todo a
const regexp2 = /a/g;
console.log('JavaScript'.replace(regexp2, 'i'));
//JiviScript

//Flag:i
//Com o 'i' informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

//Procura: Todo PE, Pe, pE e pe
const regexp3 = /Pe/gi;

console.log('Perdeu perdido'.replace(regexp3, 'Ba'))
//Bardeu Bardido

//Character Class
//Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b. 

//Procura: Todo a, A, i, I
const regexp4 = /[ai]/gi
console.log('JavaScript'.replace(regexp4, 'u'));
//JuvuScrupt

//Character Class e Especiais
//Podemos utilizar caracteres que não são alfanuméricos dentro da classe. mas fique atento, pois, existem diversos casos especiais para os mesmos. 

//Procura: - ou .
const regexp5 = /[-.]/g;

'708.664.824-82'.replace(regexp5, '')
//"70866482482"

//Um ou Outro
//Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

//Procura: B, seguido de r, a, seguido de s ou z, seguido de i,l
const regexp6 = /Bra[sz]il/g;

'Brasil é com z: Brazil'.replace(regexp6, 'Prazer');
//"Prazer é com z: Prazer"

//De A à Z
//O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir caracteres dentro do alcance. 

//Busca por itens de A à Z
const regexp7 = /[a-z]/g;
'JavaScript é a linguagem.'.replace(regexp7, '0');
//"J000S00000 é 0 000000000."

//Busca por itens de a à z e A à Z
const regexp8 = /[a-zA-Z]/g;

//Negar
//Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
//Procura: tudo que não estiver entre a e z
const regexp9 = /[^a-z]/g;

'Brasil é com z: Brazil'.replace(regexp9, ' ');
//" rasil   com z   razil"

//Ponto 
//O ponto '.' irá selecionar qualquer caracter, menos quebras de linha.

//Procura: todos os caracteres menos quebra de linha
const regexp10 = /./g;

'JavaScript é a linguagem.'.replace(regexp10, '0');
//"0000000000000000000000000" 

//Escapar Especiais 
//Caracteres especiais como o ponto '.', podem ser escapados utilizando a barra \. assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

//Procura: todos os pontos
const regexp11 = /\./g;
const regexpAlternativa = /[.]/g;

'708.664.824.82'.replace(regexp11, '-');
//"708-664-824-82" 

//Word
//O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

//Procura: Todos os alfanuméricos
const alfanumericos = /\w/g;
'Guada-chuva R$ 23,00'.replace(alfanumericos, '-')
//"----------- -$ --,--" 

//Quantificador 
//É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completae não caracter por caracter. 

//Quantificador Min e Max
//Podemos informar o mine o max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.

//Mais +
//O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências. 
//Procuro: digitos em ocorrência de um ou mais
const regexp12 = /\d+/g;
'222.333.222.42'.replace(regexp12,'X');
//"X.X.X.X"

//Opcional ?
//O sinal ? significa que o caracter é opcional, pode ou não existir
//Procuro: Por regex com p opcional
const regex = /regexp?/g;
'Qual é o certo, regexp ou regex?'.replace(regex, 'Regular Expression')
//"Qual é o certo, Regular Expression ou Regular Expression?"

//Alternado | 
//O sinal | irá selecionar um ou outro. java|php
//Procura: java ou php (case insensitive)
const regexp13 = /java|php/gi

'PHP e Java são linguagens diferentes'.replace(regexp13, 'X');
//"X e X são linguagens diferentes"

//Word Boundary \b
//O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres. 

// Not Word Boundary \B
//É o contrário do \b
const regexDigito = /\B\d+\B/gi;
'11_22 33-44 55é66 77e88'.replace(regexDigito, 'X');
//"1X_X2 33-44 55é66 7XeX8" 