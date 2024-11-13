//Exercício 1 ✨ Criar e Acessar um Objeto: Crie um objeto chamado carro com
//propriedades como marca, modelo e ano. Em seguida, acesse e
//imprima a propriedade modelo do objeto.

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023
};

console.log(carro.modelo);

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 2 ✨. Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
//carro criado, adicione uma propriedade cor e modifique o ano do
//carro. Imprima o objeto modificado.

carro.cor = "Prata";
carro.ano = 2022;

console.log(carro); 

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 3 ✨. Criar um Método em um Objeto

const calculadora = {
  soma(num1, num2) {
    return num1 + num2;
  }
};

console.log(calculadora.soma(5, 3));

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 4 ✨. Iterar Sobre as Propriedades de um Objeto

const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};

for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 5 ✨. Entendendo Referências de Objetos

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien"
};

let outroLivro = livro;
outroLivro.titulo = "O Hobbit";

console.log(livro.titulo);

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 6 ✨.  Usando Métodos Avançados de Objeto

console.log(Object.keys(livro)); 
console.log(Object.values(livro));