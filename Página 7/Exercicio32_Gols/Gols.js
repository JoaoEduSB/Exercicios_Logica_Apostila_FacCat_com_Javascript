// 32) Ler o nome de 2 times e o número de gols marcados na partida (para
// cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser
// impressa a palavra EMPATE.

let timeA, timeB;
let golsA, golsB;

alert(`Vamos ler as informações de dois times e o número de gols e declarar o vencedor.`);

timeA = String(prompt(`Digite o nome do primeiro Time: `));
golsA = parseInt(prompt(`Digite a quantidade de gols: `));

timeB = String(prompt(`Digite o nome do segundo Time: `));
golsB = parseInt(prompt(`Digite a quantidade de gols: `));

if (golsA == golsB) {
    alert(`Os dois times empataram`);
}
else if (golsA > golsB) {
    alert(`O ${timeA} venceu o ${timeB} por ${golsA} a ${golsB}`)
}
else {
    alert(`O ${timeB} venceu o ${timeA} por ${golsB} a ${golsA}`)
}