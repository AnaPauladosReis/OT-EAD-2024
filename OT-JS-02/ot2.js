let animal = ["gato", "cachorro", "pássaro", "peixe", "hamster"];

//.push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
animal.push("coelho");
animal.push("porco");
animal.push("vaca");
console.log(animal);

//.shift remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
animal.shift();
console.log(animal);

//.unshift adiciona um ou mais elementos no início de um array e retorna o novo comprimento desse array.
animal.unshift("pato", "galinha");
console.log(animal);

animal[1] = "girafa";
console.log(animal);

let frutas = ["banana", "maçã", "laranja", "uva", "melancia"];
console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


