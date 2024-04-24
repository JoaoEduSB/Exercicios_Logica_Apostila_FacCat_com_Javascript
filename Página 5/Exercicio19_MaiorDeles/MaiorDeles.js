// 19) Ler dois valores (considere que não serão lidos valores iguais) e
// escrever o maior deles.

let valor1, valor2;

alert("Vamos ler dois valores e exibir o maior deles ");

valor1 = parseInt(prompt(`Digite o primeiro valor:`));
valor2 = parseInt(prompt(`Digite o segundo valor`))
while(valor2 == valor1){
    valor2 = parseInt(prompt(`O segundo valor não pode ser igual ao primeiro valor.\n
    Digite o segundo valor novamente: `));
}

if (valor1 > valor2){
    alert(`O número ${valor1} é maior que o número ${valor2}`);
}
else {
    alert(`O número ${valor2} é maior que o número ${valor1}`);
}
