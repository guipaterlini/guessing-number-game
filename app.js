alert("Bem vindo ao jogo do número secreto!");

const numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;

let tentativas = 0;

while (numeroSecreto != chute) {
  chute = prompt(`Qual é o seu chute entre 1 e ${numeroMaximo}?`);
  tentativas++;

  if (numeroSecreto == chute) {
    alert(
      `Acertou! Você descobriu o número secreto, o ${numeroSecreto}, ${
        tentativas == 1 ? "de primeira!" : "em " + tentativas + " tenativas :)"
      }`
    );
    break;
  } else {
    if (numeroSecreto > chute) {
      alert(`Tente um número maior que ${chute}.`);
    } else {
      alert(`Tente um número menor que ${chute}.`);
    }
  }
}
