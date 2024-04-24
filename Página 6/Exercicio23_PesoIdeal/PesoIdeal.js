// 23) Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma
// pessoa, calcule e mostre seu peso ideal.

let nome, sexo;
let pesoIdeal, altura;

alert(`Vamos ler seus dados e exibir se seu peso é ideal`);

nome = String(prompt(`Digite seu nome:`));
sexo = String(prompt(`Digite o seu sexo, M para Masculino e F para feminino: `));

while ((sexo != "M") && (sexo != "F")){
    sexo = String(prompt(`A informação inserida não é válida. Digite novamente a seguir: `));
}

altura = parseFloat(prompt(`Digite sua altura: `));

if (sexo === "M"){
    pesoIdeal = (72.7 * altura) - 58
}
else if (sexo === "F"){
    pesoIdeal = (62.1 * altura) - 44.7
}

alert(`Seu peso ideal é: ${pesoIdeal.toFixed(1)}`);