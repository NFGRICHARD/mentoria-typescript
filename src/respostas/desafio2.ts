// Como podemos melhorar o esse código usando TS? 

enum Job {
    Atriz,
    Pedreiro,
    cantor
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Job
}

let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Job.cantor
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Job.Pedreiro
};

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Job.Pedreiro
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Pedreiro
}