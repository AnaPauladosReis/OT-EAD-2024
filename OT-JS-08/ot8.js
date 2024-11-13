//Exercício ✨ 1. Criar e Adicionar Valores ao Set

const frutas = new Set();
frutas.add("Maçã");
frutas.add("Banana");
frutas.add("Uva");


frutas.add("Maçã"); // Não vai novamente, pois a maçã já existe

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício ✨ 2. Verificar Valores no Set

console.log(frutas.has("Maçã")); //  true
console.log(frutas.has("Laranja")); //  false

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício ✨ 3. Remover Valores do Set

frutas.delete("Banana");

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício ✨ 4. Limpar o Set

frutas.clear();

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício ✨ 5. Tamanho do Set

const numeros = new Set([1, 2, 3, 4, 2, 1, 5]);
console.log(numeros.size);

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício ✨ 6. Iterar Sobre um Set

for (const fruta of frutas) {
  console.log(fruta);
}

//₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊₊˚ ‿︵‿︵‿︵୨୧ · · ♡ · · ୨୧‿︵‿︵‿︵ ˚₊

//Exercício ✨ 7. Criar um Set a Partir de um Array

const arrayComDuplicatas = [1, 2, 3, 4, 2, 1, 5];
const setSemDuplicatas = new Set(arrayComDuplicatas);
console.log(setSemDuplicatas); 