/*
1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
cálculo).
2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
*/

function media(num1, num2, num3, num4) {
  const media = (num1 + num2 + num3) / 3;
  const mediaf = (media + num4) / 2;
  console.log(`a média desse aluno é ${mediaf}`);
}
media(5, 5, 5, 9);

/*
3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
tela o texto:
a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32
*/

function converteTemp(temp) {
  return (9 / 5) * temp + 32;
}
const tempF = converteTemp(40);
console.log(`a temperatura correspondente em Farenheit é de ${tempF}ºF`);

/*
4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
etiqueta e registre na tela a frase:
O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).
*/

function valorComImposto(preco) {
  const tax = 0.08875;
  return preco * 0.08875 + preco;
}
let total = valorComImposto(120);

console.log(`O valor a ser pago é ${total}`);
