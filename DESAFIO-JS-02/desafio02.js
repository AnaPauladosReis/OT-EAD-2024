//Desafio 02 ✨ 
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somaDoisNumeros(num1, num2) {
  return num1 + num2;
}
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

// Declare uma variável que receba a invocação da função criada acima,
// passando dois números quaisquer por argumento, e somando `5` ao resultado
// retornado da função.
let resultadoSoma = somaDoisNumeros(3, 7) + 5;
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

// Qual o valor atualizado dessa variável?
// resultadoSoma = 15
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

// Declare uma nova variável, sem valor.
let variavelSemValor;
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊


//Crie uma função que adicione um valor à variável criada acima, e retorne a
//string:
//O valor da variável agora é VALOR.
//Onde VALOR é o novo valor da variável.

function atualizaVariavel(novoValor) {
  variavelSemValor = novoValor;
  return `O valor da variável agora é ${variavelSemValor}`;
}
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

// Invoque a função criada acima.
atualizaVariavel(10);


//O retorno da função é: "O valor da variável agora é 10".
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
`2` ao resultado da multiplicação.
*/
function multiplicaTresNumeros(num1, num2, num3) {
  if (!num1 || !num2 || !num3) {
    return "Preencha todos os valores corretamente!";
  }
  return (num1 * num2 * num3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
let resultadoMultiplicacao1 = multiplicaTresNumeros(2, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o
// valor retornado).
// resultadoMultiplicacao1 = "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os
// três argumentos necessários.
let resultadoMultiplicacao2 = multiplicaTresNumeros(2, 5, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o
// valor retornado).
// resultadoMultiplicacao2 = 32
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o
segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function processaArgumentos(arg1, arg2, arg3) {
  if (arguments.length === 0) {
    return false;
  } else if (arguments.length === 1) {
    return arg1;
  } else if (arguments.length === 2) {
    return arg1 + arg2;
  } else if (arguments.length === 3) {
    return (arg1 + arg2) / arg3;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum
// argumento, com um, com dois e com três.) Coloque um comentário de linha
// ao lado da função com o resultado de cada invocação.
processaArgumentos(); // false
processaArgumentos(10); // 10
processaArgumentos(5, 8); // 13
processaArgumentos(2, 4, 6); // 1
//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊