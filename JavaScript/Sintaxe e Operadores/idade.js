/* function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carla",
    idade: 25,
};

const pessoa3 = {
    nome: "Diego",
    idade: 18,
};

const animal1 = {
    nome: "Bob",
    idade: 3,
};

console.log(calculaIdade.apply(pessoa2, [5])); */

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carla",
    idade: 25,
};

const pessoa3 = {
    nome: "Diego",
    idade: 18,
};

const animal1 = {
    nome: "Bob",
    idade: 3,
};

// -- .call é número aberto, .apply é com [] --//
console.log(calculaIdade.call(pessoa2, 5));