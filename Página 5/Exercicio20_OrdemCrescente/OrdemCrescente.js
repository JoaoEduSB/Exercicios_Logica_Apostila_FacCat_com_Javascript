// 20) Ler dois valores (considere que não serão lidos valores iguais) e
// escrevê-los em ordem crescente.

let valor1, valor2;

alert("Vamos ler dois valores e exibir em ordem crescente ");

valor1 = parseInt(prompt(`Digite o primeiro valor:`));
valor2 = parseInt(prompt(`Digite o segundo valor`))
while(valor2 == valor1){
    valor2 = parseInt(prompt(`O segundo valor não pode ser igual ao primeiro valor.\n
    Digite o segundo valor novamente: `));
}

if (valor1 > valor2){
    alert(`Valores digitados:\n
    ${valor1} e ${valor2}\n
    Em ordem crescente o ${valor2} vem primeiro e o ${valor1} vem depois`);
}
else {
    alert(`Valores digitados:\n
    ${valor1} e ${valor2}\n
    Em ordem crescente o ${valor1} vem primeiro e o ${valor2} vem depois`);
}
