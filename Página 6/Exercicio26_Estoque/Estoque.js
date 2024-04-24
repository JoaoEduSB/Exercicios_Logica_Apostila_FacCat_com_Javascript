// 26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade
// máxima em estoque e quantidade mínima em estoque de um produto. Calcular e
// escrever a quantidade média ((quantidade média = quantidade máxima +
// quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
// a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever
//  a mensagem 'Efetuar compra'.

let quantAtual, quantMax, quantMin;
let media;

alert(`Vamos verificar a quantidade de um estoque e recomendar\n
       a compra dependendo da média do estoque. `);

quantAtual = parseInt(prompt(`Digite a quantidade atual em estoque: `));
quantMax = parseInt(prompt(`Digite a quantidade máxima em estoque: `));
quantMin = parseInt(prompt(`Digite a quantidade mínima em estoque: `));

media = (quantMax + quantMin) / 2;

if (quantAtual >= media){
    alert("Não efetuar compra.");
}
else {
    alert("Efetuar compra.");
}