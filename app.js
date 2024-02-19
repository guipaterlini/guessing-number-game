let btnSalvar = document.getElementById("form__submit");

const numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let tentativas = 0;

function verificandoResultado(event) {
  event.preventDefault();

  let chute = document.getElementById("form__input").value;

  tentativas++;
  if (numeroSecreto == chute) {
    alert(
      `Acertou! Você descobriu o número secreto, o ${numeroSecreto}, ${
        tentativas == 1 ? "de primeira!" : "em " + tentativas + " tenativas :)"
      }`
    );
  } else {
    if (numeroSecreto > chute) {
      alert(`Tente um número maior que ${chute}.`);
    } else {
      alert(`Tente um número menor que ${chute}.`);
    }
  }
}

btnSalvar.addEventListener("click", verificandoResultado);
