
// Como podemos melhorar o esse código usando TS? 

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

/* interface position {
    junior: "junior",
    pleno: "pleno",
    senior: "senior"
} */

enum Trabalho {
    Atriz,
    Padeiro
}

interface Humano {
    nome: string,
    idade: number,
    profissao: Trabalho,
}

const pessoa1: Humano = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.Atriz,
}

const pessoa2: Humano = {
    nome: "Roberto",
    idade: 19,
    profissao: Trabalho.Padeiro,
}

const pessoa3: Humano = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalho.Atriz,
}

const pessoa4: Humano = {
    nome: "Carlos",
    idade: 19,
    profissao: Trabalho.Padeiro,
}