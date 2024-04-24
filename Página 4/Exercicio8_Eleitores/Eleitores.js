// 8) Escreva um algoritmo para ler o número total de eleitores de um município,
// o número de votos brancos, nulos e válidos. Calcular e escrever o percentual
// que cada um representa em relação ao total de eleitores.

let votosValidos, votosBrancos, votosNulos, TotalEleitores;
let porcValidos, porcBrancos, porcNulos;

alert(`Vamos calcular a quantidade de eleitores de um município \n e a porcentagem de votos brancos, nulos e válidos`);

votosValidos = parseFloat(prompt(`Digite a quantidade de votos válidos: `));
while (votosValidos < 0) {
    votosValidos = parseFloat(prompt(`Valor incorreto. Digite novamente: `));
}

votosBrancos = parseFloat(prompt(`Digite a quantidade de votos brancos: `));
while (votosBrancos < 0) {
    votosBrancos = parseFloat(prompt(`Valor incorreto. Digite novamente: `));
}

votosNulos = parseFloat(prompt(`Digite a quantidade de votos nulos: `));
while (votosNulos < 0) {
    votosNulos = parseFloat(prompt(`Valor incorreto. Digite novamente: `));
}

totalEleitores = votosValidos + votosBrancos + votosNulos;

porcValidos = votosValidos / totalEleitores * 100;
porcBrancos = votosBrancos / totalEleitores * 100
porcNulos = votosNulos / totalEleitores * 100

alert(`O total de eleitores é: ${totalEleitores}`);
if (porcValidos > 0) {
    alert(`A porcentagem de votos válidos é: ${porcValidos}%`);   
}
else{
    alert(`Não houveram votos válidos`);
}

if (porcBrancos > 0){
    alert(`A porcentagem de votos brancos é: ${porcBrancos}%`);}
else if (porcBranco = 0) {
    alert(`Não houveram votos Brancos`);
}
else{
}

if (porcNulos > 0){
alert(`A porcentagem de votos nulos é: ${porcNulos}%`);
}
else if (porcNulos = 0){
    alert(`Não houveram votos Nulos`);
}
else{
}
