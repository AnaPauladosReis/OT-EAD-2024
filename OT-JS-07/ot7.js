//Exercício 1 ✨  Criar e Adicionar Pares Chave-Valor no Map

const livros = new Map();
livros.set("O Senhor dos Anéis", "J.R.R. Tolkien");
livros.set("Harry Potter e a Pedra Filosofal", "J.K. Rowling");
livros.set("1984", "George Orwell");

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 2 ✨. Acessar Valor no Map

console.log(livros.get("O Senhor dos Anéis")); // Imprime "J.R.R. Tolkien"

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 3 ✨. Iterar Sobre um Map

for (const [titulo, autor] of livros) {
  console.log(`Título: ${titulo}, Autor: ${autor}`);
}

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 4 ✨. Usando Métodos do Map: size, delete, has

console.log(livros.size); // Imprime 3 (número de livros)

livros.delete("Harry Potter e a Pedra Filosofal");

console.log(livros.has("1984")); // Imprime true
console.log(livros.has("Harry Potter e a Pedra Filosofal")); // Imprime false

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício 5 ✨. Map com Tipos de Chaves Diferentes

const colecao = new Map();
colecao.set("nome", "João");
colecao.set(123, "Número");
colecao.set({ chave: "objeto" }, "Objeto");

console.log(colecao);