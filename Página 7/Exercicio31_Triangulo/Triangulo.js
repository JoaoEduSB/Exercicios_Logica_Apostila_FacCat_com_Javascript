//31) Ler 3 valores (A, B e C) representando as medidas dos lados de um
// triângulo e escrever se formam ou não um triângulo. OBS: para formar um
// triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

let ladoEsq, ladoDir, base, somaEsq, somaDir, somaBase;
let logEsq, logDir, logBase;

alert(`Vamos ler 3 valores refente aos lados de um triângulo\n
e informar se forma um triângulo`);

ladoEsq = parseFloat(prompt(`Digite o valor que representa o lado esquerdo: `));
ladoDir = parseFloat(prompt(`Digite o valor que representa o lado direito: `));
base = parseFloat(prompt(`Digite o valor que representa a base: `));

// validação lado esquerdo   (Base + lado direito) logEsq = Lógica lado esquerda

somaEsq = (base + ladoDir);

if (ladoEsq < somaEsq) {
    logEsq = "verdadeiro";
}
else {
    logEsq = "falso";
}

// validação lado direito (Base + lado esquerdo) logDir = Lógica lado direito

somaDir = (base + ladoEsq);

if (ladoDir < somaDir) {
    logDir = "verdadeiro";
}
else {
    logDir = "falso"
}

// validação base (lado esquerdo + lado direito)

somaBase = (ladoEsq + ladoDir);

if (base < somaBase) {
    logBase = "verdadeiro"
}
else {
    logBase = "falso"
}

if ((logEsq == "verdadeiro") && (logDir == "verdadeiro") && (logBase == "verdadeiro")) {
    alert(`As medidas formam um triângulo`);
}
else {
    alert(`As medidas não formam um triângulo`);
}

