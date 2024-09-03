const alunos =[
    {nome:"João", Nota: 7},
    {nome:"Maria", Nota: 4},
    {nome:"Andri", Nota: 10},
    {nome:"Lucas", Nota: 6},
    {nome:"Ana", Nota: 8},
    {nome:"Pedro", Nota: 2}
]
function filtrarAprovados (alunos){
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados (alunos);
console.log(alunosAprovados);