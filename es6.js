const alunos = [
    {nome: "João", nota: 7},
    {nome: "Maria", nota: 4},
    {nome: "Andri", nota: 10},
    {nome: "Lucas", nota: 6},
    {nome: "Ana", nota: 8},
    {nome: "Pedro", nota: 2}
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
