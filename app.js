let btnSalvar = document.getElementById("form__submit");
let respostaSistema = document.getElementById("resposta__sistema");

const numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let tentativas = 0;
let mensagem = "";

function verificandoResultado(event) {
  event.preventDefault();

  let chute = parseInt(document.getElementById("form__input").value);

  if (numeroSecreto == chute) {
    mensagem = `Acertou! Você descobriu o número secreto, o ${numeroSecreto}, ${
      tentativas == 1 ? "de primeira!" : "em " + tentativas + " tenativas :)"
    }`;
  } else {
    if (numeroSecreto > chute) {
      mensagem = `Tente um número maior que ${chute}.`;
    } else {
      mensagem = `Tente um número menor que ${chute}.`;
    }
  }

  respostaSistema.innerText = mensagem;
  tentativas++;
}

btnSalvar.addEventListener("click", verificandoResultado);
