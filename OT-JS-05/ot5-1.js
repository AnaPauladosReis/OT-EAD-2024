//Exercício 1 ✨ Função que Calcula a Área de um Retângulo: Crie uma função que
//calcula a área de um retângulo dado largura e altura.


function calcularAreaRetangulo() {
  let largura = parseFloat(prompt("Digite a largura do retângulo:"));
  let altura = parseFloat(prompt("Digite a altura do retângulo:"));

  let area = largura * altura;

  alert(`A área do retângulo é: ${area}`);
}

calcularAreaRetangulo(); 

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 2 ✨ Função para Verificar Número Par: Faça uma função que recebe um
//número e retorna true se for par e false se for ímpar

function ehPar() {
  let numero = parseInt(prompt("Digite um número:"));

  if (numero % 2 === 0) {
    alert(`${numero} é par.`);
  } else {
    alert(`${numero} é ímpar.`);
  }
}

ehPar(); 

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 3 ✨ Converter Polegadas em Centímetros: Escreva uma função que
//converte polegadas em centímetros

function polegadasParaCentimetros() {
  let polegadas = parseFloat(prompt("Digite a medida em polegadas:"));
  let centimetros = polegadas * 2.54;
  alert(`${polegadas} polegadas equivalem a ${centimetros} centímetros.`);
}

polegadasParaCentimetros();

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 4 ✨ IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC)

function calcularIMC() {
  let peso = parseFloat(prompt("Digite seu peso (em kg):"));
  let altura = parseFloat(prompt("Digite sua altura (em metros):"));

  let imc = peso / (altura * altura);

  alert(`Seu IMC é: ${imc.toFixed(2)}`); 
}

calcularIMC(); 

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 5 ✨ Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
//retorna a mesma string em letras minúsculas.


function paraMinusculas() {
  let texto = prompt("Digite uma frase: ");
  let textoMinusculo = texto.toLowerCase();
  alert(`Texto em minúsculas: ${textoMinusculo}`);
}

paraMinusculas(); 

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 6 ✨ Crie uma arrow function chamada multiplicaPorDez que recebe um
//número como parâmetro e retorna o valor multiplicado por 10.

const multiplicaPorDez = (numero) => numero * 10;

function multiplicar() {
  let numero = parseFloat(prompt("Digite um número: "));
  let resultado = multiplicaPorDez(numero);
  alert(`O resultado da multiplicação por 10 é: ${resultado}`);
}

multiplicar(); 
