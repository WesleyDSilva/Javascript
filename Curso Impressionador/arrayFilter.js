const listaNotas = [
  { nome: "Daniel", nota: 5 },
  { nome: "Clecia", nota: 15 },
  { nome: "João", nota: 12 },
  { nome: "Maria", nota: 18 },
  { nome: "Pedro", nota: 10 },
  { nome: "Ana", nota: 19 },
  { nome: "Lucas", nota: 14 },
  { nome: "Mariana", nota: 17 },
  { nome: "Gabriel", nota: 11 },
  { nome: "Juliana", nota: 16 },
  { nome: "Fernando", nota: 9 },
  { nome: "Patrícia", nota: 13 },
  { nome: "Ricardo", nota: 8 },
  { nome: "Isabela", nota: 20 },
  { nome: "Vinícius", nota: 7 },
  { nome: "Laura", nota: 18 },
  { nome: "Thiago", nota: 10 },
  { nome: "Rafaela", nota: 15 },
  { nome: "Gustavo", nota: 6 },
  { nome: "Camila", nota: 14 },
  { nome: "Bruno", nota: 12 },
];

const alunosAprovados = listaNotas.filter(function (aluno) {
  return aluno.nota >= 15;
});

console.log(alunosAprovados);

const listaNomesAlunosAprovados = alunosAprovados.map(function(aluno){
    return aluno.nome;
});

console.log(listaNomesAlunosAprovados);