const Animal = function (nome) {
  this.nome = nome;
};

const Cachorro = function (nome, raça) {
  Animal.call(this, nome);
  this.raça = raça;
};

const Gato = function (nome, raça) {
  Animal.call(this, nome);
  this.raça = raça;
};

const animal = new Animal("Leão");
const cachorro = new Cachorro("thresh", "Salsicha");
const gato = new Gato("cheddar", "Gato Vira-lata");

console.log(animal);
console.log(cachorro);
console.log(gato);
