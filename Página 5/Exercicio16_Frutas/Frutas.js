// 16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e
// R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o
// número de maçãs compradas, calcule e escreva o custo total da compra.

let macas, bananas, quantMacas, quantBananas, valorCompras, valorMacas, valorBananas;

alert("Vamos calcular valores de uma compra de frutas com maças e bananas ")

alert(` Feira de sexta-feira \n
        Temos maças e bananas`);

macas = String(prompt(`Você deseja comprar maças? \n
                       Se sim -- Digite "Sim", Se não -- Digite "Não" `));

if (macas === "Sim"){
    quantMacas = parseInt(prompt(`Digite a quantidade: `));
}
while (quantMacas < 0){
    quantMacas = parseInt(prompt(`Quantidade inválida, Digite novamente: `));
}

bananas = String(prompt(`Você deseja comprar bananas? \n
                         Se sim -- Digite "Sim", Se não -- Digite "Não" `));

if (bananas === "Sim"){
    quantBananas = parseInt(prompt(`Digite a quantidade: `));
}
while (quantBananas < 0){
    quantMacas = parseInt(prompt(`Quantidade inválida, Digite novamente: `));
}

valorCompras = 0

if (quantMacas < 12) {
    valorMacas = 1.3
} 
else {
    valorMacas = 1.0
}

if (quantBananas < 12) {
    valorBananas = 1.8
}
else {
    valorBananas = 1.3
}

valorCompras = (valorMacas * quantMacas + valorBananas * quantBananas)

if (valorCompras > 0){
    alert(`O valor total da sua compra foi: R$ ${valorCompras.toFixed(2)}`)
}
else{
    alert("O usuário não deseja comprar nada.")
}