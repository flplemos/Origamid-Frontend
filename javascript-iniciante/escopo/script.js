// Escopo de função
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas. 

function mostrarCarro(){
    var carro = ' Fusca';
    console.log(carro)
}

mostrarCarro(); // Fusca no console.
console.log(carro); // erro, carro  is not defined
//Escopo evita o conflito entre nomes. 

// Variável Global (Erro)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma váriavel que pode acessar em qualquer escopo (global). Isso é um erro. 

//Const
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código. 


//Let
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da váriavel. 
