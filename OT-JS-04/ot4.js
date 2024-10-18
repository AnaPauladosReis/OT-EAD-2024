//Exercício 1 ✨ Classificação por Idade: Escreva um programa que classifica uma pessoa
//em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e
//    17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a
//    estrutura if/else/else if.

function classificarIdade(idade) {
    if (idade < 13) {
      return 'criança';
    } else if (idade >= 13 && idade <= 17) {
      return 'adolescente';
    } else if (idade >= 18 && idade <= 64) {
      return 'adulto';
    } else {
      return 'idoso';
    }
  }
  
//testes:
console.log(classificarIdade(10)); 
console.log(classificarIdade(15)); 
console.log(classificarIdade(30));
console.log(classificarIdade(70));

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 2 ✨ Jogo de Adivinhação com Switch: Desenvolva um jogo simples de
//adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use
//switch para verificar a escolha e imprimir se acertou ou não.

  function jogoAdivinhacao() {
    let numeroSecreto = Math.floor(Math.random() * 5) + 1;
    let tentativa = parseInt(prompt("Adivinhe um número entre 1 e 5:"));
  
    switch (tentativa) {
      case numeroSecreto:
        alert("Parabéns! Você acertou!");
        break;
      default:
        alert(`Que pena, você errou! O número secreto era ${numeroSecreto}.`);
    }
  }
  
  jogoAdivinhacao();

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 3 ✨ Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
//classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7),
//ou 'Aprovado' (mais de 7). Use switch.
function avaliarNota(nota) {
    switch (true) {
      case nota < 6:
        return 'Reprovado';
      case nota >= 6 && nota <= 7:
        return 'Recuperação';
      case nota > 7 && nota <= 10:  
        return 'Aprovado';
      default:
        return 'Nota inválida';
    }
  }
  
  // Testes:
  console.log(avaliarNota(5));  
  console.log(avaliarNota(6.5)); 
  console.log(avaliarNota(8));  
  console.log(avaliarNota(12));  